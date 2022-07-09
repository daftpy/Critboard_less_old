from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import os

"""
Usage:
curl [SERVER]/cmd\=python%20../src/manage.py%20--help
curl [SERVER]/cmd\=ls
"""

class RemoteExecServer(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        print('test', self.request, self.path)
        path = self.path
        if path.startswith('/'):
            path = path[1:]
        if path.startswith('?'):
            path = path[1:]
        
        url_parts = parse_qs(path)

        cmd = url_parts.get('cmd', None)[0]

        if cmd is not None:
            stream = os.popen(cmd)
            output = stream.readlines()
            print("".join(output))
        
        self._set_response()

def run(server_class=HTTPServer, handler_class=RemoteExecServer, port=8001):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    try:
        print('Serving...')
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("Keyboard interupted")
        pass
    httpd.server_close()

if __name__=='__main__':
    run()
