/********************************************************************************

	Programmer: Robert Aguilar	

	Date:		10/10/2020
	
	Filename:	purple.css
	
	Purpose:	Function that passes a class list as a parameter; the class 
				list is such that it toggles the body document into dark mode.

********************************************************************************/

function toggleFunction()
{
	var element=document.body;
	element.classList.toggle("dark-mode");
}
