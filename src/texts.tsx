import React from "react";
import {DAILY_ROOTS} from "./DailyWords";
import {translations} from "./minecraft";

type TextLine = {
  jaobon: string,
  translation: string,
  image?: string,
}

export type Text = {
  title: string,
  description?: string | JSX.Element,
  show_numbers?: boolean,
  lines: TextLine[],
}

const texts = new Map<string, Text>([
  [
    "north_wind",
    {
      title: "The North Wind and the Sun",
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
    }],
  [
    "syntax_test",
    {
      title: "Syntax Test Cases",
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
    }],
  [
    "lcc11",
    {
      title: "LCC11 Conlang Relay Prose Ring",
      description: <>
        I participated in the{' '}
        <a href="https://conlang.org/language-creation-conference/lcc11/lcc11-relay/" target="_blank">
          LCC11 Conlang Relay
        </a>!
      </>,
      lines: [
        {
          jaobon: "duk pen lak an es gi to de gik guk nis mak des we!",
          translation: "The pangolin is the leader of a language creation club!",
        },
        {
          jaobon: "ta as hao kus don des we de ek.",
          translation: "It can listen to and understand foreign languages well.",
        },
        {
          jaobon: "men bes ta as pas me son pis kan lek nao ne, i hen yo pao nis en je luk mai jek pis.",
          translation: "It often spends every hour looking at the internet, and is very skilled at exchanging ideas there.",
        },
        {
          jaobon: "ta duk pen yo ton we nis ki de wes pi lak an: juk es da hai no es soi.",
          translation: "Its scales have the same purpose as those of the armadillo: if struck, they will not be wounded.",
        },
        {
          jaobon: "yo un bes ki je duk pen lak an pas as mak des we ki mas hao de me.",
          translation: "Once, the pangolin made a language which was the best.",
        },
        {
          jaobon: "me xas je gik guk yak no yo gi to ki je we pek en me nao.",
          translation: "The club has almost never had a leader who is so memorable.",
        },
        {
          jaobon: "jai duk pen lak an!",
          translation: "Long live the pangolin!",
        },
      ],
    }],
  [
    "turtle",
    {
      title: "LCC11 Shirt Contribution",
      description: "I contributed a phrase to the LCC11 shirt.",
      lines: [
        {
          jaobon: "yo bes ki mi jek ton we de dun xis ki tan yo bon en xan, i mi yao ke o jen as yuk pon mi hao we.",
          translation: "Sometimes I feel like a turtle on its back, and I need someone to help put me the right way up.",
        }
      ],
    }],
  [
    "rootaday",
    {
      title: "Jaobon Root A Day",
      description: <>
        Follow along over on{' '}
        <a href="https://bsky.app/profile/jaobon.bsky.social" target="_blank">
          Bluesky
        </a>!
      </>,
      lines: DAILY_ROOTS.map(dr => dr && ({
        jaobon: `${dr.root.syllable}: ${dr.example_sentence.Jaobon_source}`,
        translation: `${dr.root.definition}: ${dr.example_sentence.English}`,
      })).filter(l => l !== null) as TextLine[],
    }],
  [
    "littleprince",
    {
      title: "The Little Prince",
      description: "by Antoine de Saint-Exupéry",
      lines: [
        {
          jaobon: "xao gi cik",
          translation: "The Little Prince",
        },
        {
          jaobon: "un",
          translation: "1"
        },
        {
          jaobon: "xas ki mi yo ses nen, yo bes ki mi kan pik ki cao be ki en buk ki es min nis \"jas gus de nak ne\" ki " +
            "nis mu tu de gen nak nes. je pik yo bao cao xis ki en co an. je bon mok pik de buk.",
          translation: "Once when I was six years old I saw a magnificent picture in a book, called True Stories from Nature, " +
            "about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a " +
            "copy of the drawing.",
          image: "littleprince/001.jpg",
        },
        {
          jaobon: "buk des: \"bao cao xis as co an man we, no yus bok soi. loi ta no ken wak, i do pas ses mun xas ki mos " +
            "yus tek us de an koi.\"",
          translation: "In the book it said: \"Boa constrictors swallow their prey whole, without chewing it. After that " +
            "they are not able to move, and they sleep through the six months that they need for digestion.\"",
        },
        {
          jaobon: "loi mi sen jek xen we nis je jas gus de xen mu tu. i yus so xok xe tuk bek mi dao mak pik un bes. " +
            "mi ji un pik. je bon mok je pik:",
          translation: "I pondered deeply, then, over the adventures of the jungle. And after some work with a colored " +
            "pencil I succeeded in making my first drawing. My Drawing Number One. It looked something like this:",
          image: "littleprince/002.jpg",
        },
        {
          jaobon: "mi as ke kes jen men kan mi be pik, i won nis ke je pik as ke ta men tak o no.",
          translation: "I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them.",
        },
        {
          jaobon: "loi ta men hai han des: \"tak? ke we yo jen ki tak to te?\"",
          translation: "But they answered: \"Frighten? Why should any one be frightened by a hat?\"",
        },
        {
          jaobon: "mi pik no yo to te. je pik yo bao cao xis ki yo cao nos an en du. de ke kes jen men hai no ken kan don ta, mi mak " +
            "pik nu bes: mi xe pik nis bao cao xis den, bus ke kes jen men ken kan don ta dan we. me bes mos yuk des nis gus a ta men. " +
            "je bon mok mi ji dos pik:",
          translation: "My drawing was not a picture of a hat. It was a picture of a boa constrictor digesting an elephant. But since\n" +
            "the grown-ups were not able to understand it, I made another drawing: I drew the inside of a boa\n" +
            "constrictor, so that the grown-ups could see it clearly. They always need to have things explained. My\n" +
            "Drawing Number Two looked like this:",
          image: "littleprince/003.jpg",
        },
        {
          jaobon: "je bes kes jen men han jes ke mi gai pon pik nis bao cao xis, nis pi o nis den, a la, i o we joi tu cok xes, " +
            "gu gus xes, pun ji xes, i des ges. de je mi ki yo ses nen cu de wok pu nis tus pik ki ken ben cao be. mi pe " +
            "cos nes de ke mi ji un pik i ji dos pik dao ca. me bes kes jen no don gus lon we, i me bes me xas yuk des " +
            "nis gus a kes jen hen as wik xao jen.",
          translation: "The grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, " +
            "whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. " +
            "That is why, at the age of six, I gave up what might have been a magnificent career as a painter. I had been " +
            "disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand " +
            "anything by themselves, and it is tiresome for children to be always and forever explaining things to them.",
        },
        {
          jaobon: "loi mi cus o wok pu i xes gi bo ce. me luk de cok man yo bes ki mi bo pas, i jas we " +
            "tu cok xes hen yuk mi. mi ken su kan kon cek [mes tu nas] i [a li jo na pis]. juk nok xas no sa la ki gai " +
            "a, je le sa nes hen yuk.",
          translation: "So then I chose another profession, and learned to pilot airplanes. I have flown a little over " +
            "all parts of the world; and it is true that geography has been very useful to me. At a glance I can " +
            "distinguish China from Arizona. If one gets lost in the night, such knowledge is valuable.",
        },
        {
          jaobon: "hen men bes de mi bi xas den mi kai kon hen men jen ki ak nis gus ki hen yo pes. men xas mi bi en mes " +
            "de kes jen. mi pas kan ta men de hen yak, kon gus ki gis. i je no as gao ki mi jek nis ta men.",
          translation: "In the course of this life I have had a great many encounters with a great many people who have " +
            "been concerned with matters of consequence. I have lived a great deal among grown-ups. I have seen them " +
            "intimately, close at hand. And that hasn't much improved my opinion of them.",
        },
        {
          jaobon: "bes ki mi kai kon kes jen ki mi jek ke ta kan kos lin we, mi kao as ke ta kan mi ji un pik, ki mi " +
            "man xas cuk. je we mi bus dao sa ke je jen kon gus jas we o no. i me bes me jen hai des je:",
          translation: "Whenever I met one of them who seemed to me at all clear-sighted, I tried the experiment of " +
            "showing him my Drawing Number One, which I have always kept. I would try to find out, so, if this was a " +
            "person of true understanding. But, whoever it was, he, or she, would always say:",
        },
        {
          jaobon: "\"je es to te.\"",
          translation: "\"That is a hat.\"",
        },
        {
          jaobon: "loi me bes mi no des a je jen nis bao cao xis o nis mu tu de gen nak nes o nis xin. mi pon se a los de " +
            "ta. mi des a ta nis tek guk pen hu, i nis tu cok hu, i nis gon gi, i nis nek te. i je kes jen hen xi kai kon " +
            "jen ki jek jas we.",
          translation: "Then I would never talk to that person about boa constrictors, or primeval forests, or stars. " +
            "I would bring myself down to his level. I would talk to him about bridge, and golf, and politics, and " +
            "neckties. And the grown-up would be greatly pleased to have met such a sensible man.",
        },
        {
          jaobon: "dos",
          translation: "2",
        },
        {
          jaobon: "de je mi sen bi lon we i no yo jen ki jas we ken des a. je we mi sen cen de ke ses nen cen mi bo ce " +
            "ben ca ka en [sa ha la] sek luk. yo kos ki ca en ik hoi mek. de ke mi yak no yo bu mek jen i no yo sen ce jen, " +
            "lon we mi kai bus bu ki pus. je es gus nis sen bi o mo: mi no yo wa ki go nis ses xin xas co.",
          translation: "So I lived my life alone, without anyone that I could really talk to, until I had an accident " +
            "with my plane in the Desert of Sahara, six years ago. Something was broken in my engine. And as I had with " +
            "me neither a mechanic nor any passengers, I set myself to attempt the difficult repairs all alone. It was a " +
            "question of life or death for me: I had scarcely enough drinking water to last a week.",
        },
        {
          jaobon: "ji un nok xas mi loi kai do en xa xan en tao tao ek pis de jen bi luk. mi es mas lon de wa ce jen ki " +
            "pe ce i sen en coi kos ki en bik wa mes. de je ni ken jek nis pik nis mi yai nes nis ke xas ki son a xan " +
            "mi ben wek nis bos ki xao i ao. je bos des:",
          translation: "The first night, then, I went to sleep on the sand, a thousand miles from any human habitation. " +
            "I was more isolated than a shipwrecked sailor on a raft in the middle of the ocean. Thus you can imagine my " +
            "amazement, at sunrise, when I was awakened by an odd little voice. It said:",
        },
        {
          jaobon: "\"ni cin - xe pik nis non yan ge mi!\"",
          translation: "\"If you please--draw me a sheep!\"",
        },
        {
          jaobon: "\"ke!\"",
          translation: "\"What!\"",
        },
        {
          jaobon: "\"xe pik nis non yan ge mi!\"",
          translation: "\"Draw me a sheep!\"",
        },
        {
          jaobon: "mi cao yai i yon pa. pao we mi as gun yek i nu bes kan. mi joi kan mi man yak. i mi kan jen ki xao i " +
            "cao ao ki en je luk pa kan mi hen pes we. je bon ni ken kan pik ki mas hao ki mi loi ken mak nis ta. i sok we " +
            "mi pik hai no yo mik nes de pik gen.",
          translation: "I jumped to my feet, completely thunderstruck. I blinked my eyes hard. I looked carefully all " +
            "around me. And I saw a most extraordinary small person, who stood there examining me with great seriousness. " +
            "Here you may see the best portrait that, later, I was able to make of him. But my drawing is certainly very " +
            "much less charming than its model.",
          image: "littleprince/004.gif",
        },
        {
          jaobon: "i je hai no lai de ke mi ca. kes jen des ke mi gai pa wis wok pu nis tus pik xas ki yo ses nen, i mi pas " +
            "no xes xe pik nis kos ki o nis bao cao xis pi i bao cao xis den.",
          translation: "That, however, is not my fault. The grown-ups discouraged me in my painter's career when I was " +
            "six years old, and I never learned to draw anything, except boas from the outside and boas from the inside.",
        },
        {
          jaobon: "je xas mi kan je nu cik ki su we lai i mi yek yak cu de mi to nis yai nes. cuk jek ke mi pas ka en " +
            "sek luk en tao tao ek pis de jen bi luk. i je xao jen hai no ak we ki no bus lu en xa mes o no wek we nis " +
            "wik nes o nis e nes o nis sek nes o nis tak nes. man we ta no yo we de cik ki en sek luk mes en tao tao ek pis " +
            "de jen bi luk i no sa la ki gai a. xas ki mi ben ken des, mi loi des a ta:",
          translation: "Now I stared at this sudden apparition with my eyes fairly starting out of my head in astonishment. " +
            "Remember, I had crashed in the desert a thousand miles from any inhabited region. And yet my little man seemed " +
            "neither to be straying uncertainly among the sands, nor to be fainting from fatigue or hunger or thirst or fear. " +
            "Nothing about him gave any suggestion of a child lost in the middle of the desert, a thousand miles from any " +
            "human habitation. When at last I was able to speak, I said to him:",
        },
        {
          jaobon: "\"i - ni en je luk bus ke?\"",
          translation: "\"But--what are you doing here?\"",
        },
        {
          jaobon: "i len we ta han des je, we ki ta des nis kos ki hen yo pes:",
          translation: "And in answer he repeated, very slowly, as if he were speaking of a matter of great consequence:",
        },
        {
          jaobon: "\"ni cin - xe pik nis non yan ge mi…\"",
          translation: "\"If you please--draw me a sheep…\"",
        },
        {
          jaobon: "xas ki gis gus cao yo pao, jen no cos nis no xun. mi jek ke je hen ao, i en tao tao ek pis de jen bi " +
            "luk i en luk ki mi ken mo, mi hai as tek un mu pen i mi ka tus xe tuk de mi bao cik. je xas mi jek nis ke " +
            "mas we mi pas xes tu cok xes, gu gus xes, pun ji xes, i des ges, i mi des a xao jen (lik has we, je la) nis " +
            "ke mi no ken xe pik. ta han des je:",
          translation: "When a mystery is too overpowering, one dare not disobey. Absurd as it might seem to me, a " +
            "thousand miles from any human habitation and in danger of death, I took out of my pocket a sheet of paper " +
            "and my fountain-pen. But then I remembered how my studies had been concentrated on geography, history, " +
            "arithmetic and grammar, and I told the little chap (a little crossly, too) that I did not know how to draw. " +
            "He answered me:",
        },
        {
          jaobon: "\"je no yo pes. xe pik nis non yan ge mi…\"",
          translation: "\"That doesn't matter. Draw me a sheep…\"",
        },
        {
          jaobon: "i hai no yo xas ki mi xe pik nis non yan. loi mi ge ta xe un de je dos pik ki mi pas xe men bes. je ki " +
            "yo pi de bao cao xis. i mi yai nis ke xao jen kan pik des je:",
          translation: "But I had never drawn a sheep. So I drew for him one of the two pictures I had drawn so often. It was " +
            "that of the boa constrictor from the outside. And I was astounded to hear the little fellow greet it with,",
        },
        {
          jaobon: "\"no, no, no! mi no yao cao nos an en bao cao xis den. bao cao xis hen ken as mo, i pai cao nos an es hen " +
            "pus. en luk ki mi bi en, me kos es hen xao. ki mi yao es non yan. ge mi xe pik nis non yan.\"",
          translation: "\"No, no, no! I do not want an elephant inside a boa constrictor. A boa constrictor is a very dangerous " +
            "creature, and an elephant is very cumbersome. Where I live, everything is very small. What I need is a sheep. " +
            "Draw me a sheep.\"",
        },
        {
          jaobon: "de je mi loi xe un pik.",
          translation: "So then I made a drawing.",
          image: "littleprince/005.jpg",
        },
        {
          jaobon: "pes we ta kan pik, loi ta des:",
          translation: "He looked at it carefully, then he said:",
        },
        {
          jaobon: "\"no. je non yan jo no he. mak nu bes.\"",
          translation: "\"No. This sheep is already very sickly. Make me another.\"",
        },
        {
          jaobon: "de je mi mak nu pik.",
          translation: "So I made another drawing.",
          image: "littleprince/006.jpg",
        },
        {
          jaobon: "mi mik as lik ha wen we i lao we",
          translation: "My friend smiled gently and indulgently.",
        },
        {
          jaobon: "ta des: \"lon we ni ken kan don ke je no es non yan. je es to pin yan. ta yo to pin.\"",
          translation: "\"You see yourself,\" he said, \"that this is not a sheep. This is a ram. It has horns.\"",
        },
        {
          jaobon: "de je mi hai xe pik nu bes.",
          translation: "So then I did my drawing over once more.",
          image: "littleprince/007.jpg",
        },
        {
          jaobon: "i je pik ye no es tek, ton we de o pik.",
          translation: "But it was rejected too, just like the others.",
        },
        {
          jaobon: "\"je yan cao gu. mi yao non yan ki hai a bi men xas.\"",
          translation: "\"This one is too old. I want a sheep that will live a long time.\"",
        },
        {
          jaobon: "je xas mi jo no yao hai mak, de ke mi yao su kai pon pis de ik hoi mek a ek bus don. de je mi jo su mak je pik.",
          translation: "By this time my patience was exhausted, because I was in a hurry to start taking my engine apart. " +
            "So I tossed off this drawing.",
          image: "littleprince/008.jpg",
        },
        {
          jaobon: "i ton xas mi su yuk des nis je.",
          translation: "And I threw out an explanation with it.",
        },
        {
          jaobon: "\"je jo jan bao de ta. non yan ki ni won es en je den.\"",
          translation: "\"This is only his box. The sheep you asked for is inside.\"",
        },
        {
          jaobon: "mi hen yai nis ke xi nes lai a to cen de mi xao cus jen.",
          translation: "I was very surprised to see a light break over the face of my young judge:",
        },
        {
          jaobon: "\"jas we je es le ki mi yao! ni jek ke je non yan a yao hen men mao sai o?\"",
          translation: "\"That is exactly the way I wanted it! Do you think that this sheep will have to have a great deal of grass?\"",
        },
        {
          jaobon: "\"bus ke?\"",
          translation: "\"Why?\"",
        },
        {
          jaobon: "\"de ke me kos ki en luk ki mi bi en es hen xao…\"",
          translation: "\"Because where I live everything is very small…\"",
        },
        {
          jaobon: "\"sok we mao sai a go nis ta.\" mi des je. \"non yan ki mi ba ge ni es hen xao.\"",
          translation: "\"There will surely be enough grass for him,\" I said. \"It is a very small sheep that I have given you.\"",
        },
        {
          jaobon: "ta ben se pon se to en pik xan.",
          translation: "He bent his head over the drawing.",
        },
        {
          jaobon: "\"no es xao we ki - kan! ta pas kai do…\"",
          translation: "\"Not so small that--Look! He has gone to sleep…\"",
        },
        {
          jaobon: "i je we mi kai kon xao gi cik.",
          translation: "And that is how I made the acquaintance of the little prince.",
        },
        {
          jaobon: "san",
          translation: "3",
        },
        {
          jaobon: "mi pas men xas cen de ke dao sa ke luk ki ta lai de. me bes xao gi cik, ki men bes won a mi, no ak " +
            "we ki ta kus ki mi won a ta. de des pis ki no bus we cu, gok we len we mi dao sa me gus.",
          translation: "It took me a long time to learn where he came from. The little prince, who asked me so many " +
            "questions, never seemed to hear the ones I asked him. It was from words dropped by chance that, little by " +
            "little, everything was revealed to me.",
        },
        {
          jaobon: "un ju gus es ke ji un bes ki ta kan mi bo ce (mi no a xe pik nis mi bo ce; je cao pus nis mi), ta won a mi:",
          translation: "The first time he saw my airplane, for instance (I shall not draw my airplane; that would be " +
            "much too complicated for me), he asked me:",
        },
        {
          jaobon: "\"je kos es ke?\"",
          translation: "\"What is that object?\"",
        },
        {
          jaobon: "\"je no jo es kos. je ken bo. je es mi bo ce.\"",
          translation: "\"That is not an object. It flies. It is an airplane. It is my airplane.\"",
        },
        {
          jaobon: "i mi yo gao hak nis ke ta sa ke mi ken bo.",
          translation: "And I was proud to have him learn that I could fly.",
        },
        {
          jaobon: "ta loi boi:",
          translation: "He cried out, then:",
        },
        {
          jaobon: "\"ke! ni pas ka de ten?\"",
          translation: "\"What! You dropped down from the sky?\"",
        },
        {
          jaobon: "\"yes.\" mi han des lo we.",
          translation: "\"Yes,\" I answered, modestly.",
        },
        {
          jaobon: "\"oi! je hao yo jok!\"",
          translation: "\"Oh! That is funny!\"",
        },
        {
          jaobon: "i xao gi cik kai ha be we, i je hen noi mi. mi yao ke mi doi es don pes we.",
          translation: "And the little prince broke into a lovely peal of laughter, which irritated me very much. " +
            "I like my misfortunes to be taken seriously.",
        },
        {
          jaobon: "ta loi pon:",
          translation: "Then he added:",
        },
        {
          jaobon: "\"loi ni ye pas lai de ten! ke es wak xin de ni?\"",
          translation: "\"So you, too, come from the sky! Which is your planet?\"",
        },
        {
          jaobon: "je xas mi jo kan lus cik en je man gis nes de ta jen; i mi won, su bes:",
          translation: "At that moment I caught a gleam of light in the impenetrable mystery of his presence; and I demanded, abruptly:",
        },
        {
          jaobon: "\"ni pas lai de o wak xin o?\"",
          translation: "\"Do you come from another planet?\"",
        },
        {
          jaobon: "ta hai no han des. ta as yon ta to wen we, hai sen kan mi bo ce:",
          translation: "But he did not reply. He tossed his head gently, without taking his eyes from my plane:",
        },
        {
          jaobon: "\"jas we ni mos no pas lai de cao ek luk…\"",
          translation: "\"It is true that on that you can't have come from very far away…\"",
        },
        {
          jaobon: "i ta ben sen jek pas men xas. loi ta ba mi non yan de ta bao cik, i sen jek nis je bun hao pes we.",
          translation: "And he sank into a reverie, which lasted a long time. Then, taking my sheep out of his pocket, " +
            "he buried himself in the contemplation of his treasure.",
        },
        {
          jaobon: "ni ken don ke we ki mi ben yao sa nis je ban cos nes nis \"o wak xin\". pao we mi loi bus mas sa nis je gus.",
          translation: "You can imagine how my curiosity was aroused by this half-confidence about the \"other planets.\" " +
            "I made a great effort, therefore, to find out more on this subject.",
        },
        {
          jaobon: "\"mi xao cik, ni pas lai de ke luk? ke es je ki ni des \"mi bi luk\" nis? ni yao dai ni non yan a ke luk?\"",
          translation: "\"My little man, where do you come from? What is this 'where I live,' of which you speak? " +
            "Where do you want to take your sheep?\"",
        },
        {
          jaobon: "yo xas ki ta no bos ak we ki jek, loi ta han des:",
          translation: "After a reflective silence he answered:",
        },
        {
          jaobon: "\"ki hao nis je jan bao ki ni pas ba ge mi es ke nok xas ta ken yus je nis bi kas.\"",
          translation: "\"The thing that is so good about the box you have given me is that at night he can use it as his house.\"",
        },
        {
          jaobon: "\"jas we. i juk ni hao mi a ba tai cao ye ge ni bus ke lus xas ni ken tai non yan, i ye mu ki ni ken tai ta en.\"",
          translation: "\"That is so. And if you are good I will give you a string, too, so that you can tie him during " +
            "the day, and a post to tie him to.\"",
        },
        {
          jaobon: "xao gi cik hai ak we ki ta yai nis je ju gus.",
          translation: "But the little prince seemed shocked by this offer:",
        },
        {
          jaobon: "\"tai ta! je jek pis hao ao!\"",
          translation: "\"Tie him! What a queer idea!\"",
        },
        {
          jaobon: "mi des: \"juk ni no tai ta, ta no bus lu a o luk, i no ken hoi.\"",
          translation: "\"But if you don't tie him,\" I said, \"he will wander off somewhere, and get lost.\"",
        },
        {
          jaobon: "nu bes mi mik jen kai ha su we.",
          translation: "My friend broke into another peal of laughter:",
        },
        {
          jaobon: "\"i ni jek ke ta lu a ke luk?\"",
          translation: "\"But where do you think he would go?\"",
        },
        {
          jaobon: "\"me luk. a ta cen.\"",
          translation: "\"Anywhere. Straight ahead of him.\"",
        },
        {
          jaobon: "xao gi cik loi des jas we:",
          translation: "Then the little prince said, earnestly:",
        },
        {
          jaobon: "\"no yo pes. en mi bi luk, me kos hao xao.\"",
          translation: "\"That doesn't matter. Where I live, everything is so small!\"",
        },
        {
          jaobon: "i ta loi des we ki ken yo xao doi:",
          translation: "And, with perhaps a hint of sadness, he added:",
        },
        {
          jaobon: "\"a ta cen no ken wak a cao ek…\"",
          translation: "\"Straight ahead of him, nobody can go very far…\"",
        },
      ],
    },
  ],
  [
    "minecraft",
    {
      title: "Minecraft",
      description: "Translations of Minecraft in-game text",
      lines: (
        translations
          .filter(t => !t.key.startsWith("language."))
          .map(t => ({jaobon: t.Jaobon, translation: t.English}))
      ),
    },
  ],
]);

export default texts;
