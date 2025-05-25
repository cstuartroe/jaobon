import {Collection} from "./types";
import React from "react";

const classics: Collection = {
  title: "Classic conlanger translations",
  slug: "classics",
  texts: [
    {
      title: "The North Wind and the Sun",
      slug: "north_wind",
      description: "A classic conlanger's translation.",
      lines: [
        {
          jaobon: "[yok gas lu] i [son] en des puk nis ke es ki mas yo pao. je xas pu jen, ki dai jak ki wen, as lai pas yak.",
          translation: "The North Wind and the Sun were disputing which was the stronger, when a traveler came along wrapped in a warm cloak.",
        },
        {
          jaobon: "je dos ton des ke ki win as ke pu jen kik jak de se gai es min nis ki mas yo pao de o la.",
          translation: "They agreed that the one who first succeeded in making the traveler take his cloak off should be considered stronger than the other.",
        },
        {
          jaobon: "loi [yok gas lu] as lu gas mas yo pao we ki ken, i bes ki ta as lu gas mas yo pao we, pu jen jo mas as in gun jak a se koi.",
          translation: "Then the North Wind blew as hard as he could, but the more he blew the more closely did the traveler fold his cloak around him.",
        },
        {
          jaobon: "jo yo xas ki [yok gas lu] pa kao.",
          translation: "At last the North Wind gave up the attempt. ",
        },
        {
          jaobon: "loi [son] as tos lus ki wen, i je xas pu jen jo kik jak.",
          translation: "Then the Sun shined out warmly, and immediately the traveler took off his cloak.",
        },
        {
          jaobon: "je we, [yok gas lu] mos des ke [son] mas yo pao de se.",
          translation: "And so the North Wind was obliged to confess that the Sun was the stronger of the two.",
        },
      ],
    },
    {
      title: "Syntax Test Cases",
      slug: "syntax_test",
      description: <>
        This is a translation of fiziwig's{' '}
        <a href="https://cofl.github.io/conlang/resources/mirror/conlang-syntax-test-cases.html">Conlang Syntax Test
          Cases</a>.
      </>,
      show_numbers: true,
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
          jaobon: "son tos lus bek son.",
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
          jaobon: "son en xoi je xas.",
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
          jaobon: "gak cik pas as yon a xan.",
          translation: "The kitten jumped up.",
        },
        {
          jaobon: "gak cik pas as yon a jos xan.",
          translation: "The kitten jumped onto the table.",
        },
        {
          jaobon: "mi gak cik pas wak a ek.",
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
          jaobon: "gak cik en as hu en ten wa.",
          translation: "The kitten is playing in the rain.",
        },
        {
          jaobon: "ten wa pas pa ka.",
          translation: "The rain has stopped.",
        },
        {
          jaobon: "ten wa a pa ka yak xas.",
          translation: "Soon the rain will stop.",
        },
        {
          jaobon: "mi yao ke ten wa pa ka yak xas.",
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
          jaobon: "cok de cu cik pas hoi a ek.",
          translation: "The baby's ball has rolled away.",
        },
        {
          jaobon: "je dos xao nan jen en as wok guk we.",
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
          jaobon: "yo be xen kas ki es en jan han la.",
          translation: "Directly opposite stands a wonderful palace.",
        },
        {
          jaobon: "dok de mik [hen li] no es ken bus dao.",
          translation: "Henry's dog is lost.",
        },
        {
          jaobon: "mi gak es dak.",
          translation: "My cat is black.",
        },
        {
          jaobon: "jen kos de xao nus cik es soi.",
          translation: "The little girl's doll is broken.",
        },
        {
          jaobon: "mi xus do mas bes.",
          translation: "I usually sleep soundly.",
        },
        {
          jaobon: "cik men pas as su ces xao jak.",
          translation: "The children ran after Jack.",
        },
        {
          jaobon: "mi ken as hu xes bek.",
          translation: "I can play after school.",
        },
        {
          jaobon: "mi men pas wak bis a dus cik.",
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
          jaobon: "ek do jen men pas sen en ik yak.",
          translation: "The campers sat around the fire.",
        },
        {
          jaobon: "xao nus cik ki yo gak cik pas sen en mi yak.",
          translation: "A little girl with a kitten sat near me.",
        },
        {
          jaobon: "cik pas as sen en ko yak wek ta nan ma.",
          translation: "The child waited at the door for her father.",
        },
        {
          jaobon: "cen son nus cik ki es ki mas bik en dus cik pas ben no ken bus dao ta gak cik.",
          translation: "Yesterday the oldest girl in the village lost her kitten.",
        },
        {
          jaobon: "ni cu cun en je dus cik o?",
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
          jaobon: "ni ken lai bek son o?",
          translation: "Can you come tomorrow?",
        },
        {
          jaobon: "yak jen pas as wak a ek we pas bin xas o?",
          translation: "Have the neighbors gone away for the winter?",
        },
        {
          jaobon: "hon xon pak as can en ten wa o?",
          translation: "Does the robin sing in the rain?",
        },
        {
          jaobon: "ni a as wis mi men wak a tun ga o?",
          translation: "Are you going with us to the concert?",
        },
        {
          jaobon: "yo xas ki ni as bis xen mu tu o?",
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
          jaobon: "sao xas ki en lus ton bek ki hen yo son, mi men as cu wak a mon ga.",
          translation: "On a sunny morning after the solstice we started for the mountains.",
        },
        {
          jaobon: "mik [to ma] pas ha nis hu nes de hus.",
          translation: "Tom laughed at the monkey's tricks.",
        },
        {
          jaobon: "gu nan jen ki yo wak mu pas as jan en mu wo yak.",
          translation: "An old man with a walking stick stood beside the fence.",
        },
        {
          jaobon: "do luk de mu mus es gis nis mu xak ki ka.",
          translation: "The squirrel's nest was hidden by drooping boughs.",
        },
        {
          jaobon: "xao sai jon pas sen en ten bin wa bon i hao wek nis xas ki cun son ki cun a lai.",
          translation: "The little seeds waited patiently under the snow for the warm spring sun.",
        },
        {
          jaobon: "men xao nus cik ki dai sai so lun en to pas as uk en mu ik yak.",
          translation: "Many little girls with wreaths of flowers on their heads danced around the bonfire.",
        },
        {
          jaobon: "dun kos de pai tai tas pas ka dao kas tu.",
          translation: "The cover of the basket fell to the floor.",
        },
        {
          jaobon: "nan cik ki mas cen en jen pai pas as pa wak en ko cen.",
          translation: "The first boy in the line stopped at the entrance.",
        },
        {
          jaobon: "mon cik xan pas yo xao kas cik ki gu nus jen ki kin bi en.",
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
          jaobon: "pis de wa lu ki en mo yak ben wak a son bek hen su we.",
          translation: "Near the mouth of the river, its course turns sharply towards the East.",
        },
        {
          jaobon: "mes de je dos hen gao mon yo lo tu en ki sai es wen we kes.",
          translation: "Between the two lofty mountains lay a fertile valley.",
        },
        {
          jaobon: "len nao sai so ki hon i gao pas kes en mes de bin pan sai.",
          translation: "Among the wheat grew tall red poppies.",
        },
        {
          jaobon: "duk mu gen de dun jon mu pas es in cu de tu.",
          translation: "The strong roots of the oak trees were torn from the ground.",
        },
        {
          jaobon: "son pas kan pas mu xak, kan cik men ki en hu.",
          translation: "The sun looked down through the branches upon the children at play.",
        },
        {
          jaobon: "cen gas lu pas lu tok mi to cen ton we de mik jen.",
          translation: "The west wind blew across my face like a friendly caress.",
        },
        {
          jaobon: "tai cao lun pas lun wak pas kas tu.",
          translation: "The spool of thread rolled across the floor.",
        },
        {
          jaobon: "jan bao ki sai men kes es pas sen en wo las cen.",
          translation: "A box of growing plants stood in the window.",
        },
        {
          jaobon: "mi hen xi.",
          translation: "I am very happy.",
        },
        {
          jaobon: "je kun hon gos men hen yo jus.",
          translation: "These oranges are juicy.",
        },
        {
          jaobon: "wa de bik yen wa hen yo yen.",
          translation: "Sea water is salty.",
        },
        {
          jaobon: "pu xan hen yo jen.",
          translation: "The streets are full of people.",
        },
        {
          jaobon: "suk yo suk tes.",
          translation: "Sugar tastes sweet.",
        },
        {
          jaobon: "ik as ke mi jek hok.",
          translation: "The fire feels hot.",
        },
        {
          jaobon: "xao nus cik pas es kan we ki jek lon.",
          translation: "The little girl seemed lonely.",
        },
        {
          jaobon: "yo bes ki nan ma de je xao nan cik as wok en wa ce.",
          translation: "The little boy's father had once been a sailor.",
        },
        {
          jaobon: "mi no ken bus dao mi wen te.",
          translation: "I have lost my blanket.",
        },
        {
          jaobon: "yo hon xon pak ki pas mak do luk en mu de hos gos.",
          translation: "A robin has built his nest in the apple tree.",
        },
        {
          jaobon: "nun mes mi men pas co en pu la.",
          translation: "At noon we ate our lunch by the roadside.",
        },
        {
          jaobon: "nan [jon sa] pas mak kin kos ge xao nan cik.",
          translation: "Mr. Jones made a knife for his little boy.",
        },
        {
          jaobon: "ta men bos es kus hen xi we.",
          translation: "Their voices sound very happy.",
        },
        {
          jaobon: "je son es xin cik mun o?",
          translation: "Is today Monday?",
        },
        {
          jaobon: "me sai pen pas ka de mu sai o?",
          translation: "Have all the leaves fallen from the tree?",
        },
        {
          jaobon: "ni a ben lis jas xas o?",
          translation: "Will you be ready on time?",
        },
        {
          jaobon: "ni ken he mi as cu je des cik o?",
          translation: "Will you send this message for me?",
        },
        {
          jaobon: "ni wek nis mi o?",
          translation: "Are you waiting for me?",
        },
        {
          jaobon: "je es ji un gak cik de cu cik guk o?",
          translation: "Is this the first kitten of the litter?",
        },
        {
          jaobon: "je xu men es cao bik nis ni o?",
          translation: "Are these shoes too big for you?",
        },
        {
          jaobon: "wa lu es ke ji ho?",
          translation: "How wide is the river?",
        },
        {
          jaobon: "kus.",
          translation: "Listen.",
        },
        {
          jaobon: "lai sen en mi yak.",
          translation: "Sit here by me.",
        },
        {
          jaobon: "no des je gis cik a jen bek son cen.",
          translation: "Keep this secret until tomorrow.",
        },
        {
          jaobon: "lai wis mi men.",
          translation: "Come with us.",
        },
      ],
    },
  ],
};

export default classics;
