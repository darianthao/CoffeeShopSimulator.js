function validateDrink()
{
    var menuItem=document.getElementById("menuItems").value;
    if(menuItem=="Latte" || menuItem=="latte")
    {
        alert("Espresso Shots: 1/1/2/3 & Steamed Milk");
        return false;
    }
    else if(menuItem=="Frappicino" || menuItem=="frappicino")
    {
        alert("Frap Roast Pumps: 1/2/3/4 & Milk To The Bottom Line On Cup, Blended with Ice");
        return false;
    }
    else if(menuItem=="Cappacino" || menuItem=="cappacino")
    {
        alert("Espresso Shots: 1/1/2/3, Less Milk, Steam The Top Of Milk For 10 Seconds To Create Extra Foam");
        return false;
    }
    else if(menuItem=="Mocha" || menuItem=="mocha")
    {
        alert("Espresso Shots: 1/1/2/3, Mocha Pumps: 2/3/4/6, Steamed Milk");
        return false;
    }
    else if(menuItem=="Flat white" || menuItem=="flat white")
    {
        alert("Ristretto Espresso Shots: 2/2/3/4 w/ Steamed Whole Milk");
        return false;
    }
    else if(menuItem=="Espresso" || menuItem=="espresso")
    {
        alert("Espresso Shots: 1/2/3/4");
        return false;
    }
    else {
        alert("That Item is not available.");
    }
}