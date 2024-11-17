import React from "react";

type TextLine = {
  jaobon: string,
  translation: string,
}

export type Text = {
  title: string,
  description?: string | JSX.Element,
  lines: TextLine[],
}

const texts = new Map<string, Text>([
    ["north_wind", {
      title: "The North Wind and the Sun",
      description: "A classic conlanger's translation.",
      lines: [
        {
          jaobon: "nok la win i son en des puk nis ke es ki mas yo pao. je xas lu jen, ki dai dun te ki wen, as lai pas yak.",
          translation: "The North Wind and the Sun were disputing which was the stronger, when a traveler came along wrapped in a warm cloak.",
        },
        {
          jaobon: "je dos ton des ke ki gan as ke lu jen kik dun te de se gai es min nis ki mas yo pao de o la.",
          translation: "They agreed that the one who first succeeded in making the traveler take his cloak off should be considered stronger than the other.",
        },
        {
          jaobon: "nok la win as lu gas mas yo pao we ki ken, i bes ki win as lu gas mas yo pao we, lu jen jo mas as in xak dun te a se tuk.",
          translation: "Then the North Wind blew as hard as he could, but the more he blew the more closely did the traveler fold his cloak around him.",
        },
        {
          jaobon: "jo yo xas ki nok la win mo as lu.",
          translation: "At last the North Wind gave up the attempt. ",
        },
        {
          jaobon: "je bon, son as tos wen lus, i je xas lu jen jo kik dun te de se.",
          translation: "Then the Sun shined out warmly, and immediately the traveler took off his cloak.",
        },
        {
          jaobon: "je we, nok la win mos des ke son mas yo pao de se.",
          translation: "And so the North Wind was obliged to confess that the Sun was the stronger of the two.",
        },
      ],
    }],
    ["syntax_test", {
      title: "Syntax Test Cases",
      description: <>
        This is a translation of fiziwig's{' '}
        <a href="https://cofl.github.io/conlang/resources/mirror/conlang-syntax-test-cases.html">Conlang Syntax Test Cases</a>.
      </>,
      lines: [
        {
          jaobon: "son tos lus.",
          translation: "The sun shines.",
        },
        {
          jaobon: "son en tos lus.",
          translation: "The sun is shining.",
        },
        {
          jaobon: "son pas tos lus.",
          translation: "The sun shone.",
        },
        {
          jaobon: "son a tos lus.",
          translation: "The sun will shine.",
        },
        {
          jaobon: "son pas tos lus.",
          translation: "The sun has been shining.",
        },
        {
          jaobon: "son tos lus nu bes.",
          translation: "The sun is shining again.",
        },
        {
          jaobon: "son tos lus bon son.",
          translation: "The sun will shine tomorrow.",
        },
        {
          jaobon: "son hen tos lus.",
          translation: "The sun shines brightly.",
        },
        {
          jaobon: "son ki yo lus tos lus.",
          translation: "The bright sun shines.",
        },
        {
          jaobon: "son en wak a xan je xas.",
          translation: "The sun is rising now.",
        },
        {
          jaobon: "me jen pas as bik bos.",
          translation: "All the people shouted.",
        },
            {
          jaobon: "ji jen pas as bik bos.",
          translation: "Some of the people shouted.",
        },
        {
          jaobon: "men de je jen pas as bik bos dos bes.",
          translation: "Many of the people shouted twice.",
        },
            {
          jaobon: "jen ki xi as bik bos men bes.",
          translation: "Happy people often shout.",
        },
        {
          jaobon: "gak cek pas as yon a xan.",
          translation: "The kitten jumped up.",
        },
        {
          jaobon: "gak cek pas as yon a jos xan.",
          translation: "The kitten jumped onto the table.",
        },
        {
          jaobon: "mi gak cek pas wak a ek.",
          translation: "My little kitten walked away.",
        },
        {
          jaobon: "ten wa en ka.",
          translation: "It's raining.",
        },
        {
          jaobon: "ten wa pas ka.",
          translation: "The rain came down.",
        },
        {
          jaobon: "gak cek en as hu en ten wa.",
          translation: "The kitten is playing in the rain.",
        },
        {
          jaobon: "ten wa pas mo ka.",
          translation: "The rain has stopped.",
        },
        {
          jaobon: "ten wa a mo ka yak xas.",
          translation: "Soon the rain will stop.",
        },
        {
          jaobon: "mi yao ke ten wa mo ka yak xas.",
          translation: "I hope the rain stops soon.",
        },
        {
          jaobon: "nak an pas bi en je luk yo xas.",
          translation: "Once wild animals lived here.",
        },
        {
          jaobon: "ta pas as len kan yak.",
          translation: "Slowly she looked around.",
        },
        {
          jaobon: "wak a ek!",
          translation: "Go away!",
        },
        {
          jaobon: "lai wak!",
          translation: "Let's go!",
        },
        {
          jaobon: "ni gai as wak.",
          translation: "You should go.",
        },
        {
          jaobon: "mi a xi as wak.",
          translation: "I will be happy to go.",
        },
        {
          jaobon: "ta a as lai dao yak xas.",
          translation: "He will arrive soon.",
        },
        {
          jaobon: "cok de xao ik pas lun a ek.",
          translation: "The baby's ball has rolled away.",
        },
        {
          jaobon: "dos nan ik en as guk wok.",
          translation: "The two boys are working together.",
        },
        {
          jaobon: "yun a ben lin mas we.",
          translation: "This mist will probably clear away.",
        },
        {
          jaobon: "be sai so en kes en me luk.",
          translation: "Lovely flowers are growing everywhere.",
        },
        {
          jaobon: "mi men gai as mas len co.",
          translation: "We should eat more slowly.",
        },
        {
          jaobon: "ni pas as lai dao sao pas ki gai.",
          translation: "You have come too soon.",
        },
        {
          jaobon: "ni mos as xe mas pai we.",
          translation: "You must write more neatly.",
        },
        {
          jaobon: "yo be xen kas ki es en jan han.",
          translation: "Directly opposite stands a wonderful palace.",
        },
        {
          jaobon: "dok de ta hen li no es ken bus dao.",
          translation: "Henry's dog is lost.",
        },
        {
          jaobon: "mi gak es dak.",
          translation: "My cat is black.",
        },
        {
          jaobon: "jen kos de xao nus ik es ca.",
          translation: "The little girl's doll is broken.",
        },
        {
          jaobon: "mi xus do mas bes.",
          translation: "I usually sleep soundly.",
        },
        {
          jaobon: "ik men pas as su ces xao jak.",
          translation: "The children ran after Jack.",
        },
        {
          jaobon: "mi ken as hu xes bon.",
          translation: "I can play after school.",
        },
        {
          jaobon: "mi men pas wak bis a dus cek.",
          translation: "We went to the village for a visit.",
        },
        {
          jaobon: "mi men pas as dao wa lu.",
          translation: "We arrived at the river.",
        },
        {
          jaobon: "mi pas as wek ni.",
          translation: "I have been waiting for you.",
        },
        {
          jaobon: "ek do jen men pas sen en wo yak.",
          translation: "The campers sat around the fire.",
        },
        {
          jaobon: "xao nus ik ki yo gak cek pas sen en mi yak.",
          translation: "A little girl with a kitten sat near me.",
        },
        {
          jaobon: "ik pas as sen en ko yak wek ta pa.",
          translation: "The child waited at the door for her father.",
        },
        {
          jaobon: "xan son nus ik ki es ki mas bik en dus cek pas ben no ken bus dao ta mao cek.",
          translation: "Yesterday the oldest girl in the village lost her kitten.",
        },
        {
          jaobon: "ni cu cun en je dus cek o?",
          translation: "Were you born in this village?",
        },
        {
          jaobon: "ni nan kek ken hao uk o?",
          translation: "Can your brother dance well?",
        },
        {
          jaobon: "nan jen pas cu o?",
          translation: "Did the man leave?",
        },
        {
          jaobon: "ni nus kek a as lai dao ni o?",
          translation: "Is your sister coming for you?",
        },
        {
          jaobon: "ni ken lai xan son o?",
          translation: "Can you come tomorrow?",
        },
        {
          jaobon: "yak jen pas as wak a ek we pas bin xas o?",
          translation: "Have the neighbors gone away for the winter?",
        },
        {
          jaobon: "hon xon pak as cak en ten wa o?",
          translation: "Does the robin sing in the rain?",
        },
        {
          jaobon: "ni a as wis mi men wak a tun ga o?",
          translation: "Are you going with us to the concert?",
        },
        {
          jaobon: "yo xas ki ni as bis xen ju tu o?",
          translation: "Have you ever travelled in the jungle?",
        },
        {
          jaobon: "mi men pas as sen wa ce ces dao lu pas ji tao ek pis.",
          translation: "We sailed down the river for several miles.",
        },
        {
          jaobon: "me jen sa nis ces an.",
          translation: "Everybody knows about hunting.",
        },
        {
          jaobon: "sao xas en lus ton bon ki hen yo son, mi men as cu wak a mon ga.",
          translation: "On a sunny morning after the solstice we started for the mountains.",
        },
        {
          jaobon: "mik to mu pas ha nis hu nes de hus.",
          translation: "Tom laughed at the monkey's tricks.",
        },
        {
          jaobon: "gu nan jen ki yo wak mu pas as jan en mu can yak.",
          translation: "An old man with a walking stick stood beside the fence.",
        },
        {
          jaobon: "do luk de mu mus es gis nis mu tak ki ka.",
          translation: "The squirrel's nest was hidden by drooping boughs.",
        },
        {
          jaobon: "xao sai jon pas sen en ten bin wa bon i hao wek xas ki cun son ki cun a lai.",
          translation: "The little seeds waited patiently under the snow for the warm spring sun.",
        },
        {
          jaobon: "men xao nus ik ki dai sai so lun en to pas as uk en mu wo yak.",
          translation: "Many little girls with wreaths of flowers on their heads danced around the bonfire.",
        },
        {
          jaobon: "dun kos de pai tai tas pas ka dao kas tu.",
          translation: "The cover of the basket fell to the floor.",
        },
        {
          jaobon: "nan ik ki mas cen en jen pai pas as mo wak en ko cen.",
          translation: "The first boy in the line stopped at the entrance.",
        },
        {
          jaobon: "mon cek xan pas yo xao kas cek ki gu nus jen ki kin bi en.",
          translation: "On the top of the hill in a little hut lived a wise old woman.",
        },
        {
          jaobon: "xas ki bi en nak tu, mi men as wak en mao sai tu men bes.",
          translation: "During our residence in the country we often walked in the pastures.",
        },
        {
          jaobon: "ke xas bis jen de bik dus a as lai dao?",
          translation: "When will your guests from the city arrive?",
        },
        {
          jaobon: "pis de wa lu ki en mo lu luk yak hen su ben wak a don la.",
          translation: "Near the mouth of the river, its course turns sharply towards the East.",
        },
        {
          jaobon: "mes de je dos hen gao mon yo lo tu en ki sai es wen we kes.",
          translation: "Between the two lofty mountains lay a fertile valley.",
        },
        {
          jaobon: "len nao sai so ki hon i gao pas kes en mes de hos pan sai.",
          translation: "Among the wheat grew tall red poppies.",
        },
        {
          jaobon: "duk mu gen de dun jon mu pas es in cu de tu.",
          translation: "The strong roots of the oak trees were torn from the ground.",
        },
        {
          jaobon: "son pas kan pas mu tak, kan ik men ki en hu.",
          translation: "The sun looked down through the branches upon the children at play.",
        },
        {
          jaobon: "win de wes la pas lu tok mi to cen ton we de mik jen.",
          translation: "The west wind blew across my face like a friendly caress.",
        },
        {
          jaobon: "tai cao lun pas lun wak pas kas tu.",
          translation: "The spool of thread rolled across the floor.",
        },
        {
          jaobon: "jan bao ki sai men kes es pas sen en can las cen.",
          translation: "A box of growing plants stood in the window.",
        },
        {
          jaobon: "mi hen xi.",
          translation: "I am very happy.",
        },
        {
          jaobon: "je jin hon gos men hen yo jus.",
          translation: "These oranges are juicy.",
        },
        {
          jaobon: "wa de yen wa lan hen yo yen.",
          translation: "Sea water is salty.",
        },
        {
          jaobon: "dao xan hen yo jen.",
          translation: "The streets are full of people.",
        },
        {
          jaobon: "suk yo suk tes.",
          translation: "Sugar tastes sweet.",
        },
        {
          jaobon: "wo as ke mi jek hok.",
          translation: "The fire feels hot.",
        },
        {
          jaobon: "xao nus ik pas es kan we ki jek lon.",
          translation: "The little girl seemed lonely.",
        },
      ],
    }],
]);

export default texts;
