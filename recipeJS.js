let recipeOptions = ["Breakfast", "Lunch", "Dinner"];

let chilliIngredients = [2, 1, 1, 4 , 1, 1 , 2 , 2, 2, 2 , 1, 0.5];

let crepeIngredients = [1, 1, 1, 1, 2 , 1, 0.5];

let fillingIngredients = [1,5 , 1];

let veggiesIngredients = [2, 6, 2, 2 ];

let sauceIngredients = [2, 1, 4, 1, 1, 28, 2];

let spicesIngredients = [2, 1, 2, 2, 4];



$(document).ready(function() {
    //alert("JUERY WORKING");

    /* function myGeeks() { 
        var str = "jhkj7682834"; 
        var matches = str.match(/(\d+)/); 
          
        if (matches) { 
            document.getElementById('GFG').innerHTML 
                    = matches[0]; 
        } 
    } */

    

    

    function doubleRecipe(arr) {
        alert("FUNCTION WORKS");

         for (let z = 0; z < arr.length; z++) {
        
            $("li span:nth-child(z)").html(arr[z]*2)
            
        }


    }

    

    

    for (let i = 0; i < recipeOptions.length; i++) {
        $("#chooseRecipe").append(new Option(recipeOptions[i], recipeOptions[i]));
    }   

    $("#chooseRecipe").change(function() {

        let inChoice = $("#chooseRecipe").val();

        $("#recipeResult").html("");
        if (inChoice == "Lunch") {
            $.ajax({url: "chilli.html", success:function(chilli) {
                $("header h2").slideUp();
                $('#recipeResult').hide().html(chilli).slideDown(1000, "linear");

                $("#lunchInstructions").hide(); 

                $("#chilliIngredients").hide();
                
                $("#showIngredients").click(function() {

                    $("#chilliIngredients").hide().slideDown(1000);
                   
                    /* for (let j = 0; j < chilliIngredients.length; j++) {
                        var chilli = chilliIngredients[j];
                        var ul = document.getElementById("chilliIngredients");
                        var li = document.createElement('li');
                        li.appendChild(document.createTextNode(chilli));
                        ul.appendChild(li);

                    } */
                    $("#doubleRecipe").click(function() {
                        
                        for (let z = 0; z < chilliIngredients.length; z++) {
        
                            $("li span").eq(z).html(chilliIngredients[z]*2);
  
                        }
                    });

                    $("#halfRecipe").click(function(){

                        for (let z = 0; z < chilliIngredients.length; z++) {
        
                            $("li span").eq(z).html(chilliIngredients[z]*0.5);
  
                        }

                    });

                    $("#defaultRecipe").click(function() {
                       
                        for (let z = 0; z < chilliIngredients.length; z++) {
        
                            $("li span").eq(z).html(chilliIngredients[z]);
  
                        }

                    });


                });

                $("#hideIngredients").click(function() {
                    $("#chilliIngredients").slideUp(1000)
                 });

                $("#showLunch").click(function(){

                    $("#lunchInstructions").slideDown(1000);

                });

                $("#hideLunch").click(function() {
                    
                    $("#lunchInstructions").slideUp(1000);

                });
                
            }});
        } 
        else{
            if (inChoice == "Breakfast") {
                $.ajax({url: "crepes.html", success:function(crepes) {
                    $("header h2").slideUp();
                    $("#recipeResult").hide().html(crepes).slideDown(1000, "linear");
                    $("#crepesIngredients").hide();
                    $("#breakfastInstructions").hide();
                    $("#showIngredients").click(function() {

                        $("#crepesIngredients").hide();

                        $("#crepesIngredients").slideDown(1000);



                        $("#doubleRecipe").click(function() {
                        
                            for (let y = 0; y < crepeIngredients.length; y++) {
            
                                $("#crepes li span").eq(y).html(crepeIngredients[y]*2);
      
                            }

                            for (let x = 0; x < fillingIngredients.length; x++) {
                                
                                $("#filling li span").eq(x).html(fillingIngredients[x]*2);
                                
                            }
                        });
    
                         $("#halfRecipe").click(function(){
    
                            for (let w = 0; w < crepeIngredients.length; w++) {
            
                                $("#crepes li span").eq(w).html(crepeIngredients[w]*0.5);
      
                            }
                            for (let v = 0; v < fillingIngredients.length; v++) {
                                
                                $("#filling li span").eq(v).html(fillingIngredients[v]*0.5);
                                
                            }
    
                        }); 
    
                        $("#defaultRecipe").click(function() {
                           
                            for (let u = 0; u < crepeIngredients.length; u++) {
            
                                $("#crepes li span").eq(u).html(crepeIngredients[u]);
      
                            }

                            for (let t = 0; t < fillingIngredients.length; t++) {
            
                                $("#filling li span").eq(t).html(fillingIngredients[t]);
      
                            }
    
                        });
                        
                    
                     });

                     $("#hideIngredients").click(function() {
                        $("#crepesIngredients").slideUp(1000)
                     });


                     $("#showBreakfast").click(function(){

                        $("#breakfastInstructions").slideDown(1000);
    
                    });
    
                    $("#hideBreakfast").click(function() {
                        
                        $("#breakfastInstructions").slideUp(1000);
    
                    });

                     
                }});
            }
            
            
            else {
                if (inChoice == "Dinner") {
                    $.ajax({url: "dinner.html", success:function(dinner) {
                        $("#recipeResult").hide().html(dinner).slideDown(1000, "linear");
                        $("#dinnerIngredients").hide();
                        $("#dinnerInstructions").hide();
                        $("#showIngredients").click(function() {

                            $("#dinnerIngredients").hide();

                            $("#dinnerIngredients").slideDown(1000);
                            
                            $("#doubleRecipe").click(function() {
                        
                                for (let s = 0; s < veggiesIngredients.length; s++) {
                
                                    $("#veggies li span").eq(s).html(veggiesIngredients[s]*2);
          
                                }
    
                                for (let r = 0; r < sauceIngredients.length; r++) {
                                    
                                    $("#sauce li span").eq(r).html(sauceIngredients[r]*2);
                                    
                                }

                                for (let q = 0; q < spicesIngredients.length; q++) {
                                    
                                    $("#spices li span").eq(q).html(spicesIngredients[q]*2);
                                    
                                }

                            });
        
                             $("#halfRecipe").click(function(){
        
                                for (let p = 0; p < veggiesIngredients.length; p++) {
                
                                    $("#veggies li span").eq(p).html(veggiesIngredients[p]*0.5);
          
                                }

                                for (let n = 0; n < sauceIngredients.length; n++) {
                                    
                                    $("#sauce li span").eq(n).html(sauceIngredients[n]*0.5);
                                    
                                }

                                for (let m = 0; m < spicesIngredients.length; m++) {
                                    
                                    $("#spices li span").eq(m).html(spicesIngredients[m]*0.5);
                                    
                                }
        
                            }); 
        
                            $("#defaultRecipe").click(function() {
                               
                                for (let k = 0; k < veggiesIngredients.length; k++) {
                
                                    $("#veggies li span").eq(k).html(veggiesIngredients[k]);
          
                                }
    
                                for (let j = 0; j < sauceIngredients.length; j++) {
                
                                    $("#sauce li span").eq(j).html(sauceIngredients[j]);
          
                                }

                                for (let h = 0; h < spicesIngredients.length; h++) {
                
                                    $("#spices li span").eq(h).html(spicesIngredients[h]);
          
                                }
        
                            });
                            
                         });

                         $("#hideIngredients").click(function() {
                            $("#dinnerIngredients").slideUp(1000)
                         });


                         $("#showDinner").click(function(){

                            $("#dinnerInstructions").slideDown(1000);
        
                        });
        
                        $("#hideDinner").click(function() {
                            
                            $("#dinnerInstructions").slideUp(1000);
        
                        });

                    }});
                } 
                else{
                    $("header h2").slideDown();
                  $("#recipeResult").html("");   
                }
               
            }            
        }
    });

    

});