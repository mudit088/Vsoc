import React from 'react'


import { useState } from 'react'
import Leaderboard2 from './Leaderboard2'


const Leaderboard = () => {
  const data=
  [{
    Position: "Aldrich",
    Github_Id: "Subaru",
   Score: "Thoughtblab",
   email: "azorener0@java.com",
    gender: "Male"
  }, {
    Position: "Tanney",
    Github_Id: "Acura",
   Score: "Wikizz",
   email: "tpettigrew1@census.gov",
    gender: "Male"
  }, {
    Position: "Cassandre",
    Github_Id: "Lincoln",
   Score: "Zoombox",
   email: "csoldi2@meetup.com",
    gender: "Polygender"
  }, {
    Position: "Betteanne",
    Github_Id: "Honda",
   Score: "Devpulse",
   email: "bblanchflower3@dell.com",
    gender: "Female"
  }, {
    Position: "Kendra",
    Github_Id: "Kia",
   Score: "Wikibox",
   email: "kbockett4@who.int",
    gender: "Female"
  }, {
    Position: "Fidelity",
    Github_Id: "Mercedes-Benz",
   Score: "Pixoboo",
   email: "fchapelhow5@jimdo.com",
    gender: "Female"
  }, {
    Position: "Crissy",
    Github_Id: "Toyota",
   Score: "Latz",
   email: "chargreave6@gmpg.org",
    gender: "Female"
  }, {
    Position: "Olva",
    Github_Id: "BMW",
   Score: "Zoovu",
   email: "omeiklem7@cocolog-nifty.com",
    gender: "Female"
  }, {
    Position: "Quinn",
    Github_Id: "Ford",
   Score: "Brainverse",
   email: "qbroome8@technorati.com",
    gender: "Male"
  }, {
    Position: "Dniren",
    Github_Id: "Volkswagen",
   Score: "Wikibox",
   email: "dcastanone9@rakuten.co.jp",
    gender: "Female"
  }, {
    Position: "Cathyleen",
    Github_Id: "Toyota",
   Score: "Jaxbean",
   email: "cfrancescoa@com.com",
    gender: "Female"
  }, {
    Position: "Lacy",
    Github_Id: "Mitsubishi",
   Score: "Gevee",
   email: "lpyneb@apache.org",
    gender: "Female"
  }, {
    Position: "Corette",
    Github_Id: "Mitsubishi",
   Score: "Pixoboo",
   email: "ctrentc@studiopress.com",
    gender: "Female"
  }, {
    Position: "Samuele",
    Github_Id: "Lexus",
   Score: "Twitterworks",
   email: "swoltmand@t-online.de",
    gender: "Male"
  }, {
    Position: "Floria",
    Github_Id: "Subaru",
   Score: "Voonte",
   email: "fclicke@cdc.gov",
    gender: "Female"
  }, {
    Position: "Steffie",
    Github_Id: "Volvo",
   Score: "Yotz",
   email: "snorthenf@google.pl",
    gender: "genderqueer"
  }, {
    Position: "Chas",
    Github_Id: "Chrysler",
   Score: "Vimbo",
   email: "ccolbeckg@stumbleupon.com",
    gender: "genderfluid"
  }, {
    Position: "Joel",
    Github_Id: "Mercedes-Benz",
   Score: "Realblab",
   email: "jpottsh@omniture.com",
    gender: "Male"
  }, {
    Position: "Hasty",
    Github_Id: "Mitsubishi",
   Score: "Miboo",
   email: "hfullilovei@freewebs.com",
    gender: "Male"
  }, {
    Position: "Verge",
    Github_Id: "Daewoo",
   Score: "Vinte",
   email: "vpresnellj@domainmarket.com",
    gender: "Male"
  }, {
    Position: "Bernadina",
    Github_Id: "GMC",
   Score: "Demimbu",
   email: "bcaudreyk@uiuc.edu",
    gender: "Non-binary"
  }, {
    Position: "Shawnee",
    Github_Id: "Nissan",
   Score: "Buzzster",
   email: "shanscomel@elpais.com",
    gender: "Agender"
  }, {
    Position: "Merle",
    Github_Id: "GMC",
   Score: "Rhybox",
   email: "mpiscullim@paypal.com",
    gender: "Male"
  }, {
    Position: "Dannie",
    Github_Id: "Subaru",
   Score: "Edgeclub",
   email: "dbackn@themeforest.net",
    gender: "Male"
  }, {
    Position: "Gearalt",
    Github_Id: "Toyota",
   Score: "Linktype",
   email: "gduroo@timesonline.co.uk",
    gender: "Male"
  }, {
    Position: "Granville",
    Github_Id: "Citroën",
   Score: "Agimba",
   email: "gcottellp@marketwatch.com",
    gender: "Male"
  }, {
    Position: "Kingsley",
    Github_Id: "Acura",
   Score: "Fivespan",
   email: "kpetranekq@infoseek.co.jp",
    gender: "Male"
  }, {
    Position: "Winny",
    Github_Id: "Pontiac",
   Score: "Dynabox",
   email: "wovenr@theglobeandmail.com",
    gender: "Polygender"
  }, {
    Position: "Cad",
    Github_Id: "Nissan",
   Score: "Npath",
   email: "cgerrams@google.com.br",
    gender: "Male"
  }, {
    Position: "Jessalin",
    Github_Id: "Ford",
   Score: "Edgepulse",
   email: "jheadfordt@creativecommons.org",
    gender: "Female"
  }, {
    Position: "Devora",
    Github_Id: "Chevrolet",
   Score: "Jabbersphere",
   email: "dpressmanu@hostgator.com",
    gender: "Female"
  }, {
    Position: "Kenon",
    Github_Id: "Ford",
   Score: "Aivee",
   email: "kmeacev@senate.gov",
    gender: "Male"
  }, {
    Position: "Natassia",
    Github_Id: "Mazda",
   Score: "Quatz",
   email: "npiscopiellow@addthis.com",
    gender: "genderqueer"
  }, {
    Position: "Onfre",
    Github_Id: "Nissan",
   Score: "Dynabox",
   email: "ogrundyx@yellowpages.com",
    gender: "Bigender"
  }, {
    Position: "Amalea",
    Github_Id: "Chevrolet",
   Score: "Flipbug",
   email: "acrossinghamy@apple.com",
    gender: "Female"
  }, {
    Position: "Izzy",
    Github_Id: "Mercedes-Benz",
   Score: "Dablist",
   email: "icallowayz@scribd.com",
    gender: "Male"
  }, {
    Position: "Brooks",
    Github_Id: "Mercury",
   Score: "Roodel",
   email: "bleggen10@wp.com",
    gender: "Male"
  }, {
    Position: "Lorelle",
    Github_Id: "Ford",
   Score: "Dynabox",
   email: "ltrematick11@trellian.com",
    gender: "Female"
  }, {
    Position: "Mel",
    Github_Id: "Nissan",
   Score: "Skivee",
   email: "mfindon12@usa.gov",
    gender: "Male"
  }, {
    Position: "Barret",
    Github_Id: "Toyota",
   Score: "Muxo",
   email: "blottrington13@joomla.org",
    gender: "Male"
  }, {
    Position: "Anette",
    Github_Id: "Pontiac",
   Score: "Eare",
   email: "afideler14@yale.edu",
    gender: "Polygender"
  }, {
    Position: "Dasie",
    Github_Id: "Ford",
   Score: "Kwilith",
   email: "dduffitt15@zdnet.com",
    gender: "Female"
  }, {
    Position: "Meir",
    Github_Id: "Hyundai",
   Score: "Skinix",
   email: "mdanilovic16@histats.com",
    gender: "Male"
  }, {
    Position: "Arvin",
    Github_Id: "Dodge",
   Score: "InnoZ",
   email: "apucker17@tripadvisor.com",
    gender: "Male"
  }, {
    Position: "Elga",
    Github_Id: "Chevrolet",
   Score: "Mynte",
   email: "eseagrave18@imgur.com",
    gender: "Female"
  }, {
    Position: "Sybil",
    Github_Id: "Mitsubishi",
   Score: "Quinu",
   email: "sbecket19@usatoday.com",
    gender: "Female"
  }, {
    Position: "Germana",
    Github_Id: "Ford",
   Score: "Jetwire",
   email: "gdecoursey1a@guardian.co.uk",
    gender: "Female"
  }, {
    Position: "Huntington",
    Github_Id: "Ford",
   Score: "Gigazoom",
   email: "hcoase1b@desdev.cn",
    gender: "Polygender"
  }, {
    Position: "Althea",
    Github_Id: "BMW",
   Score: "Bubblemix",
   email: "amalitrott1c@rambler.ru",
    gender: "Female"
  }, {
    Position: "Darbee",
    Github_Id: "Chevrolet",
   Score: "Vinder",
   email: "dpither1d@yale.edu",
    gender: "Male"
  }]
  const [filteredData, setFilteredData] = useState(data);
  const handleFiltersChange = ({ Score }) => {
    let updatedData = data;
    if (Score !== '') {
      updatedData = updatedData.filter(item => item.Score === Score);
    }
  
    setFilteredData(updatedData);
  };
  
 

  return (
<div>
<Leaderboard2 handleFiltersChange={handleFiltersChange}  info={filteredData} array={data}/>

</div>
  )
}

export default Leaderboard
