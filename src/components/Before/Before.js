import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import Quote from '../Quote/Quote';
import './Before.css';

function Before() {
    return(
        <section className='before'>
            <Header />
            <Paragraph last={true} title='Наука о динозаврах' text='Изучение динозавров — часть научной дисциплины, которая называется "палеонтология". Палеонтологи анализируют ископаемые останки растений и животных, чтобы лучше понимать эволюцию жизни на Земле и взаимодействие живых организмов друг с другом. Наука изучает два подтипа живых существ: позвоночные и беспозвоночные. Исследователи первого вида изучают ископаемых животных, которые обладали позвоночником или хордой (костным или хрящевым хребтом, поддерживающим тело). К ним относятся динозавры, рыбы, ящерицы, змеи, птицы. К беспозвоночным, которых изучают палеонтологи, относятся улитки, трилобиты, устрицы, моллюски, кальмары.' />
            <Paragraph title='Кто и когда открыл динозавров' text='Историки полагают, что люди находили скелеты динозавров еще в древности, 2–3 тыс. лет назад. Древние сочинители в Китае и античные историки в Европе воспринимали их как останки огромных драконов. Так из настоящих ископаемых родился один из самых популярных сказочных образов. В 1677 году натуралист и химик Роберт Плот во время раскопок обнаружил в Англии крупную бедренную кость, которую он приписал некому "гиганту". Спустя почти 150 лет, в 1815 году другой британский исследователь, оксфордский геолог Уильям Бакленд, изучил останки зубов, челюсти и других конечностей того же существа, что нашел Плот. В 1824 году Бакленд пришел к выводу, что они принадлежали крупной ящерице, которой он дал название "мегалозавр". Это слово произошло от двух греческих терминов — "мега" ("большой") и "завр" ("ящер").' />
            <Paragraph last={true} text='Первооткрыватель динозавров Уильям Бакленд отличался эксцентричностью. На лекциях он любил носиться по аудитории с черепом гиены в руках и кричать: "Что правит миром? Что правит миром?" По воспоминаниям студентов, правильным ответом был "желудок". Этой позиции Бакленд придерживался сам, обожая все пробовать на вкус. За свою жизнь он успел попробовать мясо крокодила, кенгуру и пантеры, а также слизняков, мух и червей. На одном из приемов ему продемонстрировали серебряный ящичек с небольшим предметом, напоминавшим пемзу. Ученый как обычно закинул его в рот и случайно проглотил. На самом деле это был фрагмент сердца Людовика XIV, легендарного правителя, который руководил Францией на протяжении 72 лет. Так Бакленд добавил к списку своих гастрономических достижений частичку королевского тела.' />
            <Paragraph title='Как изучают динозавров сегодня' text='Само слово "динозавр" изобрел не Бакленд. Этот термин придумал продолжатель его дела, один из первых палеонтологов Ричард Оуэн. Как и "мегалозавр", слово "динозавр" состоит из двух греческих частей: "дино" ("ужасный") и "завр" ("ящер").' />
            <Paragraph last={true} text='В основе современной палеонтологии лежит тот же принцип, что и 150 лет назад — поиск и изучение ископаемых останков. Однако благодаря новым технологиям этот процесс улучшился. Одним из прорывов стало использование компьютерной томографии. С помощью рентгеновских лучей можно построить 3D-модель как внутренней, так и внешней части любого объекта. Другие методы включают в себя анализ данных, 3D-печать и специальное сканирование.' />
            <Paragraph title='Когда жили динозавры и как они выглядели' text='Динозавры — это группа животных, которые появились между 240 и 230 млн лет назад и доминировали на Земле примерно 174 млн лет. За это время они превратились из существ размером с собаку или лошадь в самых крупных зверей, когда-либо существовавших на суше. Ученые утверждают, что некоторые хищные динозавры со временем уменьшились и превратились в птиц. В этом смысле вымерли только нелетающие динозавры. Самые древние окаменелости динозавров, возраст которых составляет примерно 231 млн лет, находят на северо-западе Аргентины.' />
            <Paragraph text='Уникальная анатомия динозавров отличает их от других групп животных. Они относятся к архозаврам — кладе (группа разных животных с общим предком), в которую из ныне существующих видов входят крокодилы и птицы. Архозавры появились около 252 млн лет назад. Со временем некоторые архозавры приспособились к вертикальной позе — ноги у них располагались не по бокам, а под телом. Стивен Брусатти в своей книге "Взлет и падение динозавров: новая история потерянного мира" писал: "Растянутая поза хороша для хладнокровных животных, которым не нужно двигаться очень быстро. Однако, если засунуть конечности под тело, открывается новый мир возможностей".' />
            <Paragraph quote={true} text='По мере эволюции некрупные динозавроморфы (группа, в которую входят динозавры и их более мелкие и примитивные предки), приобрели длинные хвосты, увеличенные мышцы ног и дополнительные бедренные кости. Все это позволяло им двигаться быстро и эффективно.' />
            <Quote quote='Некоторые динозавроморфы эволюционировали в динозавров.' />
            <Paragraph last={true} text='Некоторые динозавроморфы эволюционировали в динозавров. Различия между ними были невелики, но анатомия динозавров давала больше преимуществ: гибкие конечности, шейные позвонки, которые могли поддерживать более сильные мышцы, и тазобедренный сустав, пишет Брусатти. Вертикальная поза также освободила лапы, что позволило травоядным видам хвататься за ветки, а хищным — царапать и убивать добычу.' />
            <Paragraph quote={true} title='На какие виды делятся динозавры' text='Сейчас существуют примерно 1,5 тыс. научно описанных видов динозавров. Ежегодно добавляются около 50 ранее неизвестных видов. Все они относятся к одной из трех групп: птицетазовые, завроподоморфы и тероподы.' />
            <Quote quote='1,5 тыс. научно описанных видов.' />
            <Paragraph title='Когда и почему вымерли динозавры' text='В 1980 году была выдвинута гипотеза, что к вымиранию динозавров привело падение астероида около 66 млн лет назад. Сейчас она доминирует в науке. По предположениям ученых, астероид приземлился в районе современной Мексики. Большинство земноводных скорее всего погибли в течение нескольких часов или дней после столкновения из-за резкого повышения температуры. Это могло вызвать необратимые изменения климата, повысить содержание кислоты в атмосфере и изменить состав Мирового океана.' />
            <Paragraph text='Столкновение вызвало массовые разрушения, ударную волну, тепловой импульс, лесные пожары, цунами, извержения вулканов, смертоносные кислотные дожди и землетрясения. Пыль и грязь, поднятые астероидом, висели в воздухе. Бетси Крук из американской палеонтологической компании Paleo Solutions рассказывает: "Дождь из горячей пыли на несколько часов значительно поднял глобальную температуру и сварил заживо животных, которые были слишком велики, чтобы искать укрытие. Мелкие звери, которые спрятались под землей или под водой, в пещерах или в стволах крупных деревьев, возможно, смогли пережить этот резкий тепловой взрыв". Пыль и частицы остались в воздухе, блокируя солнечные лучи в течение нескольких лет. Это вызвало ядерную зиму, которая охладила планету и привела к гибели бесчисленных растений и животных.' />
            <Paragraph text='Вопрос о том, насколько хорошо жили динозавры до того, как астероид врезался в Землю, остается спорным. По данным немногочисленных исследований, около 70 млн лет назад среди динозавров уменьшалось разнообразие видов, многие вымирали. Однако эти научные работы опираются на неполные данные. Стивен Брусатти утверждает обратное: "Даже если разнообразие динозавров уменьшалось, многие виды могли бы возродиться, если бы не астероид. Динозавры жили на всех континентах, включая Антарктиду, и занимали разные ступени в различных экосистемах. Они пережили множество взлетов и падений за 150 млн лет эволюционной истории. Если бы массового вымирания не произошло, они бы и сегодня процветали".' />
        </section>
    );
}

export default Before;