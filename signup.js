function formvalidations()
    {
        //Target_uname_input
       var uname_input=document.getElementById(`uname`)
       var email_input=document.getElementById(`email`)
       var pwd_input=document.getElementById(`pwd`)
       var cpwd_input=document.getElementById(`cpwd`)
       var mbl_input=document.getElementById(`mbl`)
       var date_input=document.getElementById(`date`)
       var l1_input=document.getElementById(`l1`)
       var l2_input=document.getElementById(`l2`)
       var l3_input=document.getElementById(`l3`)
       var textarea_input=document.getElementById(`textarea`)  
       var file_input=document.getElementById(`file`)
       var term_input=document.getElementById(`term`)


       

    

       
       
       var status=true
       
    
       //errors
       var uname_span=document.getElementById(`uname_span`)
       var email_span=document.getElementById(`email_span`)
       var pwd_span=document.getElementById(`pwd_span`)
       var cpwd_span=document.getElementById(`cpwd_span`)
       var mble_span=document.getElementById(`mble_span`)
       var date_span=document.getElementById(`date_span`)
       var gender_span=document.getElementById(`gender_span`)
       var lang_span=document.getElementById(`lang_span`)
       var textarea_span=document.getElementById(`textarea_span`)
       var image_span=document.getElementById(`image_span`)
       var term_err_span=document.getElementById(`term_span`)


       

       
    
    
       //icons
       var wrong=  `<i class="bi bi-exclamation-triangle-fill" ></i>`
       var right= `<i class="bi bi-check-circle-fill"></i>`
    
       //uname
       if(uname_input.value==""|| uname_input.value==undefined)
       {
        
        uname_span.innerHTML=`${wrong}  Enter Name`
        uname_input.style.border="1px solid #f00c0c"
        uname_span.className="text-danger" 
         status=false;
       }
       else if(!uname_input.value.match(/^[a-z]+$/))
       {
        uname_span.innerHTML=`${wrong}   Enter correct Name`
        uname_input.style.border="1px solid #f00c0c"
        uname_span.className="text-danger" 
        status=false;
    
       }
       else
       {
        uname_span.innerText=``
        uname_input.style.border="1px solid #076604"
        uname_span.className="text-success" 
        
       }
    
       //email

       if(email_input.value==""|| email_input.value==undefined)
       {
        email_span.innerHTML=`${wrong}  Enter Email`
        email_input.style.border="1px solid #f00c0c"
        email_span.className="text-danger" 
        status=false;
       }

       else if(!email_input.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
       {
        email_span.innerHTML=`${wrong}  Enter correct email`
        email_input.style.border="1px solid #f00c0c"
        email_span.className="text-danger" 
        status=false;
    
       }

       else
       {
        email_span.innerText=``
        email_input.style.border="1px solid #076604"
        email_span.className="text-success" 
         
       }

       
    
        //password

        if
        (pwd_input.value==""|| pwd_input.value==undefined)
        {
    
         pwd_span.innerHTML=`${wrong}  Enter Password`
         pwd_input.style.border="1px solid #f00c0c"
         pwd_span.className="text-danger" 
         status=false;
        }
 
         else if(!pwd_input.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/))
        {
            pwd_span.innerHTML=`${wrong}   Enter correct password`
            pwd_input.style.border="1px solid #f00c0c"
            pwd_span.className="text-danger" 
            status= false;
     
        }
        
        else
        {
            pwd_span.innerText=``
            pwd_input.style.border="1px solid #076604"
        
            
        }

        //confirm password
        
        if(cpwd_input.value==""|| cpwd_input.value==undefined)
        { 
         cpwd_span.innerHTML=`${wrong} Enter Password`
         cpwd_input.style.border="1px solid #f00c0c"
         cpwd_span.className="text-danger" 
         status=false;
        }
 
        else if(cpwd_input.value!==pwd_input.value)
        {
            cpwd_span.innerHTML =`${wrong} confirm password`;   
            cpwd_input.style.border="1px solid red";
            cpwd_span.className="text-danger"
			status=false;
     
        }
        
        else
        {
            cpwd_span.innerText=``
            cpwd_span.className="text-success"
            cpwd_input.style.border="1px solid #076604"
    
            
        }

   //mobile

    if(mbl_input.value==""|| mbl_input.value==undefined)
    { 
     mble_span.innerHTML=`${wrong}  Enter Mobile Number`
     mbl_input.style.border="1px solid #f00c0c"
     mble_span.className="text-danger" 
     status=false;
    }

    else if(!mbl_input.value.match(/^\d{10}$/))
    {
        mble_span.innerHTML=`${wrong}  Enter valide 10Digit mobile Number`
        mbl_input.style.border="1px solid #f00c0c"
        mble_span.className="text-danger" 
        status= false;
 
    }
    
    else
    {
        mble_span.innerText=``
        mbl_input.style.border="1px solid #076604"
        mble_span.className="text-success"
        
    }
        
        //Date of birth

        
        if(date_input.value=="")
        {
    
         date_span.innerHTML=`${wrong}  Enter Date of Birth`
         date_input.style.border="1px solid #f00c0c"
         date_span.className="text-danger" 
         status=false;
        }
        else if(!date_input.value.match())
        {

        date_span.innerHTML=`${wrong} Enter valide date of birth`
        date_input.style.border="1px solid #f00c0c"
        date_span.className="text-danger" 
        status= false;

        }

        else
        {
            date_span.innerText=``
            date_input.style.border="1px solid #076604" 
        }



     //Gender validation

       if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false )&&( form.gender[2].checked == false ) )
        {
    
            gender_span.innerHTML=`${wrong} Select Gender`
            gender_span.className="text-danger" 
            status=false;
        }

        else 
        {
            gender_span.innerText=``
            gender_span.className="" 
        }

        //Languages

       if(!l1_input.checked|| l2_input.checked||l3_input.checked)
       {
     
        lang_span.innerHTML=`${wrong} Select Languages`
        lang_span.className="text-danger" 

        status=false;
       }
      
       if (l1_input.checked||l2_input.checked||l3_input.checked||l1_input.checked&&l2_input.checked&&l3_input.checked)
       {
        lang_span.innerHTML=``
        lang_span.className="" 
        
         status=false
       }
 
      //    Address

       if(textarea_input.value==""|| textarea_input.value==undefined)
        {
          
        textarea_span.innerHTML=`${wrong}  Select  Address`
        textarea_input.style.border="1px solid #f00c0c"
        textarea_span.className="text-danger" 
         status=false;
        }
        
        else
        {
            textarea_span.innerText=``
            textarea_input.style.border="1px solid #076604"
        
            
        }

        //file upload
        if( file_input.value==""||  file_input.value==undefined)
        {
     
        image_span.innerHTML=`${wrong}  upload the file`
        file_input.style.border="1px solid #f00c0c"
        image_span.className="text-danger" 
         status=false;
        }
        
        else
        {
            image_span.innerText=``
            file_input.style.border="1px solid #076604"
            
        }  

       // Terms and conditions

        
        var term_input=document.getElementById(`term`)

        if(term_input.value="")
       {
       
       term_err_span.innerHTML=`${wrong} Accept the Terms & Conditions`
       term_err_span.className="text-danger"

        status=false;

       }

       if(!term_input.checked)
       {
       
       term_err_span.innerHTML=`${wrong}Accept the Terms & Conditions.`
       term_err_span.className="text-danger"

        status=false;

       }

       if(term_input.checked)
       {
       
       term_err_span.innerHTML=`${right}Thank you`
       term_err_span.className="text-success"

        status=false;

       }


     return status

      }
        


       //File Upload

         function previewImage() {
         var file = document.getElementById("file").files
        if (file.length > 0) {
            var fileReader = new FileReader()
 
            fileReader.onload = function (event) {
                document.getElementById("preview").setAttribute("src", event.target.result)
                
            }
 
            fileReader.readAsDataURL(file[0])
        }
       
        //captcha
  
    
    // var CaptchaText=document.getElementById("CaptchaText")
    // var CaptchaEnter=document.getElementById("CaptchaEnter")
    // var refreshbtn=document.getElementById("refreshbtn")
    // var checkbtn=document.getElementById("checkbtn")
    // var captcha_span=document.getElementById("captcha_span")
    // var chars="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    
    // var captcha
    // function generateCaptcha(){
    //     captcha=""
    //     for(i=0;i<5;i++){
    //         let index =Math.floor(Math.random()*chars.length);
    //         captcha=captcha+chars[index]
         
    //     }
    //     CaptchaText.value=captcha
    // }

    // function validateCaptcha(){
    //     if(captcha==CaptchaEnter.value){
    
    //        captcha_span.innerHTML=`Captcha matched`
    //        captcha_span.className="text-success"
    //     }
    //     else
    //     {
    //         captcha_span.innerHTML=`Please Enter Valid Captcha Code`
    //         CaptchaEnter.value=""
    //     }
    // }
    
    
    //  generateCaptcha()
    
    // refreshbtn.onclick=generateCaptcha;
    // checkbtn.onclick=validateCaptcha;
    
    
 }

  