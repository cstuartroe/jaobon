import {ROOTS, partsOfSpeech, PartOfSpeech} from "./roots";
import {Document, documentToJSX, h1, h2, h3, p, ul, a, ijb, i} from "./formatting";

const posCounts: { [key in PartOfSpeech]?: number } = {};
ROOTS.forEach(root => {
  root.pos.map(pos => posCounts[pos] = (posCounts[pos] || 0) + 1);
});

const nominals: PartOfSpeech[] = ["noun", "positional", "numeral", "pronoun", "determiner", "nominalizer"];
const intransitives: PartOfSpeech[] = ["intransitive verb", "adjective", "number particle"];
const transitives: PartOfSpeech[] = ["transitive verb", "preposition", "existential"];
const otherPoss = partsOfSpeech.filter(pos => !(
  nominals.includes(pos) || intransitives.includes(pos) || transitives.includes(pos)
))

const posList = (poss: PartOfSpeech[]) => (
  ul(...poss.map(pos => [a(`/roots?pos=${pos}`, `${pos}: ${posCounts[pos] || 0} roots`)]))
);

export const SyntaxDocument: Document = [
  h1("Syntax"),

  p(
    "This section attempts to describe Jaobon syntax in maximum detail and precision. For someone ",
    "aspiring to learn Jaobon, it may not be necessary to read this section, at least not in its ",
    "entirety. Jaobon syntax is quite similar to that of its major source languages of Mandarin, ",
    "English, and Spanish, and is probably possible to acquire implicitly via exposure. ",
  ),

  h2("Parts of speech"),

  p(
    "Every Jaobon root has an explicitly assigned part of speech. Maximally, there ",
    "are ", partsOfSpeech.length + " ",
    "distinct parts of speech, although some could be considered classes of bound morphemes rather than ",
    "word classes, ",
    "and also some parts of speech are probably subtypes of others, with the syntactic ",
    "tests to distinguish between parts of speech often being fairly weak. In particular, there tends to ",
    "be great ",
    "flexibility for most roots to function as both nouns and noun modifiers. ",
  ),

  p("Nominals:"),

  posList(nominals),

  p("Intransitives:"),

  posList(intransitives),

  p("Transitives:"),

  posList(transitives),

  p("Other:"),

  posList(otherPoss),

  h2("Sentence order"),

  p(
    "Jaobon is analytical and has a strict word order. ",
    "The word order of a clause is (with optional elements in brackets): ",
  ),

  p(
    "[subordinating conjunction] [topic] subject [aspect particles] [adverbs] ",
    "predicates [oblique phrases] ",
  ),

  h3("Subject"),

  p(
    "The subject is any noun phrase. ",
  ),

  h3("Aspect particles"),

  p(
    "Aspect particles are prepositions and verbs which Jaobon co-opts for aspectual ",
    "(sometimes mixed with tense) ",
    "meaning. ",
    ijb('pas'), " \"across, over\" indicates an experiential/retrospective aspect and/or past tense. ",
    ijb('a'), " \"to\" indicates a prospective aspect or future tense. ",
    ijb('en'), " \"in, on\" indicates a progressive aspect, which may have ",
    "a default present-tense interpretation, but can certainly be used for past and future times if ",
    "context makes ",
    "that clear: ", ijb('xas ki mi en wok, ta pas des a mi'), " \"When I was working, she spoke to me.\" ",
    ijb("pa"), " \"stop\" indicates a cessative aspect: ", ijb("ni pa su wak"), " \"you stop running.\" ",
    ijb("sen"), " \"sit\" indicates a continuative aspect: ", ijb("ni sen su wak"), " \"you continue ",
    "running.\" ",
    ijb("kai"), " \"open\" indicates an inchoative/inceptive aspect: ", ijb("ni kai su wak"), " ",
    "\"you start to run.\" ",
    ijb("ben"), " \"change\" also indicates an inceptive aspect, but is preferred for adjectives or states, ",
    "while ", ijb("kai"), " is preferred for verbs, or predicates conveying more dynamic action: ",
    ijb("ta ben hon"), " \"it turns red.\" ",
    ijb("kai"), " vs. ", ijb("ben"), " may be used for the same predicate, to lend a sense of action ",
    "vs. state change respectively: ", ijb("yos kai lu"), " \"the oil begins flowing (as though poured etc.)\" ",
    "vs. ", ijb("yos ben lu"), " \"the fat melts.\" ",
  ),

  p(
    "A clause with no aspect particles may be interpreted as a simple present, a past or future ",
    "perfective, ",
    "or a gnomic, depending on context. ",
  ),

  p(
    "Aspect particles can be chained according to logical order: ", ijb("ni a pa su wak"), " \"you will ",
    "stop running.\" ", ijb("mi pas kai as xes"), " \"I have started studying.\" ",
  ),

  h3("Adverbs"),

  p(
    "Jaobon's ", posCounts['adverb'] + "", " adverbs appear in between aspect particles and predicates: ",
    ijb("mi pas gai wok"), " \"I should have worked.\" Like aspect particles, they can be chained ",
    "according to logical order: ", ijb("mi pas gai mas wok"), " \"I should have worked more.\" ",
  ),

  h3("Predicates"),

  p(
    "A predicate consists of an optional voice particle, a required predicate core, and an optional ",
    "direct object. ",

    "A predicate core may be a noun phrase, an intransitive phrase (", intransitives.join(', '), "), or a ",
    "transitive phrase (", transitives.join(', '), "). ",

    "A direct object is not permitted if the predicate core is a noun phrase. ",
    "A direct object generally is required if the predicate core is a transitive phrase (though it can be ",
    "dropped ",
    "for some transitive roots), unless it uses the voice particle ", ijb("es"), ", which forms a passive. ",
    "A direct object is not permitted for intransitive predicate cores unless they use the ",
    "voice particle ", ijb("as"), ". ",

    "Intransitive and transitive phrases are generally a single root, though modifiers may come before ",
    "the ",
    "root acting as the head of the phrase in lexicalized combinations. ",
  ),

  p(
    "There are two voice particles, ", ijb("as"), " and ", ijb("es"), " The meaning of voice particles depends ",
    "on ",
    "the type of predicate core: ",
  ),

  ul(
    [
      p(
        "For most noun phrases, only ", ijb("es"), " may be used. It essentially functions as a copula, ",
        "equating the ",
        "subject and verbal phrase: ", ijb("to pin an es lak an"), " \"Deers are mammals.\" ",
        "Although it is the only possible voice particle, it is still most common to ",
        "include the particle to clearly separate the subject from the predicate, since nouns may ",
        "often directly ",
        "modify other nouns. It is most likely to be dropped in simple sentences: ",
        ijb("ta xes jen"), " \"he is a student.\" ",
      ),
      p(
        "A special case of noun phrases, complementizer phrases, can use the voice ",
        "particle ", ijb("as"), " with a ",
        "causative meaning: ", ijb("mi pas as ke ta co wa"), " \"I made him drink water.\" ",
      ),
    ],
    [
      p(
        "Intransitive predicate cores may use ", ijb("es"), " or no voice particle with the same meaning ",
        "- ",
        "that the ",
        "predicate describes the subject: ", ijb("ta es gao"), " or ", ijb("ta gao"), " \"he is tall.\" The ",
        "choice ",
        "of whether or not to use ", ijb("es"), " is basically the same as for noun predicate cores - ",
        "including ",
        ijb("es"), " can resolve syntactic ambiguity or otherwise make the structure of the clause ",
        "more ",
        "obvious. ",
      ),
      p(
        "Intransitive predicate cores can use ", ijb("as"), ", which permits the presence of a direct ",
        "object. ",
        "If there is a direct object, the clause takes on a causative ",
        "meaning: ", ijb("mi as he ta"), " \"I ",
        "make him ",
        "healthy,\" or \"I heal him.\" Without a direct object, it has a volitional or reflexive ",
        "meaning: ",
        ijb("mi as he"), " \"I am intentionally healthy,\" or \"I make myself healthy.\" ",
      ),
    ],
    [
      p(
        "Transitive predicates, in contrast, default to the same meaning as ", ijb("as"), " if a voice ",
        "particle ",
        "is not included. With ", ijb("as"), " or no voice particle, the subject is the agent, with a ",
        "generally ",
        "required direct object being the patient: ", ijb("mi as co wa"), " or ", ijb("mi co wa"), " \"I ",
        "drink ",
        "water.\" ",
        "Unlike with the use of ", ijb("es"), " for nouns and intransitives, including the voice ",
        "particle is ",
        "not just ",
        "a matter of clarifying the syntax of the sentence, but may also suggest greater ",
        "volition: ",
        ijb("mi pas pe hu"), " \"I lost the game\" vs. ", ijb("mi pas as pe hu"), " \"I (intentionally) ",
        "lost ",
        "the ",
        "game.\" ",
      ),
      p(
        "Transitive predicates may use ", ijb("es"), ", which indicates a passive meaning and forbids ",
        "a direct object: ", ijb("mi en es ces"), " \"I am being followed.\" The agent can be recovered ",
        "with the preposition ", ijb("nis"), ": ", ijb("mi en es ces nis ta"), " \"I'm being followed ",
        "by him.\" ",
      ),
      p(
        "Note the perhaps surprising syntax that this implies for prepositions, which are a subtype ",
        "of transitives: to mean \"it is under the table,\" ", ijb("ta es en jos bon"), " is incorrect, ",
        "although it might be an apparent word-for-word translation from English or Spanish. ",
        ijb("ta"), " has an agent role with regard to the transitive ", ijb("en"), ", so it ",
        "must use either ", ijb("as"), " or no voice particle. No voice particle is prototypical ",
        "for prepositions: ", ijb("ta en jos bon"), ". ", ijb("as"), " may be used to imply volition: ",
        ijb("ta as en jos bon"), " would be correct if, for instance, \"it\" was an animal that ",
        "had gone under the table. This is a normal way to express willful motion: ",
        ijb("ta as a mai luk"), " \"she's going to the store\". ",
      ),
    ],
  ),

  p(
    "A major exception to the general rules for subjects and predicates is the ",
    "existential ", ijb("yo"), ", which I class as a special transitive part of speech. It behaves like ",
    "a transitive verb with the meaning \"have\": ", ijb("mi yo men buk"), " \"I have many books,\" and ",
    ijb("je yak yo co luk"), " \"there's a restaurant near here.\" However, there are two major ",
    "differences from other transitives: ",
  ),

  ul(
    [
      ijb("yo"), " cannot use voice particles.",
    ],
    [
      "Instead of a normal passive construction, ", ijb("yo"), " can be used in an existential ",
      "construction that simply lacks a subject: ", ijb("yo jen ki ken yuk ni"), " \"there's someone ",
      "who can help you.\" This is one of two clause types in Jaobon which may lack a subject, ",
      "the other being imperatives. This ",
      ijb("yo"), "...", ijb("ki"), " pattern in particular is used like an indefinite article, to ",
      "introduce a subject which has not previously been mentioned: ",
      ijb("yo jen ki pas as pa en pu"), " \"a person was standing in the street.\" ",
    ],
  ),

  p(
    "There may be multiple predicates within a single clause. Optionally, they can be separated by ",
    "a coordinating conjunction, but more typically they simply occur back-to-back: ",
    ijb("mi sen i co pan"), " or ", ijb("mi sen co pan"), " \"I sit and eat.\" ",
    "A direct object can be shared between two or more predicates, appearing only in the last one: ",
    ijb("ta ba co cai"), " \"she grabbed the tea and drank it.\" Voice particles apply to subsequent ",
    "predicates until a new voice particle is included: ", ijb("wak xis pas as co i mo cek con"), " \"the ",
    "lizard ate the insect, which killed the insect\", ",
    "but ", ijb("wak xis pas as co cek con i es mo"), " ",
    "\"the lizard ate the insect, and the lizard died.\" ",
  ),

  h3("Subordinating conjunction"),

  p(
    "The subordinating conjunctions are ", ijb("juk"), " \"if\" and ", ijb("we ki"), " \"in order to.\" ",
    "They appear at the beginning of a clause and ",
    "make the clause subordinate; it may come before or after the corresponding ",
    "main clause. ",
  ),

  h3("Oblique phrases"),

  p(
    "Oblique phrases in Jaobon are isolated noun phrases which have some oblique meaning. The most ",
    "common roots to serve as head of an oblique phrase by far are ", ijb("xas"), " \"time,\" ",
    ijb("we"), " \"way, manner,\" and ", ijb("bes"), " \"instance.\" ",
  ),

  p(
    ijb("we"), " is used to form adverbs of manner: ", ijb("mi as des su we"), " \"I speak quickly.\" ",
    "This includes ", ijb("ke we"), " \"how.\" ",
  ),

  p(
    ijb("xas"), " is the head root of many lexicalized combinations referring to units or periods ",
    "of time: ", ijb("son xas"), " \"day,\" ", ijb("cek xas"), " \"minute,\" ", ijb("sao xas"), " \"morning.\" ",
    "Some lexicalized terms for time have other head roots: ", ijb("nen"), " \"year,\" ",
    ijb("nun mes"), " \"noon,\" ", ijb("xas gok"), " \"second.\" Units of time can be prefixed with ",
    ijb("je"), " \"this\" to refer to the current one: ", ijb("je son xas"), ", and ", ijb("cen"), " ",
    "\"in front\" and ", ijb("bek"), " \"behind\" for the previous and next: ", ijb("cen xin xas"), " \"last week,\" ",
    ijb("bek son xas"), " \"tomorrow.\" Two periods before or after can be expressed by doubling ",
    ijb("cen"), " or ", ijb("bek"), ", while two or more periods away can be expressed by inserting ",
    "a number in between ", ijb("cen"), " or ", ijb("bek"), " and the time word: ",
    ijb("cen cen son xas"), " or ", ijb("cen dos son xas"), " \"the day before yesterday, two days ago.\" ",
    "Time words can also be prefixed with ", ijb("ke"), " \"what, which\" to form an interrogative: ",
    ijb("ke nen"), " \"which year.\" Note also simply ", ijb("ke xas"), " \"when.\" ",
    "Time words ending in ", ijb("xas"), " may have the ", ijb("xas"), " dropped when they are prefixed: ",
    ijb("je son"), " \"today\" instead of ", ijb("je son xas"), ". ",
  ),

  p(
    ijb("xas"), " is also used as the head of oblique phrases in another way: in the set phrase ",
    ijb("xas ki"), " \"when, the time that.\" For example: ", ijb('xas ki mi tok ta, ta hok.'), " ",
    "\"when I touched it, it was hot.\" This is structurally just a relative clause modifying ", ijb("xas"), ". ",
  ),

  p(
    "Another common oblique phrase head ",
    "is ", ijb("bes"), " \"instance, time\": ", ijb("san bes mi des"), " \"I spoke ",
    "three times.\" Note the phrases ", ijb("men bes"), ", which means not just \"many times,\" but also ",
    "\"often,\" and ", ijb("mas bes"), ", meaning \"usually,\" and ", ijb("nu bes"), " \"again.\" ",
  ),

  p(
    "Note that clause-level prepositional phrases are not classed as oblique phrases, but as predicates, ",
    "and may come before or after other predicates: ", ijb("ta as sen en bi kas"), " or ",
    ijb("ta as en bi kas sen"), " \"she sits in the house.\" ",
  ),

  h3("Topics"),

  p(
    "A single prepositional or oblique phrase may come at the beginning of a clause, functioning as a ",
    "topic: ", ijb("je xas cen mi jek ke ni mas gao de mi"), " \"before now I thought ",
    "you were taller than me\", ", ijb("en kas den ja jen sen wan co"), " \"inside the house, the family ",
    "is eating dinner\". ",
  ),

  p(
    "Ability to topicalize in this way is the only robust syntactic test to distinguish prepositions ",
    "from verbs in Jaobon. ",
  ),

  h3("Recipients and benefactors"),

  p(
    "Jaobon does not have indirect objects as a syntactic position. Recipients are the direct object ",
    "of the verb ", ijb("ge"), " \"give,\" with the thing being given being the object of a verb like ",
    ijb("ba"), " \"hold\" in a separate predicate: ", ijb("ta pas ba li kos ge mi"), " \"she gave me a gift.\" ",
    "Benefactors are similarly direct objects of the verb ", ijb("yuk"), " \"help\": ",
    ijb("mi pas yuk ni dai ta lai"), " \"I brought it for you.\" ",
  ),

  p(
    "Such sentences are not really possible to passivize in the normal way, though this is true for any ",
    "sentence with multiple predicates which are hard to conceptually separate. Making a recipient a ",
    "subject can simply be accomplished with the verb ", ijb("gek"), " \"receive\" (",
    ijb("mi pas gek li kos de ta"), " \"I got a gift from her\"), though this is kind of cheating. ",
    "The only other possibility is clefting with relative clauses: ", ijb("li kos es ki ta ba ge mi"), " ",
    "\"a gift is what she gave me.\" ",
  ),

  h2("Noun phrase order"),

  p(
    "Noun phrases have a single head root, with modifiers branching in both directions from the noun. ",
  ),

  h3("Left-branching modifiers"),

  p(
    "Modifiers before the head of the noun phrase are directly attached. Determiners and numerals ",
    "come before the head, in that order: ", ijb("je san jen"), " \"these three people.\" ",
    "Noun lexemes in ",
    "Jaobon are also typically built in a left-branching fashion: ", ijb("xes jen"), " \"student\" - the ",
    "head is ", ijb("jen"), " \"person,\" not ", ijb("xes"), " \"study.\" ",
    "Adjectives may come before the head of the noun phrase, although this is preferred only for ",
    "lexicalized or at least commonly-repeated combinations: ", ijb("gon tu"), " \"park, public land.\" ",
  ),

  p(
    "Modifiers coming before the head of a noun phrase are very flexible, in that nearly any part of ",
    "speech can appear in that position. Note noun-noun compounds like ", ijb("yek las"), " \"eyeglasses,\" ",
    "verb-noun compounds like ", ijb("in nik"), " \"muscle,\" and even entire predicates behaving as a ",
    "modifier like in ", ijb("des ges jen"), " \"lawyer.\" As a result, they don't obey a fixed set of rules ",
    "for the relationship between modifier and head, tending to obey conventions specific to the head or ",
    "type of construction. For example, prefixing ", ijb("jen"), " \"person\" with a bare transitive verb ",
    "tends to ",
    "form an agent noun, not a patient noun: ", ijb("cos jen"), " refers to someone who puts trust in ",
    "someone else, not to the trustee or confidant. But prefixing ", ijb("kos"), " \"thing, object\" with a ",
    "transitive verb can refer to an instrument or a patient, and the meaning is simply lexicalized: ",
    "compare ", ijb("xe kos"), " \"pen\" with ", ijb("co kos"), " \"food.\" ",
  ),

  h3("Genitives and linking particles"),

  p(
    "Jaobon has a linking genitive particle ", ijb("de"), " which can be used similarly to ",
    "Spanish ", i("de"), " to ",
    "mark possession or any other relationship between two nouns. For example, ", ijb("buk de ta"), " can ",
    "mean \"his book\" as in \"the book he owns\" or \"the book he wrote.\" ",
  ),

  p(
    "Genitives can also be expressed as with the possessor as a left-branching modifier, filling the ",
    "same syntactic slot as a determiner (e.g., ", ijb("ta buk"), " \"his book\"). ",
  ),

  p(
    "There is no rigid criteria for which strategy to use, although the genitive particle ", ijb("de"), " is ",
    "generally preferred for possessors consisting of more than one root. ",
  ),

  p(
    "There is one other linking particle which allows one noun to modify another: ", ijb("nis"), " \"about\". ",
    "It is used for conceptual relationships between noun phrases: ", ijb("des nis gi jik"), " \"discussion ",
    "about politics\", ", ijb("buk nis an"), " \"book about animals\". ",
  ),

  p(
    "Although ", ijb("de"), " and ", ijb("nis"), " are both prepositions, other prepositions cannot be ",
    "used to directly link nouns: *", ijb("jos en kuk luk"), ". The relativizer ", ijb("ki"), " must ",
    "be used: ", ijb("jos ki en kuk luk"), " \"table in the kitchen\". This is because most other ",
    "prepositions double as aspect ",
    "particles, which could lead to ambiguity if allowed to join noun phrases as well. ",
  ),

  h3("Relative clauses"),

  p(
    "Branching rightward also happens via relative clauses, marked with the relativizer ",
    "particle ", ijb("ki"), ". ",
    "Relative clauses occur more frequently in Jaobon than in English or Spanish, but less often than ",
    "Mandarin noun modifiers in 的. Jaobon relative clauses may have other nominal arguments, and ",
    "the head noun may be a subject, direct object, or oblique role in the relative clause. An example ",
    "of a relative clause where the head noun is a subject: ", ijb("jen ki no co nik"), " \"person who ",
    "does not eat meat.\" An example of a relative clause where the head noun is a direct object: ",
    ijb("kos ki mi pas kan"), " \"thing I saw.\" Examples of relative clauses where the head noun is ",
    "an oblique argument: ", ijb("we ki mi men pas mak ta"), " \"how we made it,\" ",
    ijb("xas ki mi men mak ta"), " \"the time when we made it.\" ",
  ),

  p(
    "Jaobon uses a gapping strategy for relative clauses, with no relative or resumptive pronouns. ",
    "If the predicate contains no subject, then the head noun is taken to be the subject: ",
    ijb("jen ki lis"), " \"clever person.\" If the predicate does contain a subject and permits an ",
    "object, then the head noun is assumed to be the object, unless semantics make it obvious ",
    "that the head noun is oblique: ", ijb("kos ki mi co"), " \"the thing I eat\" (head noun is object), ",
    "but ", ijb("we ki mi co"), " \"the manner in which I eat.\" If both subject and object slots are ",
    "filled in the relative clause, the head noun must be oblique. ",
  ),

  p(
    "Relative clauses are used not just for complex modifying clauses in Jaobon, but are the preferred ",
    "strategy for adjectives unless the adjectival meaning is a core part of the noun phrase, most ",
    "often because it is an at least somewhat lexicalized phrase. That is, ", ijb("ce ki hon"), " would ",
    "be the normal way to say \"red car\", not ", ijb("hon ce"), ". ",
  ),

  p(
    "Note the perhaps unintuitive syntax for relative clauses where the shared noun is the object of ",
    "a preposition: ",
    ijb("luk ki ni en"), " \"the place where you are.\" ",
    "This follows from the syntax for relative clauses with transitive predicates in general. ",
  ),

  p(
    "A relative clause can also be a noun phrase in itself, with no head noun: ", ijb("ki mi bus"), " \"what I ",
    "found.\" ",
  ),

  h3("Noun phrase heads"),

  p(
    "A noun phrase may be headed by any nominal root. Nouns, numerals, positionals, demonstratives, ",
    "and pronouns ",
    "are unambiguously nominal and can easily be a complete noun phrase on their own. Pronouns, in fact, ",
    "cannot take modifiers. On the other hand, the nominalizer ", ijb("nes"), " ",
    "must have left-branching modifiers: ", ijb("bik nes"), " \"size.\" ",
  ),

  p(
    "Any intransitive may also be the head of a noun phrase. Adjectives and intransitive verbs can ",
    "stand on their own as the head of a noun phrase, but like the nominalizer ", ijb("nes"), ", the ",
    "number suffix ", ijb("men"), " must have left-branching modifiers: ", ijb("jen men"), " \"people\". ",
    "The actual meaning of adjectives and intransitive verbs when they behave as nouns varies, with ",
    "the tendency being for adjectives to refer to some entity described by the adjective, and ",
    "intransitive verbs to refer to the concept of the verb or a single instance, but this is flexible ",
    "and may be up to interpretation depending on context. ", ijb("mi xi be"), " could mean \"I like the ",
    "beautiful (thing),\" \"I like beautiful things,\" or \"I like beauty,\" depending on context. ",
    "Similarly, ",
    ijb("mi koi nis bis"), " is somewhat ambiguous in its meaning, most likely meaning \"I am afraid of ",
    "travel,\" but perhaps meaning \"I am afraid of travelers/guests.\" Ambiguity can always be easily ",
    "resolved by simply adding the nominalizer ", ijb("nes"), " on the end to form an abstract noun ",
    "(e.g., ", ijb("be nes"), " \"beauty,\" ", ijb("bis nes"), " \"traveling, tourism\") or a noun root ",
    "like ", ijb("jen"), " \"person\" or ", ijb("kos"), " \"thing\" to form a concrete noun ",
    "(e.g., ", ijb("be kos"), " \"beautiful thing,\" ", ijb("bis jen"), " \"traveler, guest\".) ",
    "Some intransitive roots have conventional meanings that may be their default interpretation as a ",
    "noun, e.g., ", ijb("cai"), " means \"boil\" as a predicate, but \"tea\" as a noun. ",
  ),

  p(
    "Transitives verbs may also be the head of a noun phrase, in a manner similar to intransitive verbs. ",
    "There are some few transitive verbs which have conventionalized meanings as a noun, ",
    "e.g., ", ijb("pin"), " means \"pierce\" as a verb, and \"pin\" or \"thorn\" as a noun. Other transitive ",
    "roots - that is, prepositions and the existential ", ijb("yo"), " - cannot be the head of a noun ",
    "phrase. ",
  ),

  h3("Positionals"),

  p(
    "Positionals are a class of words unknown to European languages, but common in languages of other ",
    "regions, including being ubiquitous in Mandarin. They basically refer to some location relative ",
    "to a noun, carrying much of the semantic information that would be carried by prepositions in ",
    "English, so that fewer prepositional distinctions can be made: ", ijb("en kas den"), " \"in the ",
    "house\" vs. ", ijb("en kas bon"), " \"under the house\". ",
  ),

  p(
    "As seen in the previous example sentences, positionals simply come after the nominal that they ",
    "denote a position relative to, with that nominal syntactically being a left-branching modifier ",
    "of the positional. ",
  ),

  p(
    "The nominal can also come after the positional linked by ", ijb("de"), ", which can be clearer ",
    "when dealing with complex nominals: ", ijb("en bon de kas ki gin"), " \"under the green house\". ",
  ),

  h3("Number"),

  p(
    "Jaobon has an optional plural suffix ", ijb("men"), " which can be used for any noun: ",
    ijb("jen men"), " \"people\", ", ijb("co luk men"), " \"restaurants\". ",
    "Syntactically, ", ijb("men"), " is behaving as the head of the noun phrase, ",
    "with the pluralized noun being a left-branching modifier. ",
    "Note that ", ijb("men"), " as a modifier, rather than a head, means \"many\". ",
  ),

  p(
    "Nouns without the plural suffix should not be taken to be necessarily plural, but rather of ",
    "indeterminate number. A bare noun may refer to multiple referents if other cues make that ",
    "clear: ",
    ijb("mas bes dok yo bek cao"), " \"dogs usually have tails\". ",
  ),

  p(
    "A special case of this is nouns modified by a numeral, which should never also have a plural ",
    "suffix: ",
    ijb("san dok"), " \"three dogs\", not *", ijb("san dok men"), ". ",
  ),

  h2("Non-indicative sentences"),

  h3("Interrogatives"),

  p(
    "Jaobon has some preference for wh-fronting. If there is an interrogative oblique like ",
    ijb("ke we"), " \"how\" or ", ijb("ke xas"), " \"when,\" it appears in the pre-subject position. ",
    "If an interrogative argument, like ", ijb("ke"), " \"what,\" ", ijb("ke jen"), " \"who\", or ",
    ijb('ke ji (kos)'), " \"how many (things),\" would be the object, there is a preference to ",
    "shift it to being the subject via a passive (e.g., ", ijb('ke es co nis ni?'), " \"what did you ",
    "eat?\") or a free relative clause (e.g., ", ijb('ke es ki ni co?'), " \"what did you eat?\"). ",
    "This is not mandatory, though: ", ijb('ni co ke?'), " may be a less usual, though perhaps more ",
    "informal, way to ask \"what did you eat?\" ",
  ),

  p(
    "For polar questions, a sentence-final particle ", ijb("o"), " is used: ",
    ijb('ni xi ta o?'), " \"do you like it?\" ", ijb("o"), " is also a conjunction meaning ",
    "\"or\"; the implication of utterance-final ", ijb("o"), " is an implicit negative clause, i.e. ",
    ijb('ni xi ta o no xi ta?'), " \"do you like it or not\"? ",
  ),

  h3("Imperatives and hortatives"),

  p(
    "Jaobon imperatives lack an overt subject: ", ijb('bus ta!'), " \"find it!\" ",
    "Imperative clauses also cannot have a subordinating conjunction or aspect particles, ",
    "so that the predicate is often the first element of the ",
    "sentence. However, the adverb ", ijb("no"), " \"not\" is very normal in imperatives: ",
    ijb('no bus ta!'), " \"don't search for it!\" and the adverbs ", ijb('mas'), " \"more,\" ",
    ijb("ye"), " \"also,\" and ", ijb("jo"), " (normally meaning \"as soon as\", but in imperatives ",
    "expressing urgency) are also permitted. ",
  ),

  p(
    "Imperatives never use the voice particle ", ijb("as"), ", but still use ", ijb("es"), " as expected. ",
    "That is, *", ijb('as bus ta!'), " \"find it!\" and *", ijb('as lis!'), " \"get ready!\" are not grammatical, ",
    "with simply ", ijb('bus ta!'), " and ", ijb('lis!'), " being correct, but ", ijb('es puk jen!'), " ",
    "\"be a soldier!\" and ", ijb('es kan!'), " \"be seen!\" are grammatical. ",
  ),

  p(
    "The tone of an imperative can be softened with a predicate ", ijb("lai"), " \"come\" or ",
    ijb("cin"), " \"politely request\" before the main predicate: ", ijb('lai bus ta!'), " or ",
    ijb('cin bus ta!'), " \"please find it!\" ",
  ),

  p(
    "Hortatives that include the speaker actually do have a subject ", ijb("mi men"), " \"we\" and ",
    "mandatorily include ", ijb("lai"), ": ", ijb('mi men lai bus ta!'), " \"let's find it!\" Note that ",
    "such sentences can be read as plain indicative sentences as well - only context and tone of ",
    "voice clarifies which mood is intended. ",
  ),

  h2("Other topics"),

  h3("Comparatives"),

  p(
    "A comparative phrase in Jaobon uses the adverb ", ijb("mas"), " before the quality or action ",
    "being compared, with the object of comparison in a later predicate with the preposition ",
    ijb("de"), ": ", ijb("ni mas gao de ta"), " \"you're taller than him.\" ",
  ),

  p(
    "Comparatives with properties with verbal meanings compare frequency or intensity: ",
    ijb("mi mas les buk de ni"), " \"I read more books than you\" or \"I read books more often than you.\" ",
  ),

  p(
    "Superlatives can be the same as comparatives, or optionally clarified with ", ijb("de me"), " \"than ",
    "everything/everyone\": ", ijb("ni mas gao de me"), " \"you're the tallest.\" ",
  ),

  h3("Comparative correlatives"),

  p(
    "Phrases communicated in English with \"the more... the more...\" and Mandarin with \"越... 越...\" ",
    "are translated in Jaobon with an oblique clause ", ijb('bes ki... mas...'), " in a main clause ",
    "with the adverbs ", ijb("jo mas"), ": ", ijb('bes ki mas men, jo mas hao'), " \"the more, the better.\" ",
  ),

  p(
    "The similar phrase structure in English \"more and more...\" and in Mandarin \"越来越...\" has a ",
    "completely different ", ijb("pas xas jo mas"), " equivalent in Jaobon: ",
    ijb("je xao jen pas xas jo mas gao"), " \"that child is getting taller and taller.\" ",
  ),

  h3("As ... as possible"),

  p(
    "This adverbial concept is expressed in Jaobon with an oblique phrase ",
    ijb('mas ... we ki ken'), ": ", ijb("cin mak je mas su we ki ken"), " \"please do it ASAP.\" ",
  ),

  h3("Preposition support"),

  p(
    "Prepositions can be awkward to use directly with aspect particles, since they are often homonymous. ",
    "For instance, ", ijb("mi pas a bo lu tu"), " \"I went to the airport\" is a little odd, with two ",
    "prepositions in a row (", ijb("pas a"), "). ", ijb("mi a a bo lu tu"), " \"I will go to the airport\" ",
    "is even stranger, with two ", ijb("a"), " in a row. These sentences are grammatical, but it is more ",
    "natural to use a supporting intransitive. With prepositions of motion (", ijb("a"), ", ",
    ijb("has"), ", ", ijb("pas"), "), this is normally ", ijb("wak"), ": ",
    ijb("mi pas wak a bo lu tu"), ". ", ijb("wak"), " prototypically refers to walking on foot when ",
    "in reference to people, but this connotation is weak, and discarded when implausible; ",
    "The compound ", ijb("jao wak"), " specifically refers to walking on foot, and can be used to ",
    "clarify: ", ijb("mi pas jao wak a bo lu tu"), " \"I walked to the airport\". ",
    "With ", ijb("en"), " and ", ijb("nis"), ", the normal supporting intransitive is ",
    ijb("sen"), ": ", ijb("mi pas sen en ta kas"), " \"I was in his house\". Analogously, ", ijb("sen"), " ",
    "prototypically refers to a sitting position with human referents, but this is also a weak ",
    "connotation. The compound ", ijb("jao sen"), " analogously refers specifically to actually sitting. ",
  ),

  h3("Personal names and titles"),

  p(
    "Since any phonologically valid rendering of a name in Jaobon will sound like a sequence ",
    "of existing roots, there is some risk of ambiguity between a name and the normal compositional ",
    "meaning of those roots. A particularly difficult example is that someone named Jen ",
    "may find their name to be very confusing in Jaobon, as it simply sounds like ",
    ijb("jen"), " \"person\". It is fair game to choose between any of one's names to ",
    "predominantly use in Jaobon, if one fits Jaobon phonology better or is less confusable ",
    "for a normal phrase. Phonetic distortions are also fine in order to arrive at a sequence ",
    "of roots with a nicer meaning, e.g. the most straightforward phonetic rendering of my name ",
    "(Conor) is probably ", ijb('[ko na]'), " or ", ijb('[ka na]'), ", but I prefer ",
    ijb('[kon nak]'), ". Taken a step further, there's nothing wrong with inventing an ",
    "a priori Jaobon name for oneself. ",
  ),
  p(
    "To reduce auditory ambiguity as well as convey social information, personal names are ",
    "typically prefixed by a root acting like a title or the Mandarin name prefixes 老 and 小. The ",
    "set of titles is fairly open, although using overly unconventional titles in speech may ",
    "not serve to reduce confusion. ",
  ),
  p(
    "The most neutral title possible is ", ijb("ta"), ", which conveys no information whatsoever ",
    "about its referent, although it is so impersonal that it may only be appropriate if the ",
    "identity of the referent is unknown or general, such as on a form or legal document. ",
  ),
  p(
    "Another fairly neutral option is a title that only conveys gender information: ",
    ijb("nan"), ", ", ijb("nus"), ", or ", ijb("muk"), ", equivalent to English ",
    "Mr., Ms., Mx. This is appropriate for fairly formal settings or unfamiliar people. ",
  ),
  p(
    "Age/seniority based titles ", ijb("gu"), " and ", ijb("xao"), ", equivalent to ",
    "Mandarin 老 and 小, convey a bit more social information but are probably only ",
    "socially appropriate among somewhat closer associates. ",
  ),
  p(
    "Less formal but still common titles ",
    "include ", ijb("mik"), " or ", ijb("be"), " for friends and ",
    "kinship terms like ", ijb("cik"), ", ", ijb("kek"), ", ", ijb("ma"), " ",
    "(which need not be for actual blood relatives) ",
  ),
  p(
    "The least formal and even humorous titles include physical attributes like ", ijb("gao"), ", ",
    ijb("lo"), ", animals like ", ijb("mus"), ", ", ijb("hus"), ", ", ijb("pak"), ", ", ijb("os"), ", ",
    "or any descriptor that feels appropriate, like ", ijb("kin"), ", ", ijb("ao"), ". ",
  ),
  p(
    "These prefixed titles are distinguished from true occupational titles, e.g., ",
    ijb("ki as he"), " \"medical doctor\", which should come after the personal name. ",
    "Such occupational titles may obviate the need for a name prefix: ",
    ijb('[a li] ki as he'), " or ", ijb('gu [a li] ki as he'), " \"Dr. Ali\". ",
  ),

  h3("Names of countries and languages"),

  p(
    "Countries, languages, ethnic groups and the like are named with proper nouns much like personal ",
    "names, with a single proper noun referring to the language, nation, etc., and being used as a modifier ",
    "to terms like ", ijb("nas tu"), " \"country\" or ", ijb("des we"), " \"language\" to specify category. ",
    "For example, ", ijb('[doi ce]'), " means \"German/Germany\", and on its own can refer to the country, ",
    "the ethnicity, or the language, but would more commonly modify another term. ",
  ),

  p(
    "The term ", ijb("nas"), " refers to a nation in all senses - a place, a polity, a group of people sharing ",
    "a national identity - and is the most common term to use for countries generically: ",
    ijb('[doi ce] nas'), " \"Germany\", ", ijb('[mes tu] nas'), " \"China\", etc. To more explicitly refer ",
    "to only one of these sentence, ", ijb("tu"), " or ", ijb("nas tu"), " may refer to the location, ",
    ijb("jik"), ", ", ijb("tu jik"), ", or ", ijb("nas gi jik"), " to refer to the state or government, ",
    "and ", ijb("guk"), " to refer to an ethnic group or national populace. ",
  ),

  p(
    "Subnational divisions (provinces/states) use the term ", ijb("pis"), " or ", ijb("nas tu pis"), ": ",
    ijb('[nu yok] pis'), " \"New York state\". ",
    "Even smaller divisions (counties, townships, etc.) should use ", ijb("luk"), ": ", ijb('[ko ki] luk'), " ",
    "\"County Cork\". Cities and towns use ", ijb("dus"), ": ", ijb('[nu yok] dus'), " \"New York City\". ",
    ijb("tu"), " also refers to continents: ", ijb('[a ji] tu'), ". ",
  ),

  p(
    ijb("jen"), " can refer to ",
    "a person with a particular ethnic or national identity: ", ijb('[doi ce] jen'), " \"German person\", ",
    "with ", ijb("jik jen"), " referring specifically to a legal citizen. ",
  ),

  p(
    ijb("des we"), " means \"language\" and is used to form a term for a specific ",
    "language: ", ijb('[doi ce] des we'), " \"German language\". ",
  ),

  p(
    "Geographical terms like cardinal directions and \"new\" may be translated rather than phonetically rendered: ",
    ijb('yok [ka lo lai na] pis'), " \"North Carolina\", ", ijb('is [a me li ka] tu'), " \"South America\". ",
  ),
];

export default function Syntax(_props: {}) {
  return documentToJSX(SyntaxDocument);
}
