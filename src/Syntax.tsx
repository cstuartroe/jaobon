import React, {Component} from "react";
import {ROOTS, partsOfSpeech, PartOfSpeech} from "./roots";
import {Link} from "react-router-dom";
import {DisplaySettings} from "./DisplaySettings";
import AnnotatedText from "./AnnotatedText";

type Props = {
    displaySettings: DisplaySettings,
}

type State = {}

export default class Syntax extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }


    render() {
        const text = (s: string) => <AnnotatedText sentence={s} displaySettings={this.props.displaySettings}
                                                   inline={true}/>

        const posCounts: { [key in PartOfSpeech]?: number } = {};
        ROOTS.forEach(root => {
            root.pos.map(pos => posCounts[pos] = (posCounts[pos] || 0) + 1);
        });

        const nominals: PartOfSpeech[] = ["noun", "positional", "numeral", "pronoun", "determiner", "nominalizer", "diminutive"];
        const intransitives: PartOfSpeech[] = ["intransitive verb", "adjective", "number particle"];
        const transitives: PartOfSpeech[] = ["transitive verb", "preposition", "existential"];
        const otherPoss = partsOfSpeech.filter(pos => !(
            nominals.includes(pos) || intransitives.includes(pos) || transitives.includes(pos)
        ))

        const posList = (poss: PartOfSpeech[]) => (
            <ul>
                {poss.map(pos => (
                    <li key={pos}>
                        <Link to={`/roots?pos=${pos}`}>
                            {pos}: {posCounts[pos] || 0} roots
                        </Link>
                    </li>
                ))}
            </ul>
        );


        return (
            <>
                <h1>Syntax</h1>

                <p>
                    This section attempts to describe Jaobon syntax in maximum detail and precision. For someone
                    aspiring to learn Jaobon, it may not be necessary to read this section, at least not in its
                    entirety. Jaobon syntax is quite similar to that of its major source languages of Mandarin,
                    English, and Spanish, and is probably possible to acquire implicitly via exposure.
                </p>

                <h2>Parts of speech</h2>

                <p>
                    Every Jaobon root has an explicitly assigned part of speech. Maximally, there
                    are {partsOfSpeech.length}{' '}
                    distinct parts of speech, although some could be considered classes of bound morphemes rather than
                    word classes,
                    and also some parts of speech are probably subtypes of others, with the syntactic
                    tests to distinguish between parts of speech often being fairly weak. In particular, there tends to
                    be great
                    flexibility for most roots to function as both nouns and noun modifiers.
                </p>

                <p>Nominals:</p>

                {posList(nominals)}

                <p>Intransitives:</p>

                {posList(intransitives)}

                <p>Transitives:</p>

                {posList(transitives)}

                <p>Other:</p>

                {posList(otherPoss)}

                <h2>Sentence order</h2>

                <p>
                    Jaobon is analytical and has a strict word order.
                    The word order of a clause is (with optional elements in brackets):
                </p>

                <p>
                    [subordinating conjunction] [oblique phrases] subject [aspect particles] [adverbs]
                    predicates [oblique phrases]
                </p>

                <h3>Subject</h3>

                <p>
                    The subject is any noun phrase.
                </p>

                <h3>Aspect particles</h3>

                <p>
                    Aspect particles are prepositions and verbs which Jaobon co-opts for aspectual
                    (sometimes mixed with tense)
                    meaning.{' '}
                    {text('de')} "from" indicates a perfect aspect and/or past tense. {text('a')} "to" indicates a
                    prospective aspect or future tense.{' '}
                    {text('pas')} "across, over" indicates an experiential aspect.{' '}
                    {text('en')} "in, on" indicates a progressive aspect, which may have
                    a default present-tense interpretation, but can certainly be used for past and future times if
                    context makes
                    that clear: {text('xas ki mi en wok, ta de des a mi')} "When I was working, she spoke to me."{' '}
                    {text('kai')} "open" indicates an inchoative/inceptive aspect: {text('ni kai su wak')}{' '}
                    "you start to run."{' '}
                    {text('mo')} "die" indicates a cessative aspect: {text('ni mo su wak')} "you stop running."{' '}
                    {text('sen')} "sit" indicates a continuative aspect: {text('ni sen su wak')} "you continue
                    running."
                </p>

                <p>
                    A clause with no aspect particles may be interpreted as a simple present, a past or future perfective,
                    or a gnomic, depending on context.
                </p>

                <p>
                    Aspect particles can be chained according to logical order: {text('ni a mo su wak')} "you will
                    stop running." {text('mi de pas kai as xes')} "I had started studying."
                </p>

                <h3>Adverbs</h3>

                <p>
                    Jaobon's {posCounts['adverb']} adverbs appear in between aspect particles and predicates:{' '}
                    {text('mi de gai wok')} "I should have worked." Like aspect particles, they can be chained
                    according to logical order: {text('mi de gai mas wok')} "I should have worked more."
                </p>

                <h3>Predicates</h3>

                <p>
                    A predicate consists of an optional voice particle, a required predicate core, and an optional
                    direct object.

                    A predicate core may be a noun phrase, an intransitive phrase ({intransitives.join(', ')}, or a
                    transitive
                    phrase ({transitives.join(', ')}).

                    A direct object is not permitted if the predicate core is a noun phrase.
                    A direct object generally is required if the predicate core is a transitive phrase (though it can be
                    dropped
                    for some transitive roots), unless it uses the voice particle {text('es')}, which forms a passive.
                    A direct object is not permitted for intransitive predicate cores unless they use the
                    voice particle {text('as')}.

                    Intransitive and transitive phrases are generally a single root, though modifiers may come before
                    the
                    root acting as the head of the phrase in lexicalized combinations.
                </p>

                <p>
                    There are two voice particles, {text('as')} and {text('es')} The meaning of voice particles depends
                    on
                    the type of predicate core:
                </p>

                <ul>
                    <li>
                        <p>
                            For most noun phrases, only {text('es')} may be used. It essentially functions as a copula,
                            equating the
                            subject and verbal phrase: {text('to pin an es lak an')} "Deers are mammals."
                            Although it is the only possible voice particle, it is still most common to
                            include the particle to clearly separate the subject from the predicate, since nouns may
                            often directly
                            modify other nouns. It is most likely to be dropped in simple sentences:
                            {text('ta xes jen')} "he is a student."
                        </p>
                        <p>
                            A special case of noun phrases, complementizer phrases, can use the voice
                            particle {text('as')} with a
                            causative meaning: {text('mi de as ke ta co wa')} "I made him drink water."
                        </p>
                    </li>
                    <li>
                        <p>
                            Intransitive predicate cores may use {text('es')} or no voice particle with the same meaning
                            -
                            that the
                            predicate describes the subject: {text('ta es gao')} or {text('ta gao')} "he is tall." The
                            choice
                            of whether or not to use {text('es')} is basically the same as for noun predicate cores -
                            including{' '}
                            {text('es')} can resolve syntactic ambiguity or otherwise make the structure of the clause
                            more
                            obvious.
                        </p>
                        <p>
                            Intransitive predicate cores can use {text('as')}, which permits the presence of a direct
                            object.
                            If there is a direct object, the clause takes on a causative
                            meaning: {text('mi as he ta')} "I
                            make him
                            healthy," or "I heal him." Without a direct object, it has a volitional or reflexive
                            meaning:{' '}
                            {text('mi as he')} "I am intentionally healthy," or "I make myself healthy."
                        </p>
                    </li>
                    <li>
                        <p>
                            Transitive predicates, in contrast, default to the same meaning as {text('as')} if a voice
                            particle
                            is not included. With {text('as')} or no voice particle, the subject is the agent, with a
                            generally
                            required direct object being the patient: {text('mi as co wa')} or {text('mi co wa')} "I
                            drink
                            water."
                            Unlike with the use of {text('es')} for nouns and intransitives, including the voice
                            particle is
                            not just
                            a matter of clarifying the syntax of the sentence, but may also suggest greater
                            volition:{' '}
                            {text('mi de pe hu')} "I lost the game" vs. {text('mi de as pe hu')} "I (intentionally) lost
                            the
                            game."
                        </p>
                        <p>
                            Transitive predicates may use {text('es')}, which indicates a passive meaning and forbids
                            a direct object: {text('mi en es ces')} "I am being followed." The agent can be recovered
                            with the preposition {text('nis')}: {text('mi en es ces nis ta')} "I'm being followed
                            by him."
                        </p>
                    </li>
                </ul>

                <p>
                    A major exception to the general rules for subjects and predicates is the
                    existential {text('yo')}, which I class as a special transitive part of speech. It behaves like
                    a transitive verb with the meaning "have": {text('mi yo men buk')} "I have many books," and{' '}
                    {text('je yak yo co luk')} "there's a restaurant near here." However, there are two major
                    differences from other transitives:
                </p>

                <ul>
                    <li>{text('yo')} cannot use voice particles.</li>
                    <li>
                        Instead of a normal passive construction, {text('yo')} can be used in an existential
                        construction that simply lacks a subject: {text('yo jen ki ken yuk ni')} "there's someone
                        who can help you." This is one of two clause types in Jaobon which may lack a subject,
                        the other being imperatives. This{' '}
                        {text('yo')}...{text('ki')} pattern in particular is used like an indefinite article, to
                        introduce a subject which has not previously been mentioned:{' '}
                        {text('yo jen ki de as en dao jan')} "a person was standing in the street."
                    </li>
                </ul>

                <p>
                    There may be multiple predicates within a single clause. Optionally, they can be separated by
                    a coordinating conjunction, but more typically they simply occur back-to-back:{' '}
                    {text('mi sen i co pan')} or {text('mi sen co pan')} "I sit and eat."
                    A direct object can be shared between two or more predicates, appearing only in the last one:{' '}
                    {text('ta ba co cai')} "she grabbed the tea and drank it." Voice particles apply to subsequent
                    predicates until a new voice particle is included: {text('wak xis de as co i mo kok con')} "the
                    lizard ate the insect, which killed the insect", but {text('wak xis de as co kok con i es mo')}{' '}
                    "the lizard ate the insect, and the lizard died."
                </p>

                <h3>Subordinating conjunction</h3>

                <p>
                    The subordinating conjunctions are {text('juk')} "if" and {text('we')} "in order to."
                    They appear at the beginning of a clause and
                    make the clause subordinate; it may come before or after the corresponding
                    main clause.
                </p>

                <h3>Oblique phrases</h3>

                <p>
                    Oblique phrases in Jaobon are isolated noun phrases which have some oblique meaning. The most
                    common roots to serve as head of an oblique phrase by far are {text('xas')} "time,"{' '}
                    {text('we')} "way, manner," and {text('bes')} "instance."
                </p>

                <p>
                    {text('we')} is used to form adverbs of manner: {'mi as des su we'} "I speak quickly."
                    This includes {text('ke we')} "how."
                </p>

                <p>
                    {text('xas')} is the head root of many lexicalized combinations referring to units or periods
                    of time: {text('son xas')} "day," {text('kok xas')} "minute," {text('sao xas')} "morning."
                    Some lexicalized terms for time have other head roots: {text('nen')} "year,"{' '}
                    {text('nun mes')} "noon," {text('xas gok')} "second." Units of time can be prefixed with{' '}
                    {text('je')} "this" to refer to the current one: {text('je son xas')}, and {text('xan')}{' '}
                    "above" and {text('bon')} "below" for the previous and next: {text('xan xin xas')} "last week,"{' '}
                    {text('bon son xas')} "tomorrow." Two periods before or after can be expressed by doubling{' '}
                    {text('xan')} or {text('bon')}, while two or more periods away can be expressed by inserting
                    a number in between {text('xan')} or {text('bon')} and the time word:{' '}
                    {text('xan xan son xas')} or {text('xan dos son xas')} "the day before yesterday, two days ago."
                    Time words can also be prefixed with {text('ke')} "what, which" to form an interrogative:{' '}
                    {text('ke nen')} "which year." Note also simply {text('ke xas')} "when."
                    Time words ending in {text('xas')} may have the {text('xas')} dropped when they are prefixed:{' '}
                    {text('je son')} "today" instead of {text('je son xas')}.
                </p>

                <p>
                    {text('xas')} is also used as the head of oblique phrases in another way: in the set phrase{' '}
                    {text('xas ki')} "when, the time that." For example {text('xas ki mi tok ta, ta de hok.')}{' '}
                    "when I touched it, it was hot." This is structurally just a relative clause modifying {text('xas')}.
                </p>

                <p>
                    Another common oblique phrase head
                    is {text('bes')} "instance, time": {text('san bes mi des')} "I spoke
                    three times." Note the phrases {text('men bes')}, which means not just "many times," but also
                    "often," and {text('mas bes')}, meaning "usually," and {text('nu bes')} "again."
                </p>

                <p>
                    In general, only up to one oblique phrase should appear in the pre-subject position, with others
                    coming at the end of the clause; if there is an interrogative oblique phrase, it should be in the
                    pre-subject position.
                </p>

                <p>
                    Note that clause-level prepositional phrases are not classed as oblique phrases, but as predicates,
                    and may come before or after other predicates: {text('ta as sen en bi kas')} or{' '}
                    {text('ta as en bi kas sen')} "she sits in the house."
                </p>

                <h3>Recipients and benefactors</h3>

                <p>
                    Jaobon does not have indirect objects as a syntactic position. Recipients are the direct object
                    of the verb {text('ge')} "give," with the thing being given being the object of a verb like{' '}
                    {text('ba')} "hold" in a separate predicate: {'ta de ba li kos ge mi'} "she gave me a gift."
                    Benefactors are similarly direct objects of the verb {text('he')} "help":{' '}
                    {text('mi de he ni dai ta lai')} "I brought it for you."
                </p>

                <p>
                    Such sentences are not really possible to passivize in the normal way, though this is true for any
                    sentence with multiple predicates which are hard to conceptually separate. Making a recipient a
                    subject can simply be accomplished with the verb {text('gek')} "receive" (
                    {text('mi de gek li kos de ta')} "I got a gift from her"), though this is kind of cheating.
                    The only other possibility is clefting with relative clauses: {text('li kos es ki ta ba ge mi')}
                    "a gift is what she gave me."
                </p>

                <h2>Noun phrase order</h2>

                <p>
                    Noun phrases have a single head root, with modifiers branching in both directions from the noun.
                </p>

                <h3>Left-branching modifiers</h3>

                <p>
                    Modifiers before the head of the noun phrase are directly attached. Determiners and numerals
                    come before the head, in that order: {text('je san jen')} "these three people."
                    Noun lexemes in
                    Jaobon are also typically built in a left-branching fashion: {text('xes jen')} "student" - the
                    head is {text('jen')} "person," not {text('xes')} "study."
                    Adjectives may come before the head of the noun phrase, although this is preferred only for
                    lexicalized or at least commonly-repeated combinations: {text('gon tu')} "park, public land."
                </p>

                <p>
                    Modifiers coming before the head of a noun phrase are very flexible, in that nearly any part of
                    speech can appear in that position. Note noun-noun compounds like {text('yek las')} "eyeglasses,"
                    verb-noun compounds like {text('in nik')} "muscle," and even entire predicates behaving as a
                    modifier like in {text('mai ges jen')} "lawyer." As a result, they don't obey a fixed set of rules
                    for the relationship between modifier and head, tending to obey conventions specific to the head or
                    type of construction. For example, prefixing {text('jen')} "person" with a bare transitive verb
                    tends to
                    form an agent noun, not a patient noun: {text('cos jen')} refers to someone who puts trust in
                    someone else, not to the trustee or confidant. But prefixing {text('kos')} "thing, object" with a
                    transitive verb can refer to an instrument or a patient, and the meaning is simply lexicalized:
                    compare {text('xe kos')} "pen" with {text('co kos')} "food."
                </p>

                <h3>Relative clauses</h3>

                <p>
                    Branching rightward happens via relative clauses, marked with the relativizer particle {text('ki')}.
                    Relative clauses occur more frequently in Jaobon than in English or Spanish, but less often than
                    Mandarin noun modifiers in 的. Jaobon relative clauses may have other nominal arguments, and
                    the head noun may be a subject, direct object, or oblique role in the relative clause. An example
                    of a relative clause where the head noun is a subject: {text('jen ki no co nik')} "person who
                    does not eat meat." An example of a relative clause where the head noun is a direct object:{' '}
                    {text('kos ki mi de kan')} "thing I saw." Examples of relative clauses where the head noun is
                    an oblique argument: {text('we ki mi men de mak ta')} "how we made it,"{' '}
                    {text('xas ki mi men mak ta')} "the time when we made it."
                </p>

                <p>
                    Jaobon uses a gapping strategy for relative clauses, with no relative or resumptive pronouns.
                    If the predicate contains no subject, then the head noun is taken to be the subject:{' '}
                    {text('jen ki lis')} "clever person." If the predicate does contain a subject and permits an
                    object, then the head noun is assumed to be the object, unless semantics make it obvious
                    that the head noun is oblique: {text('kos ki mi co')} "the thing I eat" (head noun is object),
                    but {text('we ki mi co')} "the manner in which I eat." If both subject and object slots are
                    filled in the relative clause, the head noun must be oblique.
                </p>

                <p>
                    Relative clauses are used not just for complex modifying clauses in Jaobon, but are the preferred
                    strategy for adjectives unless the adjectival meaning is a core part of the noun phrase, most
                    often because it is an at least somewhat lexicalized phrase. That is, {text('ce ki hon')} would
                    be the normal way to say "red car", not {text('hon ce')}.
                </p>

                <p>
                    Note the perhaps unintuitive syntax for relative clauses where the predicate core is a
                    preposition:{' '}
                    {text('luk ki ni en')} "the place where you are."
                </p>

                <p>
                    A relative clause can also be a noun phrase in itself, with no head noun: {'ki mi bus'} "what I
                    found."
                </p>

                <h3>Noun phrase heads</h3>

                <p>
                    A noun phrase may be headed by any nominal root. Nouns, numerals, positionals, demonstratives,
                    and pronouns
                    are unambiguously nominal and can easily be a complete noun phrase on their own. Pronouns, in fact,
                    cannot take modifiers. On the other hand, the nominalizer {text('nes')} and the diminutive{' '}
                    {text('cek')} must have left-branching modifiers: {text('bik nes')} "size" and{' '}
                    {text('dus cek')} "town."
                </p>

                <p>
                    Any intransitive may also be the head of a noun phrase. Adjectives and intransitive verbs can
                    stand on their own as the head of a noun phrase, but like the nominalizer and diminutive, the
                    number suffix {text('men')} must have left-branching modifiers: {text('jen men')} "people".
                    The actual meaning of adjectives and intransitive verbs when they behave as nouns varies, with
                    the tendency being for adjectives to refer to some entity described by the adjective, and
                    intransitive verbs to refer to the concept of the verb or a single instance, but this is flexible
                    and may be up to interpretation depending on context. {text('mi xi be')} could mean "I like the
                    beautiful (thing)," "I like beautiful things," or "I like beauty," depending on context.
                    Similarly,{' '}
                    {text('mi kun bis')} is somewhat ambiguous in its meaning, most likely meaning "I am afraid of
                    travel," but perhaps meaning "I am afraid of travelers/guests." Ambiguity can always be easily
                    resolved by simply adding the nominalizer {text('nes')} on the end to form an abstract noun
                    (e.g., {text('be nes')} "beauty," {text('bis nes')} "traveling, tourism") or a noun root
                    like {text('jen')} "person" or {text('kos')} "thing" to form a concrete noun
                    (e.g., {text('be kos')} "beautiful thing," {text('bis jen')} "traveler, guest".)
                    Some intransitive roots have conventional meanings that may be their default interpretation as a
                    noun, e.g., {text('cai')} means "boil" as a predicate, but "tea" as a noun.
                </p>

                <p>
                    Transitives verbs may also be the head of a noun phrase, in a manner similar to intransitive verbs.
                    There are some few transitive verbs which have conventionalized meanings as a noun,
                    e.g., {text('pin')} means "pierce" as a verb, and "pin" or "thorn" as a noun. Other transitive
                    roots - that is, prepositions and the existential {text('yo')} - cannot be the head of a noun
                    phrase.
                </p>

                <h3>Possessives</h3>

                <p>
                    There are two ways to express possessives in Jaobon: as a left-branching modifier, filling the
                    same syntactic slot as a determiner (e.g., {text('ta jin')} "his money"), or in a relative
                    clause with the existential {text('yo')} (e.g., {text('jin ki ta yo')} "his money".)
                    Family members and body parts exclusively have left-branching possessors: {text('mi ma')}{' '}
                    "my mother," {text('mi yek')} "my eye."
                </p>

                <h3>Positionals</h3>

                <p>
                    Positionals are a class of words unknown to European languages, but common in languages of other
                    regions, including being ubiquitous in Mandarin. They basically refer to some location relative
                    to a noun, carrying much of the semantic information that would be carried by prepositions in
                    English, so that fewer prepositional distinctions can be made: {text('en kas den')} "in the
                    house" vs. {text('en kas bon')} "under the house."
                </p>

                <p>
                    As seen in the previous example sentences, positionals simply come after the nominal that they
                    denote a position relative to, with that nominal syntactically being a left-branching modifier
                    of the positional.
                </p>

                <h2>Non-indicative sentences</h2>

                <h3>Interrogatives</h3>

                <p>
                    Jaobon has some preference for wh-fronting. If there is an interrogative oblique like{' '}
                    {text('ke we')} "how" or {text('ke xas')} "when," it appears in the pre-subject position.
                    If an interrogative argument, like {text('ke')} "what," {text('ke jen')} "who", or{' '}
                    {text('ke ji (kos)')} "how many (things)," would be the object, there is a preference to
                    shift it to being the subject via a passive (e.g., {text('ke es co nis ni?')} "what did you
                    eat?") or a free relative clause (e.g., {text('ke es ki ni co?')} "what did you eat?").
                    This is not mandatory, though: {text('ni co ke?')} may be a less usual, though perhaps more
                    informal, way to ask "what did you eat?"
                </p>

                <h3>Imperatives and hortatives</h3>

                <p>
                    Jaobon imperatives lack an overt subject: {text('bus ta!')} "find it!"
                    Imperative clauses also cannot have a subordinating conjunction or aspect particles,
                    so that the predicate is often the first element of the
                    sentence. However, the adverb {text('no')} "not" is very normal in imperatives:{' '}
                    {text('no bus ta!')} "don't search for it!" and the adverbs {text("mas")} "more,"
                    {text('ye')} "also," and {text('jo')} (normally meaning "as soon as", but in imperatives
                    expressing urgency) are also permitted.
                </p>

                <p>
                    Imperatives never use the voice particle {text('as')}, but still use {text('es')} as expected.
                    That is, *{text('as bus ta!')} "find it!" and *{text('as lis!')} "get ready!" are not grammatical,
                    with simply {text('bus ta!')} and {text('lis!')} being correct, but {text('es puk jen!')}{' '}
                    "be a soldier!" and {text('es kan!')} "be seen!" are grammatical.
                </p>

                <p>
                    The tone of an imperative can be softened with a predicate {text('lai')} "come" or{' '}
                    {text('cin')} "politely request" before the main predicate: {text('lai bus ta!')} or{' '}
                    {text('cin bus ta!')} "please find it!"
                </p>

                <p>
                    Hortatives that include the speaker actually do have a subject {text('mi men')} "we" and
                    mandatorily include {text('lai')}: {text('ni lai bus ta!')} "let's find it!" Note that
                    such sentences can be read as plain indicative sentences as well - only context and tone of
                    voice clarifies which mood is intended.
                </p>

                <h2>Other topics</h2>

                <h3>Comparatives</h3>

                <p>
                    A comparative phrase in Jaobon uses the adverb {text('mas')} before the quality or action
                    being compared, with the object of comparison in a later predicate with the preposition{' '}
                    {text('de')}: {text('ni mas gao de ta')} "you're taller than him."
                </p>

                <p>
                    Comparatives with properties with verbal meanings compare frequency or intensity:{' '}
                    {text('mi mas les buk de ni')} "I read more books than you" or "I read books more often than you."
                </p>

                <h3>Comparative correlatives</h3>

                <p>
                    Phrases communicated in English with "the more... the more..." and Mandarin with "越... 越..."
                    are translated in Jaobon with an oblique clause {text('bes ki... mas...')} in a main clause
                    with the adverbs {text('jo mas')}: {text('bes ki mas men, jo mas hao')} "the more, the better."
                </p>

                <p>
                    The similar phrase structure in English "more and more..." and in Mandarin "越来越..." has a
                    completely different {text('pas xas jo mas')} equivalent in Jaobon:{' '}
                    {text('je xao jen pas xas jo mas gao')} "that child is getting taller and taller."
                </p>

                <h3>As ... as possible</h3>

                <p>
                    This adverbial concept is expressed in Lauvinko with an oblique phrase{' '}
                    {text('mas ... we ki ken')}: {text('cin mak je mas su we ki ken')} "please do it ASAP."
                </p>
            </>
        );
    }
}
