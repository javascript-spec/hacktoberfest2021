                                #path finding : Breadth First Search

import queue
def createBackground():
    background=[]
    background.append(["#","#","#","#","#","0","#"])
    background.append(["#"," "," "," ","#"," ","#"])
    background.append(["#"," ","#"," ","#"," ","#"])
    background.append(["#"," ","#"," "," "," ","#"])
    background.append(["#"," ","#","#","#"," ","#"])
    background.append(["#"," "," "," ","#"," ","#"])
    background.append(["#","#","#","#","#","X","#"])
    return background


def createBackground2():
    background=[]
    background.append(["#","#","#","0","#","#","#","#"])
    background.append(["#"," "," "," "," "," ","#","#"])
    background.append(["#"," "," ","#","#"," ","#","#"])
    background.append(["#"," ","#"," ","#"," ","#","#"])
    background.append(["#"," ","#"," ","#","#","#","#"])
    background.append(["#"," "," "," "," "," ","#","#"])
    background.append(["#","#","#","#","#","X","#","#"])
    return background


def printBackground(background,path=""):
    for x,pos in enumerate(background[0]):
        if pos=="0":
            start=x

    i=start
    j=0
    pos=set()
    for move in path:
        if move=="L":
            i-=1
        elif move=="R":
            i+=1
                
        elif move=="U":
            j-=1
        elif move=="D":
            j+=1
        pos.add((j,i))

    for j,row in enumerate(background):
        for i,col in enumerate(row):
            if(j,i) in pos:
                print("+ ",end="")
            else:
                print(col+" ",end="")
        print()


def valid(background,moves):
    for x,pos in enumerate(background[0]):
        if pos=="0":
            start=x

    i=start
    j=0
    for move in moves:
        if move=="L":
            i-=1
        elif move=="R":
            i+=1
                
        elif move=="U":
            j-=1
        elif move=="D":
            j+=1

        if not(0 <= i< len(background[0])and 0 <= j<len(background)):
            return False
        elif(background[j][i]=="#"):
            return False

    return True


def findEnd(background,moves):
    for x,pos in enumerate(background[0]):
        if pos=="0":
            start=x
    i=start
    j=0
    for move in moves:
        if move=="L":
            i-=1
        elif move=="R":
            i+=1
                
        elif move=="U":
            j-=1
        elif move=="D":
            j+=1
    if background[j][i]=="X":
        print("Found: "+moves)
        printBackground(background,moves)
        return True
    return False
 
            



#main program
nums=queue.Queue()
nums.put("")
add=""
background=createBackground2()
while not findEnd(background,add):
    add=nums.get()
    #print(add)
    for j in ["L","R","U","D"]:
        put=add+j
        if valid(background,put):
            nums.put(put)
