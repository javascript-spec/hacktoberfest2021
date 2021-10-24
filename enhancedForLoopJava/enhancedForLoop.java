package newlearning;

import java.util.*;

public class EnhancedFor {
    public static void main(String[] args) {
        //Learning about Enhanced For Loop

        int myList[]={2,5};

        for(int x:myList)
        {
            System.out.println("Items in the array are:"+x);
        }

        //Learning about Collections

        List<Integer> newList =new ArrayList<>( );
        newList.add(3);
        newList.add(98);
        newList.add(43);
        newList.add(63);
        newList.add(34);

        System.out.println("The items in the list are: \t"+newList);




        }
    }

