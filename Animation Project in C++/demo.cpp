#include<iostream.h>
#include<conio.h>
#include<stdio.h>
#include<graphics.h>
#include<dos.h>
#include<stdlib.h>
void displayMan(int x,int y)
{
    circle(x,y,10);         //face
    line(x,y+10,x,y+30);        //neck
    line(x,y+30,x-20,y+40);    //left hand
    line(x,y+30,x+20,y+40);    //right hand
    line(x+20,y+40,x+30,y+30);
    line(x,y+30,x,y+70);        //body
    line(x+30,y+30,x+30,y-50);  //umbrella
    //pieslice(x+30,y-30,0,180,55);
}


void drawCloud(int z,int y)
{
		int r=50;
		arc(z,y,45,135,r);
		arc(z+50,y,45,135,r);
		arc(z+100,y,45,135,r);
		arc(z,y,135,225,r);
		arc(z+50,y,135+90,225+90,r);
		arc(z,y,135+90,225+90,r);
		arc(z+100,y,135+90,225+90,r);
		arc(z+100,y,315,45,r);
}

void drawGrass()
{
    //setcolor(LIGHTGREEN);
    //arc(15,395,30,110,10);
    //setcolor(LIGHTGREEN);
    //arc(35,395,90,160,10);
    //setcolor(LIGHTGREEN);
    //arc(14,395,45,115,14);
    //setcolor(LIGHTGREEN);
    //arc(35,394,105,160,14);
    //setcolor(BROWN);
    //arc(35,396,150,174,14);//1st
    setcolor(LIGHTGREEN);
    arc(75,450,30,110,10);
    setcolor(LIGHTGREEN);
    arc(95,450,90,160,10);
    setcolor(LIGHTGREEN);
    arc(74,450,45,115,14);
    setcolor(LIGHTGREEN);
    arc(95,449,105,160,14); //2nd
    /*setcolor(LIGHTGREEN);
    arc(139,407,30,110,10);
    setcolor(LIGHTGREEN);
    arc(159,407,90,160,10);
    setcolor(GREEN);
    arc(138,407,45,115,14);
    setcolor(GREEN);
    arc(159,406,105,160,14); */ // 3rd
    setcolor(LIGHTGREEN);
    arc(221,448,30,110,10);
    setcolor(LIGHTGREEN);
    arc(241,448,90,160,10);
    setcolor(LIGHTGREEN);
    arc(220,448,45,115,14);
    setcolor(LIGHTGREEN);
    arc(241,447,105,160,14); // 4th
    /*setcolor(GREEN);
    arc(283,393,30,110,10);
    setcolor(GREEN);
    arc(303,393,90,160,10);
    setcolor(GREEN);
    arc(282,393,45,115,14);
    setcolor(GREEN);
    arc(303,392,105,160,14);   //5th  */
    setcolor(LIGHTGREEN);
    arc(356,447,30,110,10);
    setcolor(LIGHTGREEN);
    arc(376,447,90,160,10);
    setcolor(LIGHTGREEN);
    arc(355,447,45,115,14);
    setcolor(LIGHTGREEN);
    arc(376,446,105,160,14);   // 6th
    /*setcolor(LIGHTGREEN);
    arc(431,408,30,110,10);
    setcolor(LIGHTGREEN);
    arc(451,408,90,160,10);
    setcolor(LIGHTGREEN);
    arc(430,408,45,115,14);
    setcolor(LIGHTGREEN);
    arc(451,407,105,160,14);   // 7th */
    setcolor(LIGHTGREEN);
    arc(515,450,30,110,10);
    setcolor(LIGHTGREEN);
    arc(535,450,90,160,10);
    setcolor(LIGHTGREEN);
    arc(514,450,45,115,14);
    setcolor(LIGHTGREEN);
    arc(535,449,105,160,14); // 8th
   /* setcolor(LIGHTGREEN);
    arc(598,390,30,110,10);
    setcolor(LIGHTGREEN);
    arc(618,390,90,160,10);
    setcolor(LIGHTGREEN);
    arc(597,390,45,115,14);
    setcolor(LIGHTGREEN);
    arc(618,389,105,160,14);    // 9th */

}

void main()
{
    int gd=DETECT,gm,i,j,d=0,x=50,y=340,z=50,shouldMove=1;
    int rx,ry,k,l,xl,xr,a;
    initgraph(&gd,&gm,"C:\\TURBOC3\\BGI");
    while(!kbhit())    //WHILE KEYBOARD IS NOT USED,CONTINUE.
    {
	cleardevice();
	setcolor(WHITE);
	setfillstyle(SOLID_FILL,RED);
	arc(x+30,y-30,0,180,55);
	line(x+85,y-30,x-25,y-30);
	floodfill(x+40,y-40,WHITE);
	displayMan(x,360);
	setcolor(BLUE);
	drawCloud(z,60);
	setcolor(BLUE);
	setfillstyle(SOLID_FILL,LIGHTBLUE);

	drawCloud(z+200,60);
	setcolor(BLUE);
	setfillstyle(SOLID_FILL,LIGHTBLUE);

	drawCloud(z+400,60);
	setcolor(BLUE);
	setfillstyle(SOLID_FILL,LIGHTBLUE);

	floodfill(z,70,BLUE);
	floodfill(z+200,70,BLUE);
	floodfill(z+400,70,BLUE);

    drawGrass();

	setcolor(BROWN);
	line(0,450,639,450);
	setcolor(GREEN);

      // for(l=0;l<=639;l+=20)
	       for(a=10;a<=639;a+=10)
		{
		xl=a-10;
		xr=a+10;
		line(xl,450,a,455);
		line(xr,450,a,455);
		line(xl+1,455,a,460);
		line(xr+1,455,a,460);
		line(xl+1,460,a,465);
		line(xr+1,460,a,465);
		line(xl+1,465,a,470);
		line(xr+1,465,a,470);
		line(xl+1,470,a,475);
		line(xr+1,470,a,475);
		line(xl+1,475,a,480);
		line(xr+1,475,a,480);
		}
       /*	setcolor(GREEN);
	for(k=451;k<=480;k++)
		line(0,k,639,k);
	*/
	for(i=0;i<500;i++)
	{
	    rx=rand()%639;
	    ry=rand()%439;
	    if(rx>=(x-40)&&rx<=(x+110))
		if(ry>=(y-50)&&ry<=479)
		    continue;
	    setcolor(LIGHTBLUE);
	    line(rx-10,ry+10,rx,ry);
	}

	//legs
	if(shouldMove)
	{
	    if(d<20)
		d+=4;
	    else
		shouldMove=0;
	    setcolor(WHITE);
	    line(x,y+90,x-d,y+110);
	    line(x,y+90,x+d,y+110);
	}
	else
	{
	    if(d>0)
		d-=4;
	    else
		shouldMove=1;
	    setcolor(WHITE);
	    line(x,y+90,x-d,y+110);
	    line(x,y+90,x+d,y+110);
	}
	delay(200);
	x=(x+10)%639;

    }
    getch();
}
