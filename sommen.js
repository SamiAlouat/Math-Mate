function bereken() {

    function veldWaarde(veld) {
    var waarde = parseInt(veld.value, 10);
    if (!isNaN(waarde)) return waarde
    veld.value = '';
    f.C.value = '';
    return false;
    }
    
    var f = document.optellenform;
    
    var A = veldWaarde(f.A);
    var B = veldWaarde(f.B);
    
    if (A!==false && B!==false) {
    f.C.value = A + B;
    }

    var f = document.aftrekkenform;
    
    var A = veldWaarde(f.A);
    var B = veldWaarde(f.B);
    
    if (A!==false && B!==false) {
    f.C.value = A - B;
    }

    var f = document.vermenigvuldigenform;
    
    var A = veldWaarde(f.A);
    var B = veldWaarde(f.B);
    
    if (A!==false && B!==false) {
    f.C.value = A * B;
    }

    var f = document.delenform;
    
    var A = veldWaarde(f.A);
    var B = veldWaarde(f.B);
    
    if (A!==false && B!==false) {
    f.C.value = A / B;
    }

    var f = document.machtsverheffenform;
    
    var A = veldWaarde(f.A);
    var B = veldWaarde(f.B);
    
    if (A!==false && B!==false) {
    f.C.value = A / B;
    }

    var f = document.percentageform;
    
    var A = veldWaarde(f.A);
    var B = veldWaarde(f.B);
    
    if (A!==false && B!==false) {
    f.C.value = A % B;
    }
    
    var f = document.restwaardeform;
    
    var A = veldWaarde(f.A);
    var B = veldWaarde(f.B);
    
    if (A!==false && B!==false) {
    f.C.value = B - A;
    }
  }
    var num, temp;
    function fun()
    {
      num = parseInt(document.getElementById("num").value);
      if(num)
      {
        temp = document.getElementById("resPara");
        temp.style.display = "block";
        if(num%2==0)
          document.getElementById("res").innerHTML = "Even";
        else
          document.getElementById("res").innerHTML = "Odd";
      }
    }
