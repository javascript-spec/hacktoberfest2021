function display(val)
{
    document.getElementById("screen").value+=val
}

function clear_input()
{
    document.getElementById("screen").value=""
}

function equalto()
{
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result
}