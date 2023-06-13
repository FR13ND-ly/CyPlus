import { Component } from '@angular/core';
import { member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  team: Array<member> = [
    {
      name: 'Puricoi Constantin-Cătălin',
      imageUrl: '/assets/members/David Hincu.webp',
      quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
      instagram: 'https://www.instagram.com/catalinpuricoi/',
      facebook: 'https://www.facebook.com/catalin.puricoi',
      github: 'https://github.com/catalinpuricoi15',
    },
    {
<<<<<<< HEAD
      name: "Călin Ioncioaia",
      imageUrl: "/assets/members/Calin Ioncioaia.webp",
      quote: "I believe in a universe that doesn't care and people who do",
      github: "https://github.com/RocketPrinter"
    },
    {
      name: "Claudia T",
      imageUrl: "/assets/members/Claudia Toma.webp"
=======
      name: 'Alexandru Radu',
      imageUrl: '/assets/members/alexandru-radu.webp',
      quote: 'Born to be a SolidWorker',
      instagram: 'https://www.instagram.com/alexandru230/',
      github: 'https://github.com/alexradu04',
    },
    {
      name: 'Buruiana Ștefan',
      imageUrl: '/assets/members/Buruiana Stefan.webp',
      quote: 'But it would be funny',
      github: 'https://github.com/Titoxyk',
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
    },
    {
      name: 'Denis Crismariu',
      imageUrl: '/assets/members/Denis Crismariu.webp',
      quote: "I don't touch grass, I touch robots",
      instagram: 'https://www.instagram.com/crismariudenis/',
      facebook: 'https://www.facebook.com/crismariu.denis',
      github: 'https://github.com/crismariudenis',
    },
    {
      name: 'Sebastian Tănase',
      imageUrl: '/assets/members/Sebastian Tanase.webp',
      quote: 'Simple is better',
      instagram: 'https://www.instagram.com/sebastian.f3d/',
    },
    {
<<<<<<< HEAD
      name: "Antony Guignard",
      imageUrl: "/assets/members/Antony.webp",
      quote: "Toți oamenii mari au fost cândva copii, dar doar câțiva își amintesc de asta",
      instagram: "https://instagram.com/me_ant0ny?igshid=NGExMmI2YTkyZg=="
=======
      name: 'Victor Tcaciuc',
      imageUrl: '/assets/members/Victor Tcaciuc.webp',
      quote: "Can't find me? Try searching CyLiis labs:)",
      instagram: 'https://www.instagram.com/victor1tcaciuc/',
      facebook: 'https://www.facebook.com/victorgabrieltcaciuc/',
      github: 'https://github.com/StripierWig208',
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
    },
    {
      name: 'Anton Petru',
      imageUrl: '/assets/members/Anton Petru.webp',
    },
    {
      name: 'Matei Galeș',
      imageUrl: '/assets/members/Matei G.webp',
      quote: 'Forza Ferrari',
      instagram: 'https://instagram.com/rata_e_super?igshid=MjEwN2IyYWYwYw==',
      facebook: 'https://m.facebook.com/matei.gales.5',
      github: 'https://github.com/DareChocolate',
    },
    {
<<<<<<< HEAD
      name: "Alin-Gabriel Motricală",
      imageUrl: "/assets/members/Alin.webp",
      quote: "What we know is a drop. What we do not know… is an ocean",
      github: "https://github.com/FR13ND-ly"
=======
      name: 'Dragoș Aflori',
      imageUrl: '/assets/members/Dragos Aflori.webp',
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
    },
    {
      name: 'Claudia T',
      imageUrl: '/assets/members/Claudia T.webp',
    },
    {
      name: 'Jitaru Andrei-Vlad',
      imageUrl: '/assets/members/Andrei Jitaru.webp',
      quote:
        '“Make your wonderful dream a reality, and it will become your truth.” — N, Pokemon',
      instagram: 'https://www.instagram.com/andrei_vlad.jitaru/',
      facebook: 'https://www.facebook.com/andrei.vlad.jitariu',
    },
    {
      name: 'Amalia Țîlică',
      imageUrl: '/assets/members/Amalia Tilica.webp',
      quote:
        "There's no way I have a screw loose, because they all fell out (and then I used zipties).",
      instagram: 'https://www.instagram.com/espurr.23/',
    },
    {
<<<<<<< HEAD
      name: "Emanuel-Antonio Rotariu",
      imageUrl: "/assets/members/Emmy Rotariu.webp",
      quote: "The bad news is time flies. The good news is you're the pilot.",
      instagram: "https://instagram.com/emmy43262?igshid=NGExMmI2YTkyZg==",
      github: "https://github.com/Emmy43262"
    },
    {
      name: "Loghinoaia Ilinca-Ioana",
      imageUrl: "/assets/members/Ilinca Loghinoaia.webp",
      quote: "Nu-i important dac-ai pierdut sau câștigat, e important că n-ai participat.",
      instagram: "https://instagram.com/ili_log2?igshid=MzNlNGNkZWQ4Mg==",
=======
      name: 'Dimitrie Mihai',
      imageUrl: '/assets/members/Dimitrie M.webp',
      quote:
        'The way to get started is to quit talking and begin doing. (Walt Disney)',
    },
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2

    {
      name: 'Maftei Delia Andrada',
      imageUrl: '/assets/members/Delia.webp',
      quote: 'Je vois la vie en rose <3',
      instagram: 'https://www.instagram.com/delia.mft/',
      facebook: 'https://www.facebook.com/delia.andrada.m16',
    },

    {
<<<<<<< HEAD
      name: "Matei Galeș",
      imageUrl: "/assets/members/Matei Gales.webp",
      quote: "Forza Ferrari",
      instagram: "https://instagram.com/rata_e_super?igshid=MjEwN2IyYWYwYw==",
      facebook: "https://m.facebook.com/matei.gales.5",
      github: "https://github.com/DareChocolate"
=======
      name: 'Antony Guignard',
      imageUrl: '/assets/members/Antony G.webp',
      quote:
        'Toți oamenii mari au fost cândva copii, dar doar câțiva își amintesc de asta',
      instagram: 'https://instagram.com/me_ant0ny?igshid=NGExMmI2YTkyZg==',
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
    },
    {
      name: 'Bianca A',
      imageUrl: '/assets/members/Bianca A.webp',
    },
    {
      name: 'Enăchescu Alexandra-Maria',
      imageUrl: '/assets/members/Alexandra.webp',
      quote: '“In the midst of chaos, there is also opportunity” - Sun-Tzu ',
      instagram:
        'https://instagram.com/alexandra_enachescu?igshid=MzNlNGNkZWQ4Mg==',
      facebook: 'https://www.facebook.com/alexandramaria.enachescu',
    },
    {
      name: 'Alin-Gabriel Motricală',
      imageUrl: '/assets/members/Alin.webp',
      quote: 'What we know is a drop. What we do not know… is an ocean',
    },
    {
<<<<<<< HEAD
      name: "Denis Crismariu",
      imageUrl: "/assets/members/Denis.webp",
      quote: "L + L = W",
      instagram: "https://www.instagram.com/crismariudenis/",
      facebook: "https://www.facebook.com/crismariu.denis",
      github: "https://github.com/crismariudenis"
    },
    {
      name: "Diana Tiplic",
      imageUrl: "/assets/members/Diana Tiplic.webp"
=======
      name: 'Alisia',
      imageUrl: '/assets/members/Alisia.webp',
    },
    {
      name: 'Cristi M',
      imageUrl: '/assets/members/Cristi M.webp',
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
    },
    {
      name: 'Ticu Daria Teodora',
      imageUrl: '/assets/members/Daria.webp',
      quote: 'Cerul este limita',
      instagram: 'https://instagram.com/daria_ticu?igshid=ZDc4ODBmNjlmNQ==',
      facebook: 'https://www.facebook.com/daria.ticu.7',
    },
    {
<<<<<<< HEAD
      name: "Dimitrie Mihai",
      imageUrl: "/assets/members/Dimitrie Mihai.webp",
      quote: "The way to get started is to quit talking and begin doing. (Walt Disney)"
=======
      name: 'David Hîncu',
      imageUrl: '/assets/members/David Hincu.webp',
      quote: "Do the hard work, especially when you don't feel like it.",
      instagram: 'https://www.instagram.com/da.eu.david/',
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
    },
    {
      name: 'Loghinoaia Ilinca-Ioana',
      imageUrl: '/assets/members/Ilinca L.webp',
      quote:
        'Nu-i important dac-ai pierdut sau câștigat, e important că n-ai participat.',
      instagram: 'https://instagram.com/ili_log2?igshid=MzNlNGNkZWQ4Mg==',
    },
    {
<<<<<<< HEAD
      name: "Ticu Daria Teodora",
      imageUrl: "/assets/members/Daria Ticu.webp",
      quote: "Cerul este limita",
      instagram: "https://instagram.com/daria_ticu?igshid=ZDc4ODBmNjlmNQ==",
      facebook: "https://www.facebook.com/daria.ticu.7"
=======
      name: 'Emanuel-Antonio Rotariu',
      imageUrl: '/assets/members/Emanuel Rotariu.webp',
      quote: "The bad news is time flies. The good news is you're the pilot.",
      instagram: 'https://instagram.com/emmy43262?igshid=NGExMmI2YTkyZg==',
      github: 'https://github.com/Emmy43262',
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
    },

    {
      name: 'Balasescu Andrei',
      imageUrl: '/assets/members/balasescu-andrei.webp',
      quote: 'We win these',
      instagram: 'https://www.instagram.com/bala_andrei9/',
    },
    {
<<<<<<< HEAD
      name: "Alexandru Radu",
      imageUrl: "/assets/members/Alex Radu.webp",
      quote: "Born to be a SolidWorker",
      instagram: "https://www.instagram.com/alexandru230/",
      github: "https://github.com/alexradu04"
=======
      name: 'Călin Ioncioaia',
      imageUrl: '/assets/members/Calin I.webp',
      quote: "I believe in a universe that doesn't care and people who do",
      github: 'https://github.com/RocketPrinter',
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
    },
    {
      name: 'Dima Sorin Emanuel',
      imageUrl: '/assets/members/Dima.webp',
      quote: 'Hit it with a hammer mate, it will be just fine.',
      instagram: 'https://www.instagram.com/sorinemanueldima/',
      facebook: 'https://www.facebook.com/profile.php?id=100014784589194',
      github: 'https://github.com/SorinEmanuelDima',
    },
    {
<<<<<<< HEAD
      name: "Balasescu Andrei",
      imageUrl: "/assets/members/ab.webp",
      quote: "We win these",
      instagram: "https://www.instagram.com/bala_andrei9/"
    }
  ]
=======
      name: 'Diana T',
      imageUrl: '/assets/members/Diana T.webp',
    },
  ];

  // team: Array<any> = [
  //   {
  //     name: 'Victor Tcaciuc',
  //     Instagram: 'https://instagram.com/victor1tcaciuc?igshid=YmMyMTA2M2Y=',
  //     Facebook: 'https://www.facebook.com/victorgabrieltcaciuc',
  //     Github: '',
  //     Discord: 'StripierWig208#2124',
  //     quote: 'If you don\u2019t take risks, you can\u2019t create a future.',
  //     teamLead: true,
  //     imageUrl: "/assets/members/Victor Tcaciuc.jpg",
  //   },
  //   {
  //     name: 'Petru Anton',
  //     Instagram: 'https://www.instagram.com/adiutzuu/',
  //     Facebook: 'https://www.facebook.com/Oglumaa',
  //     Github: 'https://github.com/Adiutzu',
  //     Discord: 'Adiutzu#3224',
  //     teamLead: true,
  //     quote: "Shoot for the moon. Even if you miss, you'll land among the stars.",
  //     imageUrl: "/assets/members/Petru Anton.jpg",
  //   },
  //   {
  //     name: "Mirela Tibu",
  //     Instagram: "",
  //     Facebook: "https://www.facebook.com/mirela.tibu.3",
  //     Github: "",
  //     Discord: "",
  //     quote: "",
  //     mentor : true,
  //     imageUrl: "/assets/members/Mirela Tibu.jpg",
  //   },
  //   {
  //     name: "Vlad Turcuman",
  //     Instagram: "https://www.instagram.com/vladturcuman/",
  //     Facebook: "https://m.facebook.com/vlad.turcuman.9",
  //     Github: "https://github.com/vladturcuman",
  //     Discord: "vladtt#7538",
  //     quote: "Who's piloting the robot?",
  //     mentor : true,
  //     imageUrl: "/assets/members/Vlad Turcuman.jpg",
  //   },

  //   {
  //     name: 'Denis Cr\u00ee\u0219mariu',
  //     Instagram: 'https://www.instagram.com/crismariudenis/',
  //     Facebook: 'https://www.facebook.com/crismariu.denis/',
  //     Github: 'https://github.com/crismariudenis',
  //     Discord: 'LaserDenis#2031',
  //     quote: 'Why waste a screw when you can use a zip tie?',
  //     imageUrl: "/assets/members/Denis Crasmariu.jpg",
  //   },
  //       {
  //     name: 'Sebastian T\u0103nase',
  //     Instagram: 'https://www.instagram.com/sebastian.f3d/',
  //     Facebook: '',
  //     Github: 'https://github.com/BigPingLowIQ',
  //     Discord: 'Mr. Pig#1652',
  //     quote: 'Knowledge is power.',
  //     imageUrl: "/assets/members/Sebastian Tanase.jpg",
  //   },
  //     {
  //     name: 'Carla Epure',
  //     Instagram: 'https://www.instagram.com/carla_epure/',
  //     Facebook: 'https://www.facebook.com/carla.ecm',
  //     Github: '',
  //     Discord: 'CarlaEpure#8642',
  //     quote:'I work within the deadline. "Deadline" is an imaginary place that exists wherever I am.',
  //     imageUrl: "/assets/members/Carla Epure.jpg",
  //   },

  //   {
  //     name: 'C\u0103lin Ioncioaia',
  //     Instagram: '',
  //     Facebook: '',
  //     Github: 'https://github.com/RocketPrinter',
  //     Discord: 'RocketPrinter#6969',
  //     quote: 'We can edit this layer, right?',
  //     imageUrl: "/assets/members/Calin Ioncioaia.jpg",
  //   },
  //   {
  //     name: 'Emmy Rotariu',
  //     Instagram: 'https://www.instagram.com/emmy43262/',
  //     Facebook: '',
  //     Github: '',
  //     Discord: 'Emmy43262#6611',
  //     quote: 'The way to succeed is to double your failure rate.',
  //     imageUrl: "/assets/members/Emmy Rotariu.jpg",
  //   },
  //   {
  //     name: 'Florin Atudorei',
  //     Instagram: 'https://instagram.com/florinatudorei_?igshid=YmMyMTA2M2Y=',
  //     Facebook: 'https://www.facebook.com/florin.atudorei.18',
  //     Github: '',
  //     Discord: 'Nirolff#8383',
  //     quote: 'You are a person not a Robot!',
  //     imageUrl: "/assets/members/Florin Atudorei.jpg",
  //   },
  //   {
  //     name: 'Matei Gales',
  //     Instagram: 'https://www.instagram.com/rata_e_super/',
  //     Facebook: 'https://www.facebook.com/matei.gales.5',
  //     Github: 'https://github.com/DareChocolate',
  //     Discord: 'Firematei#4881',
  //     quote: 'Zip-ties and duct tape work just fine.',
  //     imageUrl: "/assets/members/Matei Gales.jpg",
  //   },
  //   {
  //       name: 'Andrei Jitaru',
  //       Instagram: 'https://www.instagram.com/andrei_vlad.jitaru',
  //       Facebook: '',
  //       Github: 'https://github.com/VirtxCat',
  //       Discord: 'AndrewJ#1269',
  //       quote: 'With enough creativity, knowledge and willpower you can make a difference and if you add teamwork you can change the world.',
  //       imageUrl: "/assets/members/Andrei Jitaru.jpg",
  //   },
  //   {
  //       name: 'Claudia Toma',
  //       Instagram: 'https://www.instagram.com/tomaclaudiastefania/',
  //       Facebook: '',
  //       Github: '',
  //       Discord: 'Puppet\\(OwO)/#8869',
  //       quote:
  //         "Design your own person without being afraid of imperfections and if people don't like you just let them in the past.",
  //       imageUrl: "/assets/members/Claudia Toma.jpg",
  //   },
  //   {
  //       name: 'Dimitrie Mihai',
  //       Instagram: 'https://www.instagram.com/dimi.gj/',
  //       Facebook: '',
  //       Github: '',
  //       Discord: 'Ghouljinx#8745',
  //       quote: 'Making mistakes is better than faking perfections',
  //       imageUrl: "/assets/members/Dimitrie Mihai.jpg",
  //   },
  //   {
  //       name: 'Calin Pravat',
  //       Instagram: 'https://www.instagram.com/calinpravat/',
  //       Facebook: 'https://www.facebook.com/calingeorge.pravat',
  //       Github: '',
  //       Discord: 'C\u0103lin Prav\u0103\u021b#0974',
  //       quote: 'Teamwork makes everything easier and faster.',
  //       imageUrl: "/assets/members/Calin Pravat.jpg",
  //   },
  //   {
  //       name: 'Flavius Mihai',
  //       Instagram: 'https://www.instagram.com/flaviuss_11/',
  //       Facebook: '',
  //       Github: '',
  //       Discord: 'Flave#1856',
  //       quote: 'To iterate is human, to recurse is divine.',
  //       imageUrl: "/assets/members/Flavius.jpg",
  //   },
  //   {
  //       name: 'Amalia \u021a\u00eelic\u0103',
  //       Instagram: 'https://instagram.com/amaliatilica/',
  //       Facebook: 'https://www.facebook.com/amaliatilica',
  //       Github: '',
  //       Discord: 'PikaChuu#4934',
  //       quote: 'Be kind. Such deep, much inspirational.',
  //       imageUrl: "/assets/members/Amalia Tilica.jpg",
  //   },
  //   {
  //       name: 'Dima Sorin-Emanuel',
  //       Instagram: 'https://www.instagram.com/sorinemanueldima/',
  //       Facebook: 'https://www.facebook.com/profile.php?id=100014784589194',
  //       Github: '',
  //       Discord: 'xMrSediBoss#2010',
  //       quote: "Just hit it with a hammer mate, it'll be just fine…",
  //       imageUrl: "/assets/members/Emanuel Dima.jpg",
  //   },
  // ];
>>>>>>> a32409cc7489619c6daaf1399df3cc53f2239ab2
}
