from flask import Flask
from flask import render_template
from test1 import f1


app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/summoner/<name>')
def hello_name(name):
    return render_template('main.html', gameList = f1(name))