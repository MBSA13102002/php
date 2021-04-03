import eel

eel.init('web')

@eel.expose
def add(num1,num2):
    return int(num1)+int(num2)

eel.start('main.html')