var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  bio: `Cantante y músico británico, fundador y líder de The Beatles, el mítico cuarteto de Liverpool que dominó el panorama musical en la década de 1960. Durante su etapa en The Beatles, John Lennon aportó a la banda sus inquietudes creativas y su radical inconformismo, frente a la vena más comercial y frívola de Paul McCartney, con quien compartió protagonismo en la composición de los temas. Consumada en 1970 la disolución del grupo, emprendió una nueva etapa musical con resultados tan memorables como el álbum Imagine (1971). Tras un retiro de cinco años, en 1980 fue asesinado por un perturbado poco después de presentar su último trabajo, Double Fantasy. John Winston Lennon nació en Liverpool el 9 de octubre de 1940, mientras los aviones nazis bombardeaban la ciudad. Su padre, llamado Alfred, era un marino que visitaba poco el hogar, hasta que desapareció por completo. Luego fue su madre, Julia Stanley, la que desapareció, dejando el niño al cuidado de una hermana suya llamada Mary. Fue ella quien enseñó a John los primeros acordes en un viejo banjo del abuelo de éste. En 1956 conoció a un muchacho que, como él, sólo se sentía plenamente realizado con una guitarra en las manos: Paul McCartney. Con Paul formó su primer grupo amateur, The Quarrymen, dando comienzo a un período de aprendizaje acelerado de los ritmos del rock and roll. Las piezas de los Beatles, compuestas en su mayor parte por John y Paul, se caracterizaban por los hallazgos melódicos y armónicos, dentro de lo que después se ha llamado el "sonido Liverpool". Con Yoko había formado la Plastic Ono Band y con ella publicó una docena de discos de larga duración. Su talento como compositor y letrista siguió manifestándose en temas como "Give peace a chance", "Power to the people" o "Some time in New York City". Pero su éxito indiscutible fue Imagine, un elepé intensamente personal, editado en 1971, que contenía la canción del mismo nombre, cuyo texto llegaría a ser todo un manifiesto pacifista en aquella década conflictiva. Días después, el 8 de diciembre de 1980, las balas asesinas de un adorador perturbado terminaron con su vida y lo convirtieron, si es que aún no lo era, en un dios de la modernidad. El escritor Norman Mailer afirmó: "Hemos perdido a un genio del espíritu". Como reacción inmediata a su muerte, los seguidores de Lennon llevaron póstumamente "Imagine" al número uno de las listas. Nunca tal número de seres humanos habían llorado tanto al escuchar una canción.`
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  bio: "Compositor e intérprete británico que formó parte de The Beatles y compuso, junto con John Lennon, la mayoría de las canciones del grupo. Tras la disolución en 1970 de The Beatles, sin duda la banda de rock y pop más popular e influyente de los 60, Paul McCartney fundó el grupo Wings con su mujer Linda Eastman y el guitarrista Denny Laine y emprendió una dilatada trayectoria en solitario. A los catorce años conoció en una fiesta a John Lennon, quien le introdujo en su grupo The Quarrymen. Desde entonces trabó una gran amistad con Lennon, con el que compondría la mayor parte de los temas. A finales de los años 50 la banda adoptó diversas denominaciones antes de llegar a The Beatles, nombre con el que acudieron a cumplir su contrato en Hamburgo en 1960. Tras algunos rumores en los que se hablaba de que McCartney había muerto en un accidente de circulación en 1966 y se le había sustituido por un doble, Paul decidió abandonar el conjunto en mayo de 1970 debido a discrepancias con el resto de los componentes.En los años ochenta grabó nuevos álbumes y algunas canciones con cantantes de renombre, como Michael Jackson y Stevie Wonder, y en la década siguiente diversificó sus intereses musicales, que llegarían incluso a la música clásica: en 1991 estrenó en la catedral de su ciudad natal su primera composición, el Oratorio de Liverpool para orquesta y coro. Entre 1994 y 1995 se reunió por primera vez con sus ex compañeros Ringo Starr y George Harrison en un estudio de grabación; ese último año se reconcilió con Yoko Ono. Paul McCartney ha seguido manteniendo su dedicación a la música abriéndose a toda clase de géneros y a otros campos del mundo del arte y del espectáculo, desde el cine de animación hasta la literatura y la pintura."
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  bio: "Guitarrista y compositor británico de música pop, miembro fundador de los Beatles. George Harrison nació el 24 de febrero de 1943 en Wavertree, suburbio de Liverpool, ciudad por entonces devastada por los aviadores nazis. La primera canción de George que apareció en un disco de los Beatles fue Don’t bother me, del segundo álbum, Meet the Beatles, pero sus composiciones no tuvieron apenas salida hasta años más tarde. Su contribución como guitarra solista al sonido de la banda fue, sin embargo, decisiva. Sus punteos afilados y melódicos, herederos de Chet Atkins y Carl Perkins, y su acompañamiento vocal a las armonías de John Lennon y Paul McCartney fueron sus señas de identidad más características. El caracter retraído y a veces esquivo de George le valió el apodo de «el beatle silencioso», «serio», o incluso «místico», por su afición a las religiones orientales, en oposición a la exhuberancia y el magnetismo de sus compañeros de banda. Sin embargo, a su muerte, sus amigos recordaron principalmente su humanidad, su cáustico sentido del humor y su capacidad para disfrutar de la vida y de aficiones mundanas como la jardinería y los coches deportivos. El 29 de noviembre de 2001, George Harrison murió rodeado de su mujer y su hijo en casa de un amigo en Los Ángeles, California. Su lucha contra el cáncer le había llevado a varias intervenciones en clínicas de Suiza y Estados Unidos, desde que se le detectó un tumor en la garganta en 1997."
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
bio: "El mundo lo conoce como Ringo Starr, pero su nombre real es Richard Starkey, quien nació en una familia de clase trabajadora proveniente de Liverpool. Su infancia no fue para nada fácil, debido a que sus padres se divorciaron estando él muy joven. Cuando tenía apenas seis años de edad, estuvo en estado de coma, debido a una complicación de una peritonitis (inflamación del tejido abdominal). sorprendentemente, el niño se logró recuperar; pero años después volvió a enfermarse de gravedad al padecer una pleuresía, que se originó por un simple resfriado. Antes de llegar a la fama, el entonces joven fue incluido dentro del grupo musical Rory Storm & The Hurricanes, en el que decidió cambiar su nombre a Ringo Starr, el cual se colocó porque le parecía «nombre de mascota». El músico conoció a Los Beatles tras una serie de presentaciones en Alemania con su grupo y, con el tiempo, se hizo muy amigo de los integrantes de la entonces desconocida agrupación. Dos años después, John Lennon lo invitó a formar parte de su banda, a lo cual Ringo aceptó con gratitud. Tras la ruptura de Los Beatles, Ringo Starr editó su primer álbum de estudio, Sentimental Journey, en el cual se puede disfrutar del apasionante sonido del jazz a través de canciones como You Always Hurt The One You Love, Have I Told You Lately That I Love You?, Let The Rest Of The World Go By y Whispering Pines (Don’t Tell The Trees). Tiempo después, el artista sorprendió al mundo entero al atreverse a tocar completamente en country, lo cual dejó plasmado en su segundo material discográfico, Beaucoups of Blues. Éste incluye temas como Wine, Women and Loud Happy Song, I Wouldn’t Have You Any Other Way, Fastest Growing Heartache In The West e I’d Be Talking All The Time. "
}
]


//aqui hago las rutas solamente
//y las rutas de la /API
//las rutas secas
http.createServer( function(req, res){
if(req.url === "/api"){
  res.writeHead(200, {'Content-Type':'application/json' });
  return res.end(JSON.stringify(beatles));

} else if (req.url.substring(0, 5) === "/api/") {
  const search = req.url.split("/").pop();
  const beatle = beatles.find(
    (beatle) => search === encodeURI(beatle.name)
  );
  if(beatle) {
    res.writeHead(200, {'Content-Type':'application/json' });
    return res.end(JSON.stringify(beatle));
  }
} else if (req.url === "/"){
  res.writeHead(200, {"Content-Type": "text/html"});
  const html = fs.readFileSync("./index.html", "utf-8");
  return res.end(html);
} else if (req.url[0] === "/" && req.url.length > 1) {
  const search = req.url.split("/").pop();
  const beatle = beatles.find(
    (beatle) => search === encodeURI(beatle.name)
  );
  if(beatle) {
    res.writeHead(200, {"Content-Type": "text/html"});
    let html = fs.readFileSync("./beatle.html", "utf-8");
    html = html.replaceAll("{name}", beatle.name)
    html = html.replaceAll("{profilePic}", beatle.profilePic)
    html = html.replaceAll("{birthdate}", beatle.birthdate)
    html = html.replaceAll("{bio}", beatle.bio)
    return res.end(html);
  }
}
  res.writeHead(404, {"Content-Type": "text/html"});
  res.end("Not Found");


}).listen(3002, 'localhost');
