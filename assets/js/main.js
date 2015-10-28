 function sendRequest (url)
           {
               var obj=$.ajax({url:url,async:false});
                var result=$.parseJSON(obj.responseText);
                return result;
           }//end of sendRequest function


			function login(){
			            $ ( document ).ready ( function ( )
			            {
			 				var user_name = encodeURI(document.getElementById("user_name").value);
							var user_pass = encodeURI(document.getElementById("user_pass").value);
						   var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/christian-biassey-bogart/MobileWeb/midsem_miniproj/controller.php?cmd=1&user_name="+user_name+"&user_pass="+user_pass;
			               var obj = sendRequest (url);
						
							
			                if ( obj.result === 1 )
			                {
								   window.location.replace("page.html");

								   window.onload = function() {
 									displayallproducts();
									};

								   //displayallproducts();
			                 }
							 else{
								  $ ( "#status" ).text ( "login failed" );
							 
							 }
							 //$(".checkboxes").hide();
			            });
						} 

			function displayallproducts(){
		            $ ( document ).ready ( function ( )
		            {
		 
					   var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/christian-biassey-bogart/MobileWeb/midsem_miniproj/controller.php?cmd=2";
		               var obj = sendRequest (url);
					
						
		                if ( obj.result === 1 )
		                {
							   
							var i = 0;
							var products ="";
							
							for ( ; i < obj.products.length; i++ )
		                    {
							
							products += " <tr> <td>"+obj.products[i].pos_product_id+"</td> <td>"+obj.products[i].pos_product_name+"</td> <td>"+obj.products[i].pos_product_qty+"</td> <td>"+obj.products[i].pos_product_price+"</td> </tr> ";
							}
							
							
		                    $ ( "#products_table" ).html (products);


		                    //$ ( "#add_panel" ).style.visibility = 'hidden';
		                 }
						 else{
							  $ ( "#status" ).text ( "Found no products in stock" );
						 
						 }
					
		            });
			}


			//Function for adding task
			 function addproduct(){
				var product_name = encodeURI(document.getElementById("product_name").value);
				var product_qty = encodeURI(document.getElementById("product_qty").value);
				var product_price = encodeURI(document.getElementById("product_price").value);
				
				
				 var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/christian-biassey-bogart/MobileWeb/midsem_miniproj/controller.php?cmd=3&product_name="+product_name+"&product_qty="+product_qty+"&product_price="+product_price;
               var obj = sendRequest (url);
			  if(obj.result==1){
			  statusmessages(obj.message);
			  $ ("#display").html("");
			  }
			  else{
			  errormessage(obj.message);
			  }
			  
			  // $("#name").text('');
				//$("#entry").text('');
			 }


 			function editproduct(){
				var product_id = encodeURI(document.getElementById("product_id").value);
				var product_price = encodeURI(document.getElementById("product_price").value);
				
				
				 var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/christian-biassey-bogart/MobileWeb/midsem_miniproj/controller.php?cmd=4&product_id="+product_id+"&product_price="+product_price;
               var obj = sendRequest (url);
			  if(obj.result===1){
			  //statusmessages(obj.message);
			  $ ("#display").html("");
			  }
			  else{
			  errormessage(obj.message);
			  }
			  
			  // $("#name").text('');
				//$("#entry").text('');
			 }




			 function displayaddform(){


					var addform = "" ;
					addform = "<h1>Add Product</h1><form role='form'><div class='form-group'><label for='product_name'>Product name:</label><input type='text' class='form-control' id='product_name'  placeholder='Enter Product Name'></div><div class='form-group'><label for='product_qty'>Product Quantity:</label><input type='text' class='form-control' id='product_qty'  placeholder='Enter product quantity'></div><div class='form-group'><label for='product_price'>Product Price(GHc) :</label><input type='number' step='any' class='form-control' id='product_price'  placeholder='Enter product price'></div> <button type='submit' class='btn btn-warning btn-lg' onclick='addproduct()'>Add Product</button></form>	<div id='status'></div>";


				 	$ ("#display").html(addform);
							
}

			function displayeditform(){


					var editform = "" ;
					editform = "<h1>Edit Price</h1><form role='form'><div class='form-group'><label for='product_name'>Product id:</label><input type='text' class='form-control' id='product_id'  placeholder='Enter Product id'></div><div class='form-group'><label for='product_price'>Product Price(GHc) :</label><input type='number' step='any' class='form-control' id='product_price'  placeholder='Enter product price'></div> <button type='submit' class='btn btn-warning btn-lg' onclick='editproduct()'>Update Product</button></form>	<div id='status'></div>";


				 	$ ("#display").html(editform);
							

			 }
			 