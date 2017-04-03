var personnes = ['Julien', 'Oceane', 'Dinno', 'Emilie', 'Morel', 'Gregory', 'Elodie', 'Romain', 'Franck', 'Marco', 'Rafa', 'Mouad', 'Florian', 'Maxime', 'Jordi'];



function shuffle(a)
{
   var j = 0;
   var valI = '';
   var valJ = valI;
   var l = a.length - 1;
   while(l > -1)
   {
    j = Math.floor(Math.random() * l);
    valI = a[l];
    valJ = a[j];
    a[l] = valJ;
    a[j] = valI;
    l = l - 1;
  }
  return a;
 }


$("#button").click(function(){

  personnes = shuffle(personnes);
  $(".per").remove();
  for(var position = personnes.length-1; position >=0; position--){
    $( $('table tr').get(position+1) ).append('<td class="per">'+personnes[position]+'</td>');
  }


  console.log(personnes);

      
});

