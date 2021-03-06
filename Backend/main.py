import time
import logging
import argparse
import os
import json

from Communication.flask_server import FlaskServer
from Controller.controller import Controller

logger = None


def parse_input_file(config_file):
    flask_config = {}
    db_config = {}

    with open(config_file) as fin:
        j = json.loads(fin.read())
        for key in j.keys():
            if "mysql" in key:
                db_config[key] = j[key]
            elif "flask" in key:
                flask_config[key] = j[key]
            else:
                logger.warning("Invalid Json key '{}' in config file.".format(key))

    return flask_config, db_config


def init_flask_server(flask_config, controller):
    flask = FlaskServer(flask_config, controller)
    flask.run()


def init_logger():
    global logger
    logger = logging.getLogger()

    log_format_string = \
        '[ %(levelname)8s ] | %(asctime)20s | %(filename)15s | %(lineno)4d | %(funcName)15s() | %(message)s'

    log_file_name = os.path.join(os.getcwd(), 'Logs', 'job_finder%s.log' % time.strftime('%Y-%m-%d %H-%M-%S'))
    logger.setLevel(logging.DEBUG)

    logging.basicConfig(
        format=log_format_string,
        handlers=[
            logging.FileHandler(log_file_name),
            logging.StreamHandler()
        ])


def main():
    parser = argparse.ArgumentParser(description="Proiect Colectiv - Platforma joburi")
    parser.add_argument('config', metavar='config_file', type=str,
                        help='Config file for flask server and database connection')
    args = parser.parse_args()

    config_file = args.config

    init_logger()
    logger.debug("Logger was initialised.")

    if not os.path.exists(config_file):
        logger.error("Error: Path '{}' does not exist".format(config_file))
        return

    flask_config, db_config = parse_input_file(config_file)
    logger.debug('Input file {} was parsed.'.format(config_file))
    logger.debug("Flask config: {}".format(flask_config))
    logger.debug("Db config: {}".format(db_config))

    controller = Controller(db_config)
    init_flask_server(flask_config, controller)


# run with:  py -3 main.py config.json
# test server with localhost:port/test
if __name__ == "__main__":
    main()
