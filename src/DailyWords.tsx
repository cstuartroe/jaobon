import React from "react";

import {Root, ROOTS} from "./roots";
import AnnotatedText, {isError, MultiscriptText, multiscriptText} from "./AnnotatedText";

type DailyRoot = {
  root: Root,
  example_sentence: {
    English: string,
    Jaobon_source: string,
    Jaobon: MultiscriptText,
  }
}

function dr(rootStr: string, Jaobon: string, English: string): DailyRoot | null {
  if (rootStr === "") {
    return null;
  }

  const root = ROOTS.get(rootStr);

  if (root === undefined) {
    throw "root not found";
  }

  const text = multiscriptText(Jaobon);
  if (isError(text)) {
    throw text.message;
  }

  return {
    root,
    example_sentence: {
      English,
      Jaobon_source: Jaobon,
      Jaobon: text,
    }
  }
}

export const DAILY_ROOTS: (DailyRoot | null)[] = [
  // NYD
  dr("nu", "je son kai nu nen!", "Today begins a new year!"),

  // Imbolc
  dr("lus", "son lus as ke ten bin wa ben lu.", "The sunlight melts the snow."),

  // Tiger
  dr("gak", "en lek nao ne den, men jen xi kan pik nis gak.", "On the internet, many people like looking at pictures of cats."),
  dr("xin", "lus xas xin no ken es kan.", "During the daytime, stars cannot be seen."),
  dr("un", "me jen jo bi en un cok man guk we.", "All people live together in just one world."),
  dr("dos", "jao pao ce yo dos lun.", "Bicycles have two wheels."),
  dr("san", "san huk jan es la jan ki mas duk.", "Triangles are the strongest shape."),
  dr("cak", "cun xas es un de cak pis de nen.", "Spring is one quarter of the year."),

  dr("u", "mi xo yo u xo cik. ki mas kok es min nis ho xo cik.", "My hand has five fingers. The shortest is called the thumb."),
  dr("ses", "cun us gok yo ses sun gok.", "A carbon atom has six protons."),
  dr("ci", "jen men des ke ci es ji ki se mas xi mas bes de me o ji.", "People say that seven is their favorite number more often than any other number."),
  dr("ok", "en lek nao de je xas des guk yo ok yes o no.", "In modern computers, a byte has eight bits."),
  dr("nai", "ji xe cik ki en bek de goi nes es nai hen men bes.", "The last digit of a price is very often nine."),
  dr("das", "mi men gai yus das o das dos nis ji gen?", "Should we use ten or twelve as a numerical base?"),

  dr("gas", "mi ce yo gas lun ki ca.", "My car has bad tires."),
  dr("mu", "mu es yus we ki mak mu pen.", "Wood is used to make paper."),
  dr("ik", "ik hoi mek as ik xok yos.", "An engine burns gasoline."),
  dr("jin", "mi pas no yo jin ki go nis mai tek je to te.", "I didn't have enough money to buy the hat."),
  dr("wa", "ni yao bin wa i sun gos pon a ni wa o?", "Do you want ice and lemon to put in your water?"),
  dr("tu", "mi men ken ba tu pik de gon tu ge ni.", "We can give you a map of the park."),

  dr("wai", "je hun wa ki yo wai yun sai es mas xi nis mi.", "The soup with cauliflower is my favorite."),
  dr("gin", "sai gos ki no lis es gin mas bes.", "Unripe fruit is usually green."),
  dr("kun", "gu xas jen men as yus kun jin mak mai jin.", "In old times people made money from gold."),
  dr("hon", "pi de jin xin es jus sun hun, loi es hon.", "The surface of Mars is iron oxide, that's why it's red."),
  dr("lan", "juk yek de nus ma i nan ma es lan, yek de cik mos ye lan.", "If the eyes of the mother and father are both blue, the eyes of their child must also be blue."),
  dr("dak", "xok bok den es mas dak de me o luk ki mi pas bis.", "The inside of the cave is the darkest place I've ever been."),

  dr("non", "en non tu mi men as non yan i wa poi.", "On the farm we raise goats and ducks."),
  dr("wi", "juk tak, je an no as wi - jas we ta ak we ki pas mo.", "When it's afraid, the animal doesn't run away - it actually pretends to be dead."),
  dr("bus", "ni jo bus as ca mi han wa gan o?", "Did you just break my umbrella on purpose?"),
  dr("hoi", "me dos das nai ban son xas, mun hoi wis man lun.", "Every twenty-nine days, the moon completes an orbit."),
  dr("nek", "je pek jon cik as ke mi nek den yo doi.", "This virus makes my throat hurt."),
  dr("an", "mas men lak an yo cu cik ki cun.", "Most mammals give birth to live young."),

  // Rabbit
  dr("yon", "gak cik pas as yon a jos xan.", "The kitten jumped onto the table."),
  dr("xek", "xek koi as he.", "Exercising is healthy."),
  dr("jao", "mi men pas jao sen en cai luk co jon cai.", "We sat in the cafe drinking coffee."),
  dr("tan", "mi cao xi tan en do jan.", "I really love lying in bed."),
  dr("hai", "ji das un son pis mi pas hai tan en do jan.", "At 11:00 am I was still lying in bed."),
  dr("yes", "mi pas yes mak ki ni won!", "I did do what you asked!"),

  dr("li", "ta hun li a es en ke luk?", "Where will their wedding be?"),
  dr("sun", "mas bes mi sao co poi gos i sun lak.", "I usually have eggs and yogurt for breakfast."),
  dr("nao", "dak nao pak yo nao nik ki bik.", "Crows have large brains."),
  dr("lao", "mi ma men no as lao ke mi sen en pai ce lon we.", "My parents don't allow me to ride the train alone."),
  dr("juk", "mi ben cao xi juk ta ai mi.", "I'd be so happy if she loved me."),
  dr("luk", "a ke luk ni wak?", "Where are you going?"),

  dr("lu", "je dus yo gon dai lu ne ki hen hao.", "That city has a very good transportation system."),
  dr("ton", "je son, lus xas i nok xas yo cao nes ki yak ton.", "Today, the daytime and nighttime are approximately the same length."),
  dr("ge", "ta pas mai je jis kos ge mi men.", "He sold us this work of art."),
  dr("pis", "yak dos de san pis de dak cao gak men bi en jen wo den.", "Around two thirds of tigers live in human captivity."),
  dr("la", "nun mes mi men pas co en pu la.", "At noon we ate our lunch by the roadside."),
  dr("wao", "wao! cao be!", "Wow! So beautiful!"),

  dr("las", "mi nus kek mos yus yek las.", "My sister needs glasses."),
  dr("puk", "hai no puk!", "No more war!"),
  dr("xo", "en je koi hu ni no es lao yus xo tok hu cok.", "In this sport you're not allowed to touch the ball with your hands."),
  dr("bas", "bis xos kas no yo do luk ki bas je nok.", "The hotel doesn't have any vacant rooms for tonight."),
  dr("wik", "bin coi bek, mi jao jek wik.", "My legs feel tired after skiing."),
  dr("pa", "pa bos!", "Shush!"),

  dr("gok", "xas gok pas i las xa gok ka.", "As seconds are passing, grains of sand are falling."),
  dr("jai", "jai hon jao te guk de [bos ton] dus!", "Go Boston Red Sox!"),
  dr("pos", "ta pos nis je wok guk hen yo pes.", "His position at that company is very important."),
  dr("cas", "wes ki en mi xo cik pas cas i hen yo doi je xas.", "A bone in my finger broke and really hurts now."),
  dr("co", "mi men lai nun co en je co kas.", "Let's go eat lunch in that restaurant."),
  dr("goi", "yo jek pis ki hen goi.", "Some ideas are very valuable."),

  // Dragon
  dr("cao", "mi kek pas mak je pan cao ki cao yo hao tes!", "My sibling made these very delicious noodles!"),
  dr("kan", "ta xi kan je koi hu.", "He likes watching this sport."),
  dr("mi", "hen men de je des pai yo des pis \"mi\".", "Very many of these sentences contain the word \"me\"."),
  dr("xak", "yo mu xak ki pas ka da mi xo xak. yoi!", "A tree branch fell and hit my arm. Ow!"),
  dr("lek", "ni lek nao hen goi o?", "Is your computer very expensive?"),
  dr("bi", "mi men bi en bik dus.", "We live in a big city."),

  dr("nus", "mi nus ma es lo de we ki ta dos ma es lo.", "My mother is short because her parents are short."),
  dr("yai", "yai ca!", "Oh woe!"),
  dr("xe", "ta pas yus xe tuk xe je xe pen ki a ta nan kek.", "She used a pen to write the letter to her brother."),
  dr("as", "mi pas as ca je lek nao ak xe. no bus!", "I broke the computer program. Oops!"),
  dr("nis", "mi men pas sen en jen ga nis mak des we.", "We attended a conference about constructing languages."),
  dr("yuk", "cin yuk mi as cu je ge kos a ta.", "Please send them this gift for me."),

  dr("los", "sas pan los es co kos ki mi mas xi.", "Lasagna is my favorite food."),
  dr("de", "mik [to ma] pas ha nis hu nes de hus.", "Tom laughed at the monkey's tricks."),
  dr("mes", "nok mes mi pas kan ke yo jen ki en pa en gan pan sai mes.", "At midnight I saw someone standing among the corn."),
  dr("sao", "sao xas mi pas su wak en kas yak, loi nun cen mi sen en jen ga.", "Early this morning I ran in the neighborhood, then later in the morning I attended a meeting."),
  dr("nin", "nin jen pas lai a ta cu son hu ga.", "Nobody came to her birthday party."),
  dr("tok", "ni ken tok pai da tun mek o no?", "Can't you play piano?"),

  dr("wan", "no cu de kas wan xas.", "Don't leave the house at night."),
  dr("yek", "ta ak hen yo doi, ta mak yek wa.", "He seemed very sad, he was crying."),
  dr("gus", "ni en jek nis ke le gus?", "What kind of things are you thinking about?"),
  dr("nas", "je xas ta bi en ke nas tu?", "Which country is she living in now?"),
  dr("ja", "ni ja yo ke ji jen?", "How many people are in your household?"),
  dr("yus", "yus da gan da je kos.", "Hit it with a hammer."),

  dr("nos", "mik [ja wek] des ke nos de cao nos an hen cao.", "Jawed says that elephants' noses are very long."),
  dr("bis", "je dus gek mas men mai jin de bis nes.", "That city receives most of its income from tourism."),
  dr("xi", "ni xi pan cao o?", "Do you like noodles?"),
  dr("ho", "lu ho nes cao noi je son.", "Traffic is really bothersome today."),
  dr("tas", "tu tas es wen, i yo hen men le nis an i sai.", "The valley is warm and has many types of animals and plants."),
  dr("bes", "mas bes mi as yuk ja mak wan co.", "I usually prepare dinner for the family."),

  // Beltane
  dr("so", "kai hok son ken es min nis sai so son.", "The first day of summer can be called Beltane/Flower Day."),

  // Snake
  dr("xis", "wak xis en tan en xok xan gek son lus ki wen.", "The lizard is lying on top of a rock, receiving warm sunlight."),
  dr("dek", "juk yus je we ken mak pan cao ki hen dek.", "Using this method, you can make very thin noodles."),
  dr("cik", "mi nus cik pas mak xe cik ge mi.", "My daughter wrote me a note."),
  dr("gen", "mi mos bus lek gen.", "I need to find a power outlet."),
  dr("tuk", "mi jek ke wa tuk pas es soi.", "I think a pipe got broken."),
  dr("je", "je xas mi no yo xas nis des.", "I don't have time to talk right now."),

  dr("bai", "je jik gek ok das un de bai pis de mai jin de nas gi jik.", "This organization receives 81% of its funding from the federal government."),
  dr("tao", "yo ok gok dos de tao mon se san bes jen.", "There are 8.2 billion people."),
  dr("ban", "ban we mi yao no a hu ga.", "I kinda don't want to go to the party."),
  dr("ji", "ni yao ke ji jin nis je ji kun hon gos?", "How much money do you want for this many oranges?"),
  dr("pai", "ke ji es pai ji de je pai ce?", "What's the ID number of that train?"),
  dr("han", "han u gok a ni guk!", "Minus five points to your team!"),

  dr("i", "dos i dos es cak.", "Two plus two equals four."),
  dr("ca", "das ca ci es san.", "Ten minus seven is three."),
  dr("mon", "ses mon cak es dos das cak.", "Six times four is twenty four."),
  dr("cek", "nai cek san es san.", "Nine divided by three is three."),
  dr("bao", "wa xin yo jan bao ki gis.", "The starfish has a secret box."),
  dr("yak", "je yak yo [han guk] co kas ki cao hao.", "There's a really great Korean restaurant near here."),

  dr("he", "je us lik han he.", "This substance is slightly unhealthy."),
  dr("nes", "pai nes de je dus as yai.", "The layout of this city is surprising."),
  dr("on", "ta no xi tes de on gos.", "She doesn't like the taste of mushrooms."),
  dr("sai", "je wan co yo hen men cok kin gen i yun sai.", "This dinner has lots of onions and cauliflower."),
  dr("nik", "mi no co nik.", "I don't eat meat."),
  dr("hun", "joi! je hun wa hen hok!", "Be careful! The soup is very hot!"),

  dr("ga", "ni ken cin pai je bik wan co ga o?", "Could you please organize this big dinner event?"),
  dr("tos", "tos ne no hen yo pao.", "The wifi isn't very strong."),
  dr("dus", "to dus de je nas tu es ke?", "What's the capital city of that country?"),
  dr("pe", "mi pas pe cos nes de ke gon jik jen men a ak hao we.", "I've lost faith that the people in government are going to do the right thing."),
  dr("bo", "ta pas xes gi bo ce.", "He has learned to pilot a plane."),
  dr("bon", "dok cik sen en jos bon.", "The puppy is under the table."),

  // Horse
  dr("hos", "mi xi sao co moi hos pan.", "I like to eat oatmeal for breakfast."),
  dr("jan", "des pen ki jes pa es ok huk jan.", "The sign that says to stop is an octagon."),
  dr("ne", "je es ne luk ki mi mas xi.", "This is my favorite website."),
  dr("gis", "yo jen ki pas gis tek mi jin bao!", "Someone stole my wallet!"),
  dr("kos", "ni yus kos jin o lek jin pen pe?", "Are you paying by cash or card?"),
  dr("e", "ta e nes nis jin no ken es don.", "His greed for money is incomprehensible."),

  dr("xos", "je kas ki bik es bis xos kas.", "That big building is a hotel."),
  dr("pu", "mas we mi gai ces wok pu mas jas we, no de ke mi hai no yao.", "I should probably pursue a career more seriously, even though I don't want to."),
  dr("coi", "mi sen en coi kos wis wa lu.", "I'm going down the river in a raft."),
  dr("jas", "je jas pik pas es mak xas ki mi xao.", "This picture was taken when I was a kid."),
  dr("gon", "je es nas gon tu de nas tu ki mas bik.", "This is the largest national park in the country."),
  dr("pas", "gi jik to pas mak men pas wa pu.", "The prime minister has built many bridges."),

  dr("ke", "ni pas co ke ji los suk pan?", "How many pastries did you eat?"),
  dr("uk", "je le uk pas es mak en ji das ok nen bai.", "This form of dance was created in the 18th century."),
  dr("son", "hok mes son yo lus xas ki mas cao.", "The summer solstice has the longest daylight."),
  dr("xes", "mi xes luk no yo gi xes jen de mai ne xes.", "My school doesn't have an economics teacher."),
  dr("gos", "je sek gos xis co pak gos.", "This reptile eats bird eggs."),
  dr("do", "mi kai do hen wan cen nok.", "I went to sleep late last night."),

  dr("cuk", "mi ek kek wok en cuk jin luk.", "My cousin works at the bank."),
  dr("hes", "mi hes pan bao ki en es kuk o?", "Do I smell baking bread?"),
  dr("joi", "mi joi kan mi man yak.", "I looked all around me."),
  dr("mao", "nu gus ki o es ke mao sai es gin.", "In other news, grass is green."),
  dr("yu", "mi ma nan kek hen xi in yu.", "My uncle loves fishing."),
  dr("xun", "mi jek ke je xon te hen xun ni tes.", "I think this shirt really fits your style."),

  dr("kes", "je sai kes en tu ki sek.", "This plant grows in dry ground."),
  dr("kin", "kin kos es un de yus kos ki jen men pas kai mak mas sao.", "Knives are one of the earliest tools made by humans."),
  dr("des", "juk des a jen yus ta ma des we, ni des a ta hak.", "If you speak to somone in their native language, you speak to their heart."),
  dr("jes", "mi pas jes ke ta gai mas xes.", "I said he should study more."),
  dr("ye", "mi ye ken su wak pas ek pis tao ga en cak cek xas den.", "I can also run a kilometer in four minutes."),
  dr("oi", "oi! je mak doi!", "Ow! That hurts!"),

  // Goat
  dr("yan", "je wen xon te es mak de yan mao.", "This sweater is made of wool."),
  dr("pek", "ta to cen cao pek en mi nao.", "I remember his face so vividly."),
  dr("pin", "sao jen yus pin gan bus as mo to pin an.", "The hominid used a spear to hunt deer."),
  dr("bos", "me jen de jen guk bik bos xas ki hu jen da cu cok.", "The crowd all shouted when the player hit the ball."),
  dr("ten", "hen men nas tu yo so te ki ten pak en.", "Many countries have an eagle on their flag."),
  dr("xoi", "me de dos xoi mek es ca, mos yus wak pai.", "Both elevators are broken, we have to take the stairs."),

  dr("loi", "mi ce ben ca loi mi yus jao pao ce a je luk.", "My car broke down so I biked here."),
  dr("mai", "ta pas mai me u pok ge jen en mai tu.", "She sold off all five pigs at the market."),
  dr("mo", "je dun xis ki yo bai nai das dos nen hai no mo.", "This 192 year old tortoise still hasn't died."),
  dr("suk", "ni ken des ke mi xun we de gu xas, mi hai jek ke ni gai yo suk pan en ni cu son.", "Call me old-fashioned, but I think you should have cake on your birthday."),
  dr("cen", "cen son mi kan gak dok ki en mi kas cen.", "Yesterday I saw a fox in front of my house."),
  dr("jun", "juk bus mak sun lak, ni mos yo je le jun.", "To make yogurt you need this type of bacteria."),

  dr("gun", "wan xas ji das son pis je co kas ben gun.", "This restaurant closes at 10pm."),
  dr("dao", "mu sai ki bik pas es ya nis gas lu i ka dao tu.", "The big tree was blown to the ground by the wind."),
  dr("wek", "mi pas ben wek nis boi ki bik.", "I was awakened by a loud shout."),
  dr("hok", "joi: je tas den yo wa ki hen hok!", "Caution: this cup contains hot liquid!"),
  dr("jis", "mi pas en as man hao jis nis mak gas suk.", "I've been perfecting the art of making nougat."),
  dr("kas", "yo cao xis ki en bi en mi kas bon.", "There's a snake living under my house."),

  dr("to", "mi pas dai to te de gan cok hu a hu bes de [bik dus] guk de [nu yok] dus.", "I wore a baseball cap to the New York Mets game."),
  dr("is", "xas ki bo ce gi jen kan o bo ce en ta is, ta hoi gi a o la.", "When the pilot saw another plane to her left, she turned the other way."),
  dr("koi", "je kok bek mi xas go man yo gus, mi jo no yo xos xas ki mi ken xek koi.", "I've been so busy recently that I haven't had time to exercise."),
  dr("don", "mi jo don ke we ki je co kas yo kao jes ki cao hao.", "Now I understand why this restaurant has such good reviews."),
  dr("sus", "me tas es sus, cin was.", "The dishes are all dirty, please wash them."),
  dr("wak", "xin ce jen pas wak en pi de wak xin ki ao.", "The astronaut walked on the surface of the strange planet."),

  dr("cis", "lak cis ki duk ken es cuk i no wos hen cao xas.", "Hard cheese can be stored for a long time without spoiling."),
  dr("len", "mas len! pu xan yo xao an.", "Slow down! There's a little critter in the road."),
  dr("duk", "duk pen de duk pen lak an es hen duk.", "The scales of the armadillo are very hard."),
  dr("soi", "duk pen de duk pen lak an es go duk, juk es da jo hai no es soi.", "The scales of the armadillo are so hard that if struck they will not be wounded."),
  dr("huk", "yus huk ho nes i pi ek nes ken ji dao ek nes de lun pi pis.", "The arc length can be calculated using the angle and the radius."),
  dr("tek", "bus gus de je hu es gis tek so te de o guk.", "The objective of this game is to steal the other team's flags."),

  // Lunasa
  dr("pan", "je xas es xas nis kai tek pan sai de tu.", "Now it's time to begin harvesting the grain."),

  // Monkey
  dr("hus", "pa es hus!", "Stop fooling around!"),
  dr("gai", "je son mi gai xe ke le des pai? oi, mi jo ken xe je!", "What kind of sentence should I write today? Oh, I can just write this!"),
  dr("jik", "han puk jik es hao bik.", "The enemy army is quite large."),
  dr("kik", "su we ten pas ben hen hok, i mi jo kik mi jak.", "The weather suddenly became very hot, so I took off my jacket."),
  dr("sa", "sa nes es pao!", "Knowledge is power!"),
  dr("sok", "gis tek jen pas yus gan cik men de jin as han sok mek.", "The thief used metal picks to unlock the lock."),

  dr("cun", "en je kao luk ta men as wok nis cun xes ki cao yo pes.", "In this lab they work on very important biology research."),
  dr("cin", "cin joi ni jo gus i lao ke mi han je.", "Please mind your own business and let me deal with this."),
  dr("in", "mas bik pis de mai ne de je luk es in yu.", "The biggest sector of this area's economy is fishing."),
  dr("xon", "in nik de ta xon es hen bik de ke ta ju pes kos me son.", "His chest muscles are very large because he lifts weights every day."),
  dr("wok", "mi jo xoi wok pos!", "I just got promoted!"),
  dr("ben", "je xe cik es ben de gen ki en [pu lan se] des we.", "This message has been translated from the French original."),

  dr("mis", "juk no yo kan gus, jo kai jes nis ges es mis ki jas bik.", "It is a capital mistake to theorize before one has data."),
  dr("gan", "yo as tak xis ki yo mao gan.", "Some dinosaurs had feathers."),
  dr("mok", "xao [ju li] pas gis mok mi xe gus.", "Julie plagiarized my essay."),
  dr("lin", "as lin ni kas pis!", "Clean your room!"),
  dr("has", "jas nes as muk ni. je cen ge has a ni.", "The truth will set you free, but first it will piss you off."),
  dr("bek", "je bek mi as wok in nik de mi bek.", "After this I'll work out my back muscles."),

  dr("yen", "gai yo jen ki a nin an co kas des ke yen no de an.", "Someone should tell vegan restaurants that salt is vegan."),
  dr("win", "en hu tu mi pas dao tos lun a gun tas nek i win kun yu.", "At the fair I successfully threw a ring onto the bottle neck and won a goldfish."),
  dr("bin", "hu tu ye yo jen ki mai bin lak.", "The fair also had people selling ice cream."),
  dr("boi", "me xas ta dok as boi.", "Her dog is always barking."),
  dr("dai", "dai won jen hen yo mik we.", "The waiter is very friendly."),
  dr("bu", "mi bus bu ke mi yo mos gus nis ni.", "I'm trying to fulfill my obligation to you."),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  // Rooster
  dr("poi", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("wos", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  // Dog
  dr("dok", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  // Samhain
  dr("ao", "", ""),

  // Pig
  dr("pok", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  // Rat
  dr("mus", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("nok", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  // Ox
  dr("bak", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),

  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
  dr("", "", ""),
];

export default function DailyWords(props: {}) {
  const json = JSON.stringify(DAILY_ROOTS, null, 2);

  const usedRoots: Set<string> = new Set();
  DAILY_ROOTS.forEach(root => {
    if (root !== null) {
      if (usedRoots.has(root.root.syllable)) {
        throw `Root used twice: ${root.root.syllable}`;
      }
      usedRoots.add(root.root.syllable);
    }
  })
  const unusedRoots: [number, Root][] = [];
  ROOTS.forEach(root => {
    if (!usedRoots.has(root.syllable)) {
      unusedRoots.push([Math.random(), root]);
    }
  });
  unusedRoots.sort();

  return (
    <>
      <p style={{paddingTop: "10px"}}>
        {unusedRoots.length} unused roots:{' '}
        <AnnotatedText
          sentence={unusedRoots.map(([_, root]) => root.syllable).join(' ')}
          inline={true}
        />
      </p>
      <p onClick={() => navigator.clipboard.writeText(json)} style={{cursor: "pointer"}}>Copy</p>
      <pre>
          {json}
        </pre>
    </>
  );
}
