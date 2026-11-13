/* All the words for the hub live in this one file; the pictures live in art.js.
   To add a book: copy a finished entry, change the slug and the text, and set status to "live".
   The slug must match the one used in art.js, where its 5 pictures are drawn. */

window.SITE = {
  name: { en: "Sikka Stories", hi: "सिक्का स्टोरीज़", mr: "सिक्का स्टोरीज" },
  /* Optional credit line shown in the footer. Leave empty ("") to hide it. */
  credit: { en: "Created by Shreyas Shinde, Mumbai", hi: "बनाने वाले: श्रेयस शिंदे, मुंबई", mr: "निर्मिती: श्रेयस शिंदे, मुंबई" },
  /* Optional feedback link, for example a Google Form address. Leave "" to hide the link. */
  feedback: ""
};

window.UI = {
  en: {
    heroBar: "Your hero",
    heroPick: "Pick your hero",
    heroSave: "Save",
    heroSkip: "Skip, start without a name",
    heroNote: "Saved on this phone only. Every book will use it. You can change it any time.",
    close: "Close",
    nextBook: "Next book",
    autoB: "Friend",
    autoG: "Friend",
    howT: "How it works",
    s1: "Type your name once",
    s2: "Read your own adventure",
    s3: "Take the quiz and sign your promise",
    aboutT: "Free for everyone",
    aboutP: "Short illustrated money stories for children, in English, Hindi and Marathi. No sign-up needed, no ads, nothing to pay. Type your name once and you are the hero of every book. Works on any phone, and every book can be printed.",
    all: "All",
    ready: "{n} ready to read",
    moreSoon: "More books are coming soon",
    more: "Read more books",
    pages: "12 pages",
    need: "Need",
    want: "Want",
    tru: "True",
    fls: "False",
    correct: "Correct!",
    tryagain: "Try again",
    score: "Score",
    fillT: "Fill in the blanks",
    bankT: "Word bank",
    sortT: "Need or Want?",
    tfT: "True or False?",
    thinkT: "Think it through",
    answers: "Answers",
    choose: "Choose",
    tagline: "Money lessons where you are the hero. Free for everyone.",
    heroTitle: "Who is the hero of this story?",
    heroSub: "That's you! Type your name and pick your look.",
    nameLabel: "Your name",
    boy: "Boy",
    girl: "Girl",
    start: "Start the story",
    needName: "Please type your name.",
    change: "Change hero",
    trail: "Your journey",
    starring: "Starring",
    promise: "My Money Promise",
    sign: "Signed",
    date: "Date",
    library: "Our books",
    read: "Read",
    soon: "Coming soon",
    minShort: "About {n} min",
    timeLine: "About {t} minutes: {s} to read, {q} for the quiz",
    print: "Save as PDF / Print",
    share: "Share on WhatsApp",
    back: "All books",
    cover: "Cover",
    remember: "Remember this",
    quiz: "Quiz time",
    answer: "Show answer",
    page: "Page",
    art: "Picture",
    disclaimer: "These books teach basic money ideas. They are not investment advice.",
    notfound: "Book not found.",
    lang: "Language",
    search: "Search books",
    noResults: "No book matches. Try another word.",
    orderNote: "Books go from easiest (1) to hardest (30).",
    startBook: "Start with book 1",
    continueBook: "Continue with book {n}",
    allDone: "You finished all {n} books!",
    stampsT: "Your stamps",
    stampEarned: "Stamp earned! You got every answer right.",
    stampDone: "Done",
    stampNote: "Stamps are saved on this phone only.",
    printWs: "Print worksheet only",
    skip: "Skip to content",
    aboutLink: "About and privacy",
    feedbackLink: "Send feedback",
    aboutAcct: ["Optional accounts, scores and prizes", "You never need an account. Every book and every game works as a guest, and a guest's name, stamps and best scores stay on the device. If you choose to make an account, you get a nickname made from fixed words (never your real name), a picture and a password. With an account we save which books you open and read to the end, how your quiz answers change, your game scores and your tokens, so that your progress is kept and you can join the weekly competitions. We never ask for or save a real name, email, phone number, photo or location. Passwords are stored scrambled and cannot be read, even by us. Other players see only your nickname, picture and scores on the leaderboard. The site owner can see each nickname's reading and quiz activity, to help children learn, and does not share it or sell it, and there are no ads. This data is kept with our database service (Supabase), so using the Play page or an account contacts that service. A child's account should be made with a parent's or teacher's agreement, and you can delete your account and everything saved with it at any time on the My account page."],
    about: {"title": "About Sikka Stories", "items": [["Who made this", "Sikka Stories was created by Shreyas Shinde, a student in Mumbai, as a free project so that young readers can understand how money works."], ["What it is", "Sikka Stories is a free library of short illustrated money stories for children, in English, Hindi and Marathi. In every story you are the hero. There are 30 stories, so you can learn the basics of money in one month by reading one a day. Each book ends with a quiz and a promise, and can be printed on A5 paper."], ["Your privacy", "As a guest there is no sign-up, no ads, no tracking and no cookies. The name you type and the hero look you choose are saved only on your own phone or computer. They are never sent to us or to anyone else, and a shared link never contains your name. Your stamps are saved the same way. This site loads nothing from other companies, and even the fonts come from the site itself. Like any website, the service that hosts it (GitHub Pages) may keep ordinary server records, and we add no tracking of our own. Only if you tap Share on WhatsApp does WhatsApp open with a link. Clearing your browser data removes your name and stamps."], ["About the numbers", "The numbers in the stories, such as prices, interest rates and exchange rates, are examples to keep the maths easy. Real rates and rules change. These books teach basic ideas and are not investment, tax or legal advice. For a real decision, ask a trusted grown-up or your bank."], ["For teachers and parents", "Every book prints as 12 A5 pages, with an answer key on the last page. Choose Print worksheet only to print just the quiz pages. The books go from easiest (1) to hardest (30)."], ["Found a mistake?", "Please tell us. Every correction helps the next reader."]]}
  },
  hi: {
    heroBar: "तुम्हारा हीरो",
    heroPick: "अपना हीरो चुनो",
    heroSave: "सहेजें",
    heroSkip: "छोड़ो, बिना नाम के शुरू करो",
    heroNote: "सिर्फ़ इसी फ़ोन में सहेजा जाएगा। हर किताब यही नाम इस्तेमाल करेगी। जब चाहो बदल सकते हो।",
    close: "बंद करें",
    nextBook: "अगली किताब",
    autoB: "दोस्त",
    autoG: "सहेली",
    howT: "यह कैसे काम करता है",
    s1: "अपना नाम एक बार लिखो",
    s2: "अपनी खुद की कहानी पढ़ो",
    s3: "क्विज़ करो और अपना वादा लिखो",
    aboutT: "सबके लिए मुफ़्त",
    aboutP: "बच्चों के लिए चित्रों वाली छोटी पैसों की कहानियाँ, अंग्रेज़ी, हिंदी और मराठी में। साइन-अप ज़रूरी नहीं, न विज्ञापन, कोई पैसा नहीं। किसी भी फ़ोन पर चलती हैं और हर किताब प्रिंट भी हो सकती है।",
    all: "सभी",
    ready: "{n} पढ़ने के लिए तैयार",
    moreSoon: "और किताबें जल्द आ रही हैं",
    more: "और किताबें पढ़ें",
    pages: "12 पेज",
    need: "ज़रूरत",
    want: "चाहत",
    tru: "सही",
    fls: "गलत",
    correct: "सही जवाब!",
    tryagain: "फिर कोशिश करो",
    score: "स्कोर",
    fillT: "खाली जगह भरो",
    bankT: "शब्द-सूची",
    sortT: "ज़रूरत या चाहत?",
    tfT: "सही या गलत?",
    thinkT: "सोचकर बताओ",
    answers: "उत्तर",
    choose: "चुनो",
    tagline: "पैसों के सबक, जिनमें हीरो तुम हो। सबके लिए मुफ़्त।",
    heroTitle: "इस कहानी का हीरो कौन है?",
    heroSub: "वो तुम हो! अपना नाम लिखो और अपना रूप चुनो।",
    nameLabel: "तुम्हारा नाम",
    boy: "लड़का",
    girl: "लड़की",
    start: "कहानी शुरू करें",
    needName: "कृपया अपना नाम लिखें।",
    change: "हीरो बदलें",
    trail: "तुम्हारा सफ़र",
    starring: "मुख्य किरदार",
    promise: "मेरा पैसों का वादा",
    sign: "हस्ताक्षर",
    date: "तारीख",
    library: "हमारी किताबें",
    read: "पढ़ें",
    soon: "जल्द आ रही है",
    minShort: "लगभग {n} मिनट",
    timeLine: "लगभग {t} मिनट: {s} पढ़ने में, {q} क्विज़ में",
    print: "PDF सहेजें / प्रिंट करें",
    share: "WhatsApp पर भेजें",
    back: "सभी किताबें",
    cover: "कवर",
    remember: "याद रखें",
    quiz: "क्विज़ का समय",
    answer: "उत्तर देखें",
    page: "पेज",
    art: "चित्र",
    disclaimer: "ये किताबें पैसों की बुनियादी बातें सिखाती हैं। यह निवेश की सलाह नहीं है।",
    notfound: "किताब नहीं मिली।",
    lang: "भाषा",
    search: "किताबें खोजें",
    noResults: "कोई किताब नहीं मिली। दूसरा शब्द आज़माओ।",
    orderNote: "किताबें आसान (1) से कठिन (30) के क्रम में हैं।",
    startBook: "किताब 1 से शुरू करो",
    continueBook: "किताब {n} से आगे बढ़ो",
    allDone: "तुमने सभी {n} किताबें पूरी कर लीं!",
    stampsT: "तुम्हारे स्टैम्प",
    stampEarned: "स्टैम्प मिल गया! तुमने हर जवाब सही दिया।",
    stampDone: "पूरी",
    stampNote: "स्टैम्प सिर्फ़ इसी फ़ोन में सहेजे जाते हैं।",
    printWs: "सिर्फ़ वर्कशीट प्रिंट करें",
    skip: "सीधे सामग्री पर जाएँ",
    aboutLink: "परिचय और गोपनीयता",
    feedbackLink: "सुझाव भेजें",
    aboutAcct: ["वैकल्पिक खाते, स्कोर और इनाम", "खाता कभी ज़रूरी नहीं है। हर किताब और हर खेल मेहमान बनकर भी चलता है, और मेहमान का नाम, स्टैम्प और सबसे अच्छे स्कोर उसी के डिवाइस में रहते हैं। अगर तुम खाता बनाना चुनो, तो तुम्हें तय शब्दों से बना उपनाम (कभी असली नाम नहीं), एक तस्वीर और एक पासवर्ड मिलता है। खाते के साथ हम यह सहेजते हैं कि तुमने कौन-सी किताबें खोलीं और अंत तक पढ़ीं, क्विज़ के जवाब कैसे बदले, खेल के स्कोर और टोकन, ताकि तुम्हारी प्रगति बनी रहे और तुम हर हफ़्ते की प्रतियोगिताओं में भाग ले सको। हम असली नाम, ईमेल, फ़ोन नंबर, फ़ोटो या लोकेशन न माँगते हैं, न सहेजते हैं। पासवर्ड कूटबद्ध रूप में रखे जाते हैं और हम भी उन्हें पढ़ नहीं सकते। लीडरबोर्ड पर दूसरे खिलाड़ी सिर्फ़ तुम्हारा उपनाम, तस्वीर और स्कोर देखते हैं। साइट के मालिक बच्चों की सीखने में मदद के लिए हर उपनाम की पढ़ाई और क्विज़ की गतिविधि देख सकते हैं; इसे न किसी को दिया जाता है, न बेचा जाता है, और कोई विज्ञापन नहीं हैं। यह डेटा हमारी डेटाबेस सेवा (Supabase) में रखा जाता है, इसलिए खेल पेज या खाते का इस्तेमाल करने पर उस सेवा से संपर्क होता है। बच्चे का खाता माता-पिता या शिक्षक की सहमति से बनना चाहिए, और तुम कभी भी 'मेरा खाता' पेज पर अपना खाता और उसके साथ सहेजा सब कुछ हटा सकते हो।"],
    about: {"title": "सिक्का स्टोरीज़ के बारे में", "items": [["इसे किसने बनाया", "सिक्का स्टोरीज़ को मुंबई के विद्यार्थी श्रेयस शिंदे ने बनाया है। यह एक मुफ़्त प्रोजेक्ट है, ताकि युवा पाठक समझ सकें कि पैसा कैसे काम करता है।"], ["यह क्या है", "सिक्का स्टोरीज़ बच्चों के लिए पैसों की छोटी, चित्रों वाली कहानियों का मुफ़्त संग्रह है, अंग्रेज़ी, हिन्दी और मराठी में। हर कहानी में तुम हीरो हो। कुल 30 कहानियाँ हैं, इसलिए रोज़ एक पढ़कर तुम एक महीने में पैसों की बुनियादी बातें सीख सकते हो। हर किताब के अंत में एक क्विज़ और एक वादा है, और उसे A5 काग़ज़ पर छापा जा सकता है।"], ["तुम्हारी गोपनीयता", "मेहमान के तौर पर पढ़ने में कोई साइन-अप नहीं, कोई विज्ञापन नहीं, कोई ट्रैकिंग नहीं और कोई कुकी नहीं। तुम्हारा लिखा नाम और चुना हुआ हीरो का रूप सिर्फ़ तुम्हारे अपने फ़ोन या कंप्यूटर में रहता है। वह हमें या किसी और को कभी नहीं भेजा जाता, और शेयर किए गए लिंक में तुम्हारा नाम नहीं होता। तुम्हारे स्टैम्प भी इसी तरह सिर्फ़ तुम्हारे डिवाइस में रहते हैं। यह साइट दूसरी कंपनियों से कुछ भी लोड नहीं करती, फ़ॉन्ट भी इसी साइट से आते हैं। किसी भी वेबसाइट की तरह, इसे चलाने वाली सेवा (GitHub Pages) सामान्य सर्वर रिकॉर्ड रख सकती है, और हम अपनी तरफ़ से कोई ट्रैकिंग नहीं जोड़ते। WhatsApp पर शेयर का बटन दबाने पर ही WhatsApp एक लिंक के साथ खुलता है। ब्राउज़र का डेटा मिटाने पर नाम और स्टैम्प भी मिट जाते हैं।"], ["अंकों के बारे में", "कहानियों में दिए गए अंक, जैसे दाम, ब्याज दरें और विनिमय दरें, हिसाब आसान रखने के लिए उदाहरण हैं। असली दरें और नियम बदलते रहते हैं। ये किताबें बुनियादी बातें सिखाती हैं, निवेश, कर या क़ानूनी सलाह नहीं देतीं। असली फ़ैसले के लिए किसी भरोसेमंद बड़े या अपने बैंक से पूछो।"], ["शिक्षकों और माता-पिता के लिए", "हर किताब 12 A5 पन्नों में छपती है, और आख़िरी पन्ने पर उत्तर-कुंजी है। सिर्फ़ क्विज़ के पन्ने छापने के लिए \"सिर्फ़ वर्कशीट प्रिंट करें\" चुनें। किताबें आसान (1) से कठिन (30) के क्रम में हैं।"], ["कोई ग़लती दिखी?", "कृपया हमें बताएँ। हर सुधार अगले पाठक के काम आता है।"]]}
  },
  mr: {
    heroBar: "तुझा हिरो",
    heroPick: "तुझा हिरो निवड",
    heroSave: "जतन करा",
    heroSkip: "नको, नावाशिवाय सुरू करा",
    heroNote: "फक्त याच फोनमध्ये जतन होईल. प्रत्येक पुस्तक हेच नाव वापरेल. हवं तेव्हा बदलता येईल.",
    close: "बंद करा",
    nextBook: "पुढचं पुस्तक",
    autoB: "मित्र",
    autoG: "मैत्रीण",
    howT: "हे कसं चालतं",
    s1: "तुझं नाव एकदाच लिही",
    s2: "तुझी स्वतःची गोष्ट वाच",
    s3: "प्रश्नमंजुषा सोडव आणि तुझं वचन लिही",
    aboutT: "सर्वांसाठी मोफत",
    aboutP: "मुलांसाठी चित्रांसह छोट्या पैशांच्या गोष्टी, इंग्रजी, हिंदी आणि मराठीत. साइन-अप आवश्यक नाही, जाहिराती नाहीत, पैसे नाहीत. कोणत्याही फोनवर चालतात आणि प्रत्येक पुस्तक प्रिंटही करता येतं.",
    all: "सर्व",
    ready: "{n} वाचायला तयार",
    moreSoon: "आणखी पुस्तके लवकरच येत आहेत",
    more: "आणखी पुस्तके वाच",
    pages: "१२ पाने",
    need: "गरज",
    want: "इच्छा",
    tru: "बरोबर",
    fls: "चूक",
    correct: "बरोबर उत्तर!",
    tryagain: "पुन्हा प्रयत्न कर",
    score: "गुण",
    fillT: "रिकाम्या जागा भरा",
    bankT: "शब्दांची यादी",
    sortT: "गरज की इच्छा?",
    tfT: "बरोबर की चूक?",
    thinkT: "विचार करून सांग",
    answers: "उत्तरे",
    choose: "निवडा",
    tagline: "पैशांचे धडे, ज्यात हिरो तू आहेस. सर्वांसाठी मोफत.",
    heroTitle: "या गोष्टीचा हिरो कोण आहे?",
    heroSub: "तो तू आहेस! तुझं नाव लिही आणि तुझा लूक निवड.",
    nameLabel: "तुझं नाव",
    boy: "मुलगा",
    girl: "मुलगी",
    start: "गोष्ट सुरू करा",
    needName: "तुझं नाव लिही.",
    change: "हिरो बदला",
    trail: "तुझा प्रवास",
    starring: "मुख्य पात्र",
    promise: "माझं पैशांचं वचन",
    sign: "स्वाक्षरी",
    date: "तारीख",
    library: "आमची पुस्तके",
    read: "वाचा",
    soon: "लवकरच येत आहे",
    minShort: "सुमारे {n} मिनिटे",
    timeLine: "सुमारे {t} मिनिटे: {s} वाचायला, {q} क्विझसाठी",
    print: "PDF जतन करा / प्रिंट करा",
    share: "WhatsApp वर पाठवा",
    back: "सर्व पुस्तके",
    cover: "मुखपृष्ठ",
    remember: "लक्षात ठेवा",
    quiz: "प्रश्नमंजुषा",
    answer: "उत्तर पाहा",
    page: "पान",
    art: "चित्र",
    disclaimer: "ही पुस्तके पैशांच्या मूलभूत गोष्टी शिकवतात. हा गुंतवणुकीचा सल्ला नाही.",
    notfound: "पुस्तक सापडले नाही.",
    lang: "भाषा",
    search: "पुस्तके शोधा",
    noResults: "एकही पुस्तक सापडलं नाही. दुसरा शब्द वापरून बघ.",
    orderNote: "पुस्तके सोप्या (1) पासून कठीण (30) पर्यंतच्या क्रमाने आहेत.",
    startBook: "पुस्तक 1 पासून सुरू कर",
    continueBook: "पुस्तक {n} पासून पुढे चल",
    allDone: "तू सगळी {n} पुस्तकं पूर्ण केलीस!",
    stampsT: "तुझे स्टॅम्प",
    stampEarned: "स्टॅम्प मिळाला! तू प्रत्येक उत्तर बरोबर दिलंस.",
    stampDone: "पूर्ण",
    stampNote: "स्टॅम्प फक्त याच फोनमध्ये जतन केले जातात.",
    printWs: "फक्त वर्कशीट प्रिंट करा",
    skip: "थेट मजकुराकडे जा",
    aboutLink: "परिचय आणि गोपनीयता",
    feedbackLink: "अभिप्राय पाठवा",
    aboutAcct: ["ऐच्छिक खाती, गुण आणि बक्षिसं", "खात्याची गरज कधीच नसते. प्रत्येक पुस्तक आणि प्रत्येक खेळ पाहुणा म्हणूनही चालतो, आणि पाहुण्याचं नाव, स्टॅम्प आणि सर्वोत्तम गुण त्याच्याच डिव्हाइसवर राहतात. तू खातं बनवायचं ठरवलंस, तर तुला ठरावीक शब्दांपासून बनलेलं टोपणनाव (खरं नाव कधीच नाही), एक चित्र आणि एक पासवर्ड मिळतो. खात्यासोबत आम्ही जतन करतो: तू कोणती पुस्तकं उघडलीस आणि शेवटपर्यंत वाचलीस, क्विझची उत्तरं कशी बदलली, खेळांचे गुण आणि टोकन, म्हणजे तुझी प्रगती राहील आणि तू दर आठवड्याच्या स्पर्धांत भाग घेऊ शकशील. आम्ही खरं नाव, ईमेल, फोन नंबर, फोटो किंवा ठिकाण मागत नाही आणि जतनही करत नाही. पासवर्ड कूटबद्ध स्वरूपात ठेवले जातात आणि आम्हालाही ते वाचता येत नाहीत. लीडरबोर्डवर इतर खेळाडूंना फक्त तुझं टोपणनाव, चित्र आणि गुण दिसतात. मुलांना शिकण्यात मदत व्हावी म्हणून साइटचे मालक प्रत्येक टोपणनावाचं वाचन आणि क्विझमधली हालचाल पाहू शकतात; ती कोणाला दिली जात नाही, विकली जात नाही, आणि जाहिराती नाहीत. हा डेटा आमच्या डेटाबेस सेवेत (Supabase) ठेवला जातो, म्हणून खेळ पान किंवा खातं वापरताना त्या सेवेशी संपर्क होतो. मुलाचं खातं पालक किंवा शिक्षकांच्या संमतीने बनवावं, आणि तू कधीही 'माझं खातं' पानावर तुझं खातं आणि त्यासोबत जतन केलेलं सगळं हटवू शकतोस."],
    about: {"title": "सिक्का स्टोरीज बद्दल", "items": [["हे कोणी बनवलं", "सिक्का स्टोरीज ही मुंबईतील विद्यार्थी श्रेयस शिंदे याची निर्मिती आहे. तरुण वाचकांना पैसा कसा चालतो ते समजावं, म्हणून हा मोफत प्रकल्प आहे."], ["हे काय आहे", "सिक्का स्टोरीज हा मुलांसाठी पैशांच्या छोट्या, चित्रांच्या गोष्टींचा मोफत संग्रह आहे, इंग्रजी, हिन्दी आणि मराठीत. प्रत्येक गोष्टीत तू हिरो आहेस. एकूण 30 गोष्टी आहेत, त्यामुळे रोज एक वाचून तू एका महिन्यात पैशांच्या मूलभूत गोष्टी शिकू शकतोस. प्रत्येक पुस्तकाच्या शेवटी एक क्विझ आणि एक वचन आहे, आणि ते A5 कागदावर छापता येतं."], ["तुझी गोपनीयता", "पाहुणा म्हणून वाचताना साइन-अप नाही, जाहिराती नाहीत, ट्रॅकिंग नाही आणि कुकीज नाहीत. तू लिहिलेलं नाव आणि निवडलेला हिरोचा लुक फक्त तुझ्या स्वतःच्या फोनमध्ये किंवा कॉम्प्युटरमध्ये राहतो. तो आम्हाला किंवा इतर कोणालाही कधीच पाठवला जात नाही, आणि शेअर केलेल्या लिंकमध्ये तुझं नाव नसतं. तुझे स्टॅम्पही अशाच प्रकारे फक्त तुझ्या डिव्हाइसमध्ये राहतात. ही साइट इतर कंपन्यांकडून काहीही लोड करत नाही, फॉन्टसुद्धा याच साइटवरून येतात. कोणत्याही वेबसाइटप्रमाणे, ती चालवणारी सेवा (GitHub Pages) साधे सर्व्हर रेकॉर्ड ठेवू शकते, आणि आम्ही स्वतःचं कोणतंही ट्रॅकिंग जोडत नाही. WhatsApp वर शेअर बटण दाबलं तेव्हाच WhatsApp एका लिंकसह उघडतं. ब्राउझरचा डेटा पुसला की नाव आणि स्टॅम्पही पुसले जातात."], ["आकड्यांबद्दल", "गोष्टींमधले आकडे, जसे की किमती, व्याजदर आणि विनिमय दर, हिशोब सोपा ठेवण्यासाठी उदाहरणं आहेत. खरे दर आणि नियम बदलत असतात. ही पुस्तके मूलभूत गोष्टी शिकवतात, गुंतवणूक, कर किंवा कायदेशीर सल्ला देत नाहीत. खऱ्या निर्णयासाठी एखाद्या विश्वासू मोठ्या व्यक्तीला किंवा तुझ्या बँकेला विचार."], ["शिक्षक आणि पालकांसाठी", "प्रत्येक पुस्तक 12 A5 पानांत छापलं जातं, आणि शेवटच्या पानावर उत्तरसूची आहे. फक्त क्विझची पानं छापण्यासाठी \"फक्त वर्कशीट प्रिंट करा\" निवडा. पुस्तके सोप्या (1) पासून कठीण (30) पर्यंतच्या क्रमाने आहेत."], ["चूक सापडली?", "कृपया आम्हाला सांगा. प्रत्येक दुरुस्ती पुढच्या वाचकाच्या उपयोगी पडते."]]}
  }
};

window.BOOKS = [
  {
    "slug": "money-swap",
    "status": "live",
    "color": "#ffd6a5",
    "title": {
      "en": "{name} and the Great Swap",
      "hi": "{name} और बड़ी अदला-बदली",
      "mr": "{name} आणि मोठी अदलाबदल"
    },
    "cardTitle": {
      "en": "The Great Swap",
      "hi": "बड़ी अदला-बदली",
      "mr": "मोठी अदलाबदल"
    },
    "subtitle": {
      "en": "Why do we need money?",
      "hi": "हमें पैसे की ज़रूरत क्यों है?",
      "mr": "आपल्याला पैसा का हवा?"
    },
    "topic": {
      "en": "What is money",
      "hi": "पैसा क्या है",
      "mr": "पैसा म्हणजे काय"
    },
    "stops": {
      "en": [
        "The Swap",
        "The Long Chain",
        "Price Tags",
        "Coin in Hand"
      ],
      "hi": [
        "अदला-बदली",
        "लंबी कड़ी",
        "दाम के टैग",
        "हाथ में सिक्का"
      ],
      "mr": [
        "अदलाबदल",
        "लांब साखळी",
        "किमतीचे टॅग",
        "हातात नाणं"
      ]
    },
    "scenes": [
      "You hold out a football to Kaka while your thought bubble shows bread, and Kaka's bubble shows a football with a red cross.",
      "A football, a sack of wheat and a loaf are joined by arrows while a big clock shows the morning slipping away.",
      "A loaf, a sack and a football on a table each wear a price tag while you hold up a shiny coin in wonder.",
      "You hand a coin to Kaka and a warm loaf comes back to you while sparkles shine around."
    ],
    "story": {
      "en": [
        "It was a sunny market day. You had a football you no longer needed and a very empty tummy. You walked up to Kaka's shop and offered the football for a loaf of bread. Kaka smiled sadly. \"I cannot use a football, {name}. I need flour and wood for my oven.\" Gullu rolled closer. \"Long ago, there was no money at all. People swapped things directly. That is called barter.\"",
        "You tried anyway. The farmer wanted a football for a sack of wheat, and Kaka wanted wheat for a loaf of bread. By the time you finished, the whole morning was gone and your feet ached. \"See the trouble?\" said Gullu. \"In barter, you need someone who wants what you have and has what you want. And nobody agrees how many loaves a football is worth.\"",
        "So people agreed on something that everybody accepts: money. Kaka wrote prices on little tags: bread 10 rupees, wheat 40 rupees, football 100 rupees. \"Money does three jobs,\" said Gullu. \"One: everyone accepts it, so you stop hunting for swaps. Two: prices measure value, so you can compare a loaf with a sack. Three: you can keep it for later.\"",
        "A friend wanted your football and paid 100 rupees. You gave Kaka a 10-rupee coin and got your warm bread at once. Ninety rupees stayed safely with you for tomorrow. \"Money works because we all trust it,\" said Gullu. \"Coins, notes and digital money on a phone all do the same three jobs.\""
      ],
      "hi": [
        "धूप वाले बाज़ार के एक दिन तुम्हारे पास एक फ़ुटबॉल था जो तुम्हें अब नहीं चाहिए था, और पेट बिल्कुल ख़ाली था। तुम काका की दुकान पर पहुँच[[े|ीं]]। तुमने फ़ुटबॉल के बदले एक डबलरोटी माँगी। काका उदास होकर मुस्कुराए। \"मैं फ़ुटबॉल का क्या करूँगा, {name}? मुझे अपने तंदूर के लिए आटा और लकड़ी चाहिए।\" गुल्लू पास लुढ़क आया। \"बहुत पहले पैसा था ही नहीं। लोग चीज़ें सीधे बदल लेते थे। इसे वस्तु-विनिमय कहते हैं।\"",
        "फिर भी तुमने कोशिश की। किसान को गेहूँ की एक बोरी के बदले फ़ुटबॉल चाहिए था, और काका को डबलरोटी के बदले गेहूँ। जब तक काम पूरा हुआ, सारी सुबह बीत चुकी थी और पैर दुखने लगे थे। \"देखी परेशानी?\" गुल्लू बोला। \"वस्तु-विनिमय में तुम्हें ऐसा आदमी चाहिए जो वही चाहे जो तुम्हारे पास है और वही दे जो तुम्हें चाहिए। और एक फ़ुटबॉल कितनी डबलरोटियों के बराबर है, इस पर कोई सहमत नहीं होता।\"",
        "तब लोगों ने ऐसी चीज़ पर सहमति बनाई जिसे सब मानें: पैसा। काका ने छोटे टैग पर दाम लिखे: डबलरोटी 10 रुपये, गेहूँ 40 रुपये, फ़ुटबॉल 100 रुपये। \"पैसा तीन काम करता है,\" गुल्लू बोला। \"एक: सब उसे मानते हैं, इसलिए अदला-बदली ढूँढ़ना बंद। दो: दाम चीज़ों की क़ीमत नापते हैं, इसलिए तुम डबलरोटी और बोरी की तुलना कर सकते हो। तीन: उसे आगे के लिए बचाकर रखा जा सकता है।\"",
        "एक दोस्त को तुम्हारा फ़ुटबॉल चाहिए था और उसने 100 रुपये दिए। तुमने काका को 10 रुपये का सिक्का दिया और तुरंत गरम डबलरोटी पा ली। नब्बे रुपये कल के लिए तुम्हारे पास सुरक्षित रहे। \"पैसा इसलिए चलता है क्योंकि हम सब उस पर भरोसा करते हैं,\" गुल्लू बोला। \"सिक्के, नोट और फ़ोन पर डिजिटल पैसा, सब यही तीन काम करते हैं।\""
      ],
      "mr": [
        "बाजाराचा एक सूर्यप्रकाशाचा दिवस होता. तुझ्याकडे एक फुटबॉल होता जो तुला आता नको होता, आणि पोट अगदी रिकामं होतं. तू काकांच्या दुकानात पोहोचल[[ास|ीस]]. तू फुटबॉलच्या बदल्यात एक पाव मागितलास. काका उदासपणे हसले. \"मी फुटबॉलचं काय करू, {name}? मला माझ्या भट्टीसाठी पीठ आणि लाकूड हवं.\" गल्लू जवळ घरंगळत आला. \"फार पूर्वी पैसाच नव्हता. लोक वस्तू थेट बदलून घ्यायचे. याला वस्तुविनिमय म्हणतात.\"",
        "तरीही तू प्रयत्न केलास. शेतकऱ्याला गव्हाच्या एका पोत्याबदल्यात फुटबॉल हवा होता, आणि काकांना पावाबदल्यात गहू. काम संपेपर्यंत सारी सकाळ गेली होती आणि पाय दुखू लागले होते. \"बघितलंस त्रास?\" गल्लू म्हणाला. \"वस्तुविनिमयात तुला अशी व्यक्ती हवी जिला तुझ्याकडचं हवं आहे आणि जिच्याकडे तुला हवं ते आहे. आणि एका फुटबॉलचे किती पाव, यावर कोणाचंच एकमत होत नाही.\"",
        "मग लोकांनी अशा गोष्टीवर एकमत केलं जी सगळे मानतात: पैसा. काकांनी छोट्या टॅगवर किमती लिहिल्या: पाव 10 रुपये, गहू 40 रुपये, फुटबॉल 100 रुपये. \"पैसा तीन कामं करतो,\" गल्लू म्हणाला. \"एक: सगळे तो स्वीकारतात, म्हणून अदलाबदल शोधायची गरज नाही. दोन: किमती वस्तूंचं मोल मोजतात, म्हणून तू पाव आणि पोत्याची तुलना करू शकतोस. तीन: तो पुढच्या काळासाठी जपून ठेवता येतो.\"",
        "एका मित्राला तुझा फुटबॉल हवा होता आणि त्याने 100 रुपये दिले. तू काकांना 10 रुपयांचं नाणं दिलंस आणि लगेच गरम पाव मिळवलास. नव्वद रुपये उद्यासाठी सुरक्षित तुझ्याकडे राहिले. \"पैसा चालतो कारण आपण सगळे त्यावर विश्वास ठेवतो,\" गल्लू म्हणाला. \"नाणी, नोटा आणि फोनवरचा डिजिटल पैसा, सगळे हीच तीन कामं करतात.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Barter means swapping things directly. It works only when each person wants what the other has.",
          "Money is accepted by everyone, so you do not have to hunt for a swap.",
          "Prices measure value, so you can compare a football with a loaf of bread.",
          "Money can be kept for later, so you can buy when you need something."
        ],
        "fill": {
          "bank": [
            "barter",
            "money",
            "Prices",
            "later",
            "swap",
            "value"
          ],
          "items": [
            [
              "Trading one thing directly for another, without money, is called @@.",
              "barter"
            ],
            [
              "Something everyone accepts in exchange for goods is @@.",
              "money"
            ],
            [
              "@@ show how much something is worth in money.",
              "Prices"
            ],
            [
              "Money can be kept and used @@.",
              "later"
            ],
            [
              "In barter, you must find someone who wants to @@ with you.",
              "swap"
            ]
          ]
        },
        "sortTitle": "Barter or money?",
        "sortOpts": [
          {
            "k": "barter",
            "t": "Barter"
          },
          {
            "k": "money",
            "t": "Money"
          }
        ],
        "sort": [
          {
            "icon": "football",
            "label": "Swapping a football for a loaf of bread",
            "a": "barter"
          },
          {
            "icon": "coin",
            "label": "Paying a coin for a loaf of bread",
            "a": "money"
          },
          {
            "icon": "magnifier",
            "label": "Finding someone who wants exactly what you have",
            "a": "barter"
          },
          {
            "icon": "tag",
            "label": "A price tag that lets you compare things",
            "a": "money"
          },
          {
            "icon": "jar",
            "label": "Keeping some coins for tomorrow",
            "a": "money"
          }
        ],
        "tf": [
          {
            "q": "Barter is easy because everyone wants the same things.",
            "a": false
          },
          {
            "q": "Prices help us compare different things.",
            "a": true
          },
          {
            "q": "Money can be saved for later use.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A loaf costs 10 rupees. How many loaves can you buy with 50 rupees?",
            "opts": [
              "5",
              "10",
              "50"
            ],
            "a": 0
          },
          {
            "q": "A sack of wheat costs 40 rupees and a loaf costs 10 rupees. A sack is worth how many loaves?",
            "opts": [
              "4",
              "10",
              "40"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to compare prices before I swap or spend, to keep some money for later, and to remember that money works because we all trust it."
      },
      "hi": {
        "remember": [
          "वस्तु-विनिमय यानी चीज़ों की सीधी अदला-बदली। यह तभी चलता है जब दोनों को वही चाहिए जो दूसरे के पास है।",
          "पैसा सब मानते हैं, इसलिए अदला-बदली ढूँढ़नी नहीं पड़ती।",
          "दाम चीज़ों की क़ीमत नापते हैं, इसलिए तुम फ़ुटबॉल और डबलरोटी की तुलना कर सकते हो।",
          "पैसे को आगे के लिए बचाकर रखा जा सकता है, ताकि ज़रूरत पर ख़रीद सको।"
        ],
        "fill": {
          "bank": [
            "वस्तु-विनिमय",
            "पैसा",
            "दाम",
            "बाद में",
            "अदला-बदली",
            "क़ीमत"
          ],
          "items": [
            [
              "चीज़ों को पैसे के बिना सीधे बदलना @@ कहलाता है।",
              "वस्तु-विनिमय"
            ],
            [
              "जिसे सब लोग बदले में मानते हैं, वह @@ है।",
              "पैसा"
            ],
            [
              "@@ बताते हैं कि कोई चीज़ पैसों में कितनी क़ीमती है।",
              "दाम"
            ],
            [
              "पैसे को बचाकर @@ भी इस्तेमाल किया जा सकता है।",
              "बाद में"
            ],
            [
              "वस्तु-विनिमय में ऐसा आदमी खोजना पड़ता है जो तुमसे @@ करे।",
              "अदला-बदली"
            ]
          ]
        },
        "sortTitle": "वस्तु-विनिमय या पैसा?",
        "sortOpts": [
          {
            "k": "barter",
            "t": "वस्तु-विनिमय"
          },
          {
            "k": "money",
            "t": "पैसा"
          }
        ],
        "sort": [
          {
            "icon": "football",
            "label": "फ़ुटबॉल देकर डबलरोटी बदलना",
            "a": "barter"
          },
          {
            "icon": "coin",
            "label": "डबलरोटी के लिए एक सिक्का देना",
            "a": "money"
          },
          {
            "icon": "magnifier",
            "label": "ऐसा आदमी ढूँढ़ना जिसे ठीक वही चाहिए जो तुम्हारे पास है",
            "a": "barter"
          },
          {
            "icon": "tag",
            "label": "दाम का टैग जिससे चीज़ों की तुलना हो सके",
            "a": "money"
          },
          {
            "icon": "jar",
            "label": "कल के लिए कुछ सिक्के बचाकर रखना",
            "a": "money"
          }
        ],
        "tf": [
          {
            "q": "वस्तु-विनिमय आसान है क्योंकि सबको एक ही चीज़ें चाहिए होती हैं।",
            "a": false
          },
          {
            "q": "दाम से अलग-अलग चीज़ों की तुलना करना आसान होता है।",
            "a": true
          },
          {
            "q": "पैसे को बाद में इस्तेमाल के लिए बचाया जा सकता है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एक डबलरोटी 10 रुपये की है। 50 रुपये में कितनी डबलरोटियाँ आएँगी?",
            "opts": [
              "5",
              "10",
              "50"
            ],
            "a": 0
          },
          {
            "q": "गेहूँ की एक बोरी 40 रुपये की है और एक डबलरोटी 10 रुपये की। एक बोरी कितनी डबलरोटियों के बराबर है?",
            "opts": [
              "4",
              "10",
              "40"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अदला-बदली या ख़र्च से पहले दाम की तुलना करूँग[[ा|ी]], कुछ पैसा आगे के लिए बचाऊँग[[ा|ी]], और याद रखूँग[[ा|ी]] कि पैसा इसलिए चलता है क्योंकि हम सब उस पर भरोसा करते हैं।"
      },
      "mr": {
        "remember": [
          "वस्तुविनिमय म्हणजे वस्तूंची थेट अदलाबदल. ती तेव्हाच चालते जेव्हा दोघांना समोरच्याकडचं हवं असतं.",
          "पैसा सगळे स्वीकारतात, म्हणून अदलाबदल शोधावी लागत नाही.",
          "किमती वस्तूंचं मोल मोजतात, म्हणून तू फुटबॉल आणि पावाची तुलना करू शकतोस.",
          "पैसा पुढच्या काळासाठी जपून ठेवता येतो, म्हणजे गरज पडल्यावर खरेदी करता येते."
        ],
        "fill": {
          "bank": [
            "वस्तुविनिमय",
            "पैसा",
            "किमती",
            "नंतर",
            "अदलाबदल",
            "मोल"
          ],
          "items": [
            [
              "वस्तू पैशांशिवाय थेट बदलणं म्हणजे @@.",
              "वस्तुविनिमय"
            ],
            [
              "ज्याला सगळे बदल्यात मानतात तो @@.",
              "पैसा"
            ],
            [
              "@@ सांगतात की एखादी गोष्ट पैशांत किती मोलाची आहे.",
              "किमती"
            ],
            [
              "पैसा जपून ठेवून @@ वापरता येतो.",
              "नंतर"
            ],
            [
              "वस्तुविनिमयात अशी व्यक्ती शोधावी लागते जी तुझ्याशी @@ करेल.",
              "अदलाबदल"
            ]
          ]
        },
        "sortTitle": "वस्तुविनिमय की पैसा?",
        "sortOpts": [
          {
            "k": "barter",
            "t": "वस्तुविनिमय"
          },
          {
            "k": "money",
            "t": "पैसा"
          }
        ],
        "sort": [
          {
            "icon": "football",
            "label": "फुटबॉल देऊन पाव बदलणं",
            "a": "barter"
          },
          {
            "icon": "coin",
            "label": "पावासाठी एक नाणं देणं",
            "a": "money"
          },
          {
            "icon": "magnifier",
            "label": "अशी व्यक्ती शोधणं जिला नेमकं तुझ्याकडचं हवं आहे",
            "a": "barter"
          },
          {
            "icon": "tag",
            "label": "वस्तूंची तुलना करता येईल असा किमतीचा टॅग",
            "a": "money"
          },
          {
            "icon": "jar",
            "label": "उद्यासाठी काही नाणी जपून ठेवणं",
            "a": "money"
          }
        ],
        "tf": [
          {
            "q": "वस्तुविनिमय सोपा असतो कारण सगळ्यांना एकाच गोष्टी हव्या असतात.",
            "a": false
          },
          {
            "q": "किमतींमुळे वेगवेगळ्या गोष्टींची तुलना करणं सोपं होतं.",
            "a": true
          },
          {
            "q": "पैसा नंतर वापरण्यासाठी जपून ठेवता येतो.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एक पाव 10 रुपयांचा आहे. 50 रुपयांत किती पाव येतील?",
            "opts": [
              "5",
              "10",
              "50"
            ],
            "a": 0
          },
          {
            "q": "गव्हाचं एक पोतं 40 रुपयांचं आणि एक पाव 10 रुपयांचा आहे. एक पोतं किती पावांइतकं आहे?",
            "opts": [
              "4",
              "10",
              "40"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की अदलाबदल किंवा खर्च करण्याआधी किमतींची तुलना करेन, थोडा पैसा पुढच्या काळासाठी जपून ठेवेन, आणि लक्षात ठेवेन की पैसा चालतो कारण आपण सगळे त्यावर विश्वास ठेवतो."
      }
    }
  },
  {
    "slug": "needs-vs-wants",
    "status": "live",
    "color": "#ffd166",
    "title": {
      "en": "{name} and the Treasure Trail",
      "hi": "{name} और खज़ाने की राह",
      "mr": "{name} आणि खजिन्याची वाट"
    },
    "cardTitle": {
      "en": "The Treasure Trail",
      "hi": "खज़ाने की राह",
      "mr": "खजिन्याची वाट"
    },
    "subtitle": {
      "en": "Needs and Wants",
      "hi": "ज़रूरत और चाहत",
      "mr": "गरज आणि इच्छा"
    },
    "topic": {
      "en": "Needs and wants",
      "hi": "ज़रूरत और चाहत",
      "mr": "गरज आणि इच्छा"
    },
    "stops": {
      "en": [
        "Home",
        "The Fair",
        "Kaka's Shop",
        "The Treasure"
      ],
      "hi": [
        "घर",
        "मेला",
        "काका की दुकान",
        "खज़ाना"
      ],
      "mr": [
        "घर",
        "जत्रा",
        "काकांचं दुकान",
        "खजिना"
      ]
    },
    "scenes": [
      "Aaji gives you a 100 rupee note while Gullu the piggy jar wobbles and talks.",
      "At the fair you see toys, jalebis and balloons. Gullu peeks out of your bag and reminds you about your notebook and pencil.",
      "Kaka shows you the Needs basket and the Wants basket.",
      "You drop the last 50 rupees into Gullu and share a jalebi with Aaji."
    ],
    "story": {
      "en": [
        "Fair week had begun in your village! Aaji smiled and gave you a crisp 100 rupee note. \"This is for the whole week, {name}. Use it wisely.\" You tucked it into your bag. Then something amazing happened. Your clay piggy jar wobbled and said, \"Hello, {name}! I am Gullu. Let's go on a treasure trail together!\"",
        "At the fair, your eyes grew big. A shiny toy car! Golden jalebis! A rainbow balloon! \"I want them all!\" you cried. Gullu peeked out of your bag. \"Wait, {name},\" he whispered. \"Look at your things. Your notebook is full and your pencil is tiny. What will you use at school?\" You stopped and thought.",
        "Kaka the shopkeeper saw you thinking. He held up two baskets. \"This one is for NEEDS, things you must have, like food, a notebook, medicine. This one is for WANTS, things that are nice to have, like toys and sweets. Both are okay, {name}. But remember the treasure rule: needs first, then a little fun, then save.\" Gullu giggled. \"That is the map to the treasure!\"",
        "You bought a notebook for 30 rupees and a pencil for 10. Then you bought one jalebi for 10 rupees and shared it with Aaji. Back home, you dropped the last 50 rupees into Gullu. Clink! \"We found the treasure, {name}!\" said Gullu. \"A wise mind and a little saving.\""
      ],
      "hi": [
        "तुम्हारे गाँव में मेले का हफ़्ता शुरू हो गया था! दादी ने मुस्कुराकर तुम्हें सौ रुपये का नया नोट दिया। \"यह पूरे हफ़्ते के लिए है, {name}। समझदारी से खर्च करना।\" तुमने नोट अपने बस्ते में रख लिया। तभी एक कमाल हो गया। ताक पर रखा तुम्हारा मिट्टी का गुल्लक हिला और बोला, \"नमस्ते, {name}! मैं गुल्लू हूँ। चलो, साथ मिलकर खज़ाने की राह पर चलें!\"",
        "मेले में तुम्हारी आँखें फैल गईं। चमकती खिलौना कार! सुनहरी जलेबियाँ! इंद्रधनुषी गुब्बारा! \"मुझे सब चाहिए!\" तुम चिल्ला उठ[[े|ीं]]। गुल्लू बस्ते से झाँका। \"रुको, {name},\" उसने फुसफुसाकर कहा। \"अपना सामान देखो। तुम्हारी कॉपी भर चुकी है और पेंसिल बहुत छोटी रह गई है। स्कूल में क्या इस्तेमाल करोग[[े|ी]]?\" तुम रुक ग[[ए|ईं]] और सोचने लग[[े|ीं]]।",
        "काका दुकानदार ने तुम्हें सोचते देखा। उन्होंने दो टोकरियाँ उठाईं। \"यह ज़रूरत की टोकरी है: जो चीज़ें चाहिए ही चाहिए, जैसे खाना, कॉपी, दवा। यह चाहत की टोकरी है: जो चीज़ें अच्छी लगती हैं, जैसे खिलौने और मिठाई। दोनों ठीक हैं, {name}। पर खज़ाने का नियम याद रखना: पहले ज़रूरत, फिर थोड़ी मौज, फिर बचत।\" गुल्लू खिलखिलाया। \"यही तो खज़ाने का नक्शा है!\"",
        "तुमने तीस रुपये की कॉपी और दस रुपये की पेंसिल खरीदी। फिर दस रुपये की एक जलेबी ली और दादी के साथ बाँटकर खाई। घर लौटकर तुमने बचे हुए पचास रुपये गुल्लू में डाल दिए। खन! \"हमें खज़ाना मिल गया, {name}!\" गुल्लू ने कहा। \"समझदार सोच और थोड़ी-सी बचत।\""
      ],
      "mr": [
        "तुझ्या गावात जत्रेचा आठवडा सुरू झाला होता! आजीने हसून तुला शंभर रुपयांची कोरी नोट दिली. \"हे पूर्ण आठवड्यासाठी आहे, {name}. हुशारीने खर्च कर.\" तू ती नोट आपल्या दप्तरात ठेवलीस. तेवढ्यात एक गंमत झाली. फडताळावर ठेवलेला तुझा मातीचा गल्ला हलला आणि म्हणाला, \"नमस्कार, {name}! मी गल्लू. चल, आपण दोघे मिळून खजिन्याच्या वाटेवर जाऊ!\"",
        "जत्रेत तुझे डोळे विस्फारले. चमचमती खेळण्यातली गाडी! सोनेरी जिलब्या! इंद्रधनुषी रंगाचा फुगा! \"मला सगळं हवं!\" तू ओरडल[[ास|ीस]]. गल्लू दप्तरातून डोकावला. \"थांब, {name},\" तो कुजबुजला. \"तुझ्या वस्तू बघ. तुझी वही भरली आहे आणि पेन्सिल खूप लहान झाली आहे. शाळेत काय वापरशील?\" तू थांबल[[ास|ीस]] आणि विचारात पडल[[ास|ीस]].",
        "काका दुकानदाराने तुला विचार करताना पाहिलं. त्यांनी दोन टोपल्या उचलल्या. \"ही गरजेची टोपली: जी गोष्ट हवीच, जसं जेवण, वही, औषध. ही इच्छेची टोपली: जी गोष्ट छान वाटते, जसं खेळणी आणि मिठाई. दोन्ही ठीक आहेत, {name}. पण खजिन्याचा नियम लक्षात ठेव: आधी गरज, मग थोडी मजा, मग बचत.\" गल्लू खुदकन हसला. \"हाच तर खजिन्याचा नकाशा आहे!\"",
        "तू तीस रुपयांची वही आणि दहा रुपयांची पेन्सिल घेतलीस. मग दहा रुपयांची एक जिलबी घेऊन आजीसोबत वाटून खाल्लीस. घरी आल्यावर उरलेले पन्नास रुपये तू गल्लूमध्ये टाकलेस. खळ्ळ! \"आपल्याला खजिना सापडला, {name}!\" गल्लू म्हणाला. \"हुशार विचार आणि थोडी बचत.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A need is something you must have.",
          "A want is something nice to have.",
          "Needs first, then a little fun, then save.",
          "Gullu says: always save a little."
        ],
        "fill": {
          "bank": [
            "save",
            "toy",
            "notebook",
            "need",
            "piggy",
            "want"
          ],
          "items": [
            [
              "A @@ is something you must have, like food or medicine.",
              "need"
            ],
            [
              "A @@ is something nice to have, like a toy or a sweet.",
              "want"
            ],
            [
              "Needs first, then a little fun, then @@.",
              "save"
            ],
            [
              "{name}, you bought a @@ and a pencil for school.",
              "notebook"
            ],
            [
              "Gullu is your clay @@ jar.",
              "piggy"
            ]
          ]
        },
        "sort": [
          {
            "icon": "notebook",
            "label": "Notebook",
            "a": "need"
          },
          {
            "icon": "car",
            "label": "Toy car",
            "a": "want"
          },
          {
            "icon": "bottle",
            "label": "Medicine",
            "a": "need"
          },
          {
            "icon": "balloon",
            "label": "Balloon",
            "a": "want"
          },
          {
            "icon": "bread",
            "label": "Food",
            "a": "need"
          }
        ],
        "tf": [
          {
            "q": "A toy car is a need.",
            "a": false
          },
          {
            "q": "You should always save a little.",
            "a": true
          },
          {
            "q": "Needs come before wants.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "You have 100 rupees and spend 40. How much is left?",
            "opts": [
              "40",
              "60",
              "140"
            ],
            "a": 1
          },
          {
            "q": "A notebook costs 30 rupees and a pencil costs 10. What do both cost together?",
            "opts": [
              "30",
              "40",
              "50"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to think of needs first, then a little fun, and then to save."
      },
      "hi": {
        "remember": [
          "ज़रूरत वह है जो चाहिए ही चाहिए।",
          "चाहत वह है जो अच्छी लगती है।",
          "पहले ज़रूरत, फिर थोड़ी मौज, फिर बचत।",
          "गुल्लू कहता है: थोड़ा ज़रूर बचाओ।"
        ],
        "fill": {
          "bank": [
            "बचत",
            "कॉपी",
            "चाहत",
            "खिलौना",
            "गुल्लक",
            "ज़रूरत"
          ],
          "items": [
            [
              "@@ वह है जो हमें चाहिए ही चाहिए, जैसे खाना या दवा।",
              "ज़रूरत"
            ],
            [
              "@@ वह है जो अच्छी लगती है, जैसे खिलौना या मिठाई।",
              "चाहत"
            ],
            [
              "पहले ज़रूरत, फिर थोड़ी मौज, फिर @@।",
              "बचत"
            ],
            [
              "{name}, तुमने स्कूल के लिए एक @@ और एक पेंसिल खरीदी।",
              "कॉपी"
            ],
            [
              "गुल्लू तुम्हारा मिट्टी का @@ है।",
              "गुल्लक"
            ]
          ]
        },
        "sort": [
          {
            "icon": "notebook",
            "label": "कॉपी",
            "a": "need"
          },
          {
            "icon": "car",
            "label": "खिलौना कार",
            "a": "want"
          },
          {
            "icon": "bottle",
            "label": "दवा",
            "a": "need"
          },
          {
            "icon": "balloon",
            "label": "गुब्बारा",
            "a": "want"
          },
          {
            "icon": "bread",
            "label": "खाना",
            "a": "need"
          }
        ],
        "tf": [
          {
            "q": "खिलौना कार एक ज़रूरत है।",
            "a": false
          },
          {
            "q": "हमेशा थोड़ी बचत करनी चाहिए।",
            "a": true
          },
          {
            "q": "पहले ज़रूरत, फिर चाहत।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "तुम्हारे पास सौ रुपये हैं और चालीस रुपये खर्च हो गए। कितने बचे?",
            "opts": [
              "चालीस",
              "साठ",
              "एक सौ चालीस"
            ],
            "a": 1
          },
          {
            "q": "कॉपी तीस रुपये की है और पेंसिल दस रुपये की। दोनों मिलाकर कितने की हैं?",
            "opts": [
              "तीस",
              "चालीस",
              "पचास"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि पहले ज़रूरत, फिर थोड़ी मौज, और फिर बचत के बारे में सोचूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "गरज म्हणजे जी गोष्ट हवीच.",
          "इच्छा म्हणजे जी गोष्ट छान वाटते.",
          "आधी गरज, मग थोडी मजा, मग बचत.",
          "गल्लू म्हणतो: थोडी बचत नक्की कर."
        ],
        "fill": {
          "bank": [
            "वही",
            "बचत",
            "गल्ला",
            "इच्छा",
            "खेळणं",
            "गरज"
          ],
          "items": [
            [
              "@@ म्हणजे जी गोष्ट हवीच, जसं जेवण किंवा औषध.",
              "गरज"
            ],
            [
              "@@ म्हणजे जी गोष्ट छान वाटते, जसं खेळणं किंवा मिठाई.",
              "इच्छा"
            ],
            [
              "आधी गरज, मग थोडी मजा, मग @@.",
              "बचत"
            ],
            [
              "{name}, तू शाळेसाठी एक @@ आणि एक पेन्सिल घेतलीस.",
              "वही"
            ],
            [
              "गल्लू हा तुझा मातीचा @@ आहे.",
              "गल्ला"
            ]
          ]
        },
        "sort": [
          {
            "icon": "notebook",
            "label": "वही",
            "a": "need"
          },
          {
            "icon": "car",
            "label": "खेळण्यातली गाडी",
            "a": "want"
          },
          {
            "icon": "bottle",
            "label": "औषध",
            "a": "need"
          },
          {
            "icon": "balloon",
            "label": "फुगा",
            "a": "want"
          },
          {
            "icon": "bread",
            "label": "जेवण",
            "a": "need"
          }
        ],
        "tf": [
          {
            "q": "खेळण्यातली गाडी ही गरज आहे.",
            "a": false
          },
          {
            "q": "नेहमी थोडी बचत करावी.",
            "a": true
          },
          {
            "q": "आधी गरज, मग इच्छा.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "तुझ्याकडे शंभर रुपये आहेत आणि चाळीस रुपये खर्च झाले. किती उरले?",
            "opts": [
              "चाळीस",
              "साठ",
              "एकशे चाळीस"
            ],
            "a": 1
          },
          {
            "q": "वही तीस रुपयांची आणि पेन्सिल दहा रुपयांची आहे. दोन्ही मिळून किती रुपये?",
            "opts": [
              "तीस",
              "चाळीस",
              "पन्नास"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की आधी गरज, मग थोडी मजा, आणि मग बचत, असा विचार करीन."
      }
    }
  },
  {
    "slug": "piggy-jar",
    "status": "live",
    "color": "#ef8354",
    "title": {
      "en": "{name} and the Big Wish",
      "hi": "{name} और बड़ा सपना",
      "mr": "{name} आणि मोठं स्वप्न"
    },
    "cardTitle": {
      "en": "The Big Wish",
      "hi": "बड़ा सपना",
      "mr": "मोठं स्वप्न"
    },
    "subtitle": {
      "en": "Saving for a Goal",
      "hi": "लक्ष्य के लिए बचत",
      "mr": "ध्येयासाठी बचत"
    },
    "topic": {
      "en": "Saving",
      "hi": "बचत",
      "mr": "बचत"
    },
    "stops": {
      "en": [
        "The Wish",
        "The Test",
        "Halfway",
        "The Big Day"
      ],
      "hi": [
        "सपना",
        "परीक्षा",
        "आधा रास्ता",
        "बड़ा दिन"
      ],
      "mr": [
        "स्वप्न",
        "परीक्षा",
        "अर्धा टप्पा",
        "मोठा दिवस"
      ]
    },
    "scenes": [
      "You look at your flat, patched football and imagine a shiny new one costing 200 rupees. Gullu has a plan.",
      "Your friend eats a cold ice candy. Gullu shakes his head as you hold your 20 rupee note.",
      "Five stacks of coins, a calendar with five ticks and a bar showing you are halfway to 200 rupees.",
      "You and your friends cheer around your brand new football."
    ],
    "story": {
      "en": [
        "Your old football had a patch on top of a patch, and it was flat again! \"A new one costs 200 rupees,\" sighed your friend at the village shop. You stared at the shiny ball. Then Gullu rolled over and whispered, \"A wish is only a dream until it has a plan, {name}. Aaji gives you pocket money every Sunday. Let's save 20 rupees of it each week. In ten weeks, the ball is yours!\"",
        "In week one, clink! 20 rupees went into Gullu. But on the third day, your friend came by with a cold orange ice candy. \"Want one? It's only 10 rupees!\" Your mouth watered. You held your 20 rupee note, and Gullu shook his head. \"The candy will be gone in two minutes, {name}. The football will stay for years.\" You took a deep breath and said, \"No thanks, I'm saving for my football.\" Your friend grinned. \"Cool! I'll be the first to play with it!\"",
        "The weeks went by: clink, clink, clink. Aaji made a tick on the calendar every Sunday. After five ticks, you tipped Gullu out on the bed and counted five stacks of coins. \"100 rupees!\" you cheered. \"Halfway there!\" said Gullu. Sometimes the waiting felt long, but the stacks kept growing. Small coins, big wish.",
        "At last, the tenth Sunday came! You counted ten stacks: exactly 200 rupees. You and Aaji walked to the shop, and you paid for the shiny new football yourself. You ran to the field, and all your friends cheered! \"Kick it high, {name}!\" said Gullu. \"A wish, a plan and patience. That is how you get a football!\" That night you asked Gullu, \"What shall we save for next?\""
      ],
      "hi": [
        "तुम्हारी पुरानी गेंद पर पैबंद के ऊपर पैबंद लगा था, और वह फिर पिचक गई थी! \"नई गेंद दो सौ रुपये की आती है,\" गाँव की दुकान पर तुम्हारे दोस्त ने आह भरी। तुम चमकती गेंद को बस देखते ही रह ग[[ए|ईं]]। तभी गुल्लू लुढ़कता हुआ आया और फुसफुसाया, \"{name}, इच्छा तब तक सपना है जब तक उसकी कोई योजना न हो। दादी हर रविवार तुम्हें जेबखर्च देती हैं। उसमें से हर हफ़्ते बीस रुपये बचाते हैं। दस हफ़्ते में गेंद तुम्हारी!\"",
        "पहले हफ़्ते खन! बीस रुपये गुल्लू में चले गए। पर तीसरे दिन तुम्हारा दोस्त ठंडा संतरे वाला बर्फ़ का गोला लेकर आया। \"खाओगे? सिर्फ़ दस रुपये का है!\" तुम्हारे मुँह में पानी आ गया। हाथ में बीस का नोट था, और गुल्लू ने ना में सिर हिलाया। \"गोला दो मिनट में खत्म हो जाएगा, {name}। पर गेंद सालों साथ रहेगी।\" तुमने गहरी साँस ली और कहा, \"नहीं यार, मैं अपनी गेंद के लिए बचा रह[[ा|ी]] हूँ।\" दोस्त मुस्कुराया, \"वाह! गेंद आएगी तो सबसे पहले मैं खेलूँगा!\"",
        "हफ़्ते बीतते गए: खन, खन, खन। दादी हर रविवार कैलेंडर पर एक निशान लगाती थीं। पाँच निशान होने पर तुमने गुल्लू को खाट पर उलटकर सिक्कों के पाँच ढेर गिने। \"सौ रुपये!\" तुम खुशी से चिल्ला उठ[[े|ीं]]। \"आधा रास्ता पूरा!\" गुल्लू ने कहा। कभी-कभी इंतज़ार लंबा लगता था, पर ढेर बढ़ते ही गए। छोटे सिक्के, बड़ा सपना।",
        "आख़िर दसवाँ रविवार आ गया! तुमने दस ढेर गिने: पूरे दो सौ रुपये। तुम और दादी दुकान गए, और चमकती नई गेंद के पैसे तुमने खुद दिए। तुम दौड़कर मैदान पहुँच[[े|ीं]], और सारे दोस्त खुशी से चिल्ला उठे! \"ऊँची किक मारो, {name}!\" गुल्लू ने कहा। \"इच्छा, योजना और धीरज, तीनों मिलें तो गेंद मिल जाती है!\" उस रात तुमने गुल्लू से पूछा, \"अब अगला क्या बचाएँ?\""
      ],
      "mr": [
        "तुझ्या जुन्या चेंडूवर ठिगळावर ठिगळ लावलं होतं, आणि तो पुन्हा पंक्चर झाला होता! \"नवा चेंडू दोनशे रुपयांचा येतो,\" गावातल्या दुकानात तुझा मित्र उसासा टाकून म्हणाला. तू चमकणाऱ्या चेंडूकडे बघतच राहिल[[ास|ीस]]. तेवढ्यात गल्लू गडगडत आला आणि कुजबुजला, \"{name}, इच्छेला योजना नसेल तर ते फक्त स्वप्न असतं. आजी दर रविवारी तुला खाऊचे पैसे देते. त्यातले वीस रुपये दर आठवड्याला वाचवू. दहा आठवड्यांत चेंडू तुझा!\"",
        "पहिल्या आठवड्यात खळ्ळ! वीस रुपये गल्लूत गेले. पण तिसऱ्या दिवशी तुझा मित्र थंडगार संत्र्याचा बर्फाचा गोळा घेऊन आला. \"खाशील का? फक्त दहा रुपयांचा आहे!\" तुझ्या तोंडाला पाणी सुटलं. हातात वीस रुपयांची नोट होती आणि गल्लूने नकारार्थी मान हलवली. \"गोळा दोन मिनिटांत संपेल, {name}. पण चेंडू वर्षानुवर्षं साथ देईल.\" तू दीर्घ श्वास घेतलास आणि म्हणाल[[ास|ीस]], \"नको रे, मी माझ्या चेंडूसाठी बचत करत[[ो|े]]य.\" मित्र हसला, \"व्वा! चेंडू आला की सर्वात आधी मी खेळणार!\"",
        "आठवडे सरत गेले: खळ, खळ, खळ. आजी दर रविवारी कॅलेंडरवर एक खूण करायची. पाच खुणा झाल्यावर तू गल्लूला खाटेवर रिकामं केलंस आणि नाण्यांचे पाच ढीग मोजलेस. \"शंभर रुपये!\" तू आनंदाने ओरडल[[ास|ीस]]. \"अर्धा टप्पा पूर्ण!\" गल्लू म्हणाला. कधी कधी वाट पाहणं कठीण वाटायचं, पण ढीग वाढतच गेले. छोटी नाणी, मोठं स्वप्न.",
        "शेवटी दहावा रविवार आला! तू दहा ढीग मोजलेस: बरोबर दोनशे रुपये. तू आणि आजी दुकानात गेलात आणि चमकणाऱ्या नव्या चेंडूचे पैसे तू स्वतः दिलेस. मैदानात पोहोचताच सगळे मित्र आनंदाने ओरडले! \"उंच किक मार, {name}!\" गल्लू म्हणाला. \"इच्छा, योजना आणि संयम, तिघं मिळाले की चेंडू मिळतोच!\" त्या रात्री तू गल्लूला विचारलंस, \"आता पुढे कशासाठी बचत करायची?\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A goal is something you really want to reach.",
          "Save a small amount every week, and it adds up.",
          "Do not spend your goal money on small treats.",
          "Patience wins: small coins, big wish."
        ],
        "fill": {
          "bank": [
            "goal",
            "save",
            "coins",
            "patience",
            "wish",
            "week"
          ],
          "items": [
            [
              "A @@ is something you really want to reach, like a new football.",
              "goal"
            ],
            [
              "{name}, you decided to @@ 20 rupees every week.",
              "save"
            ],
            [
              "Small @@ add up to big money.",
              "coins"
            ],
            [
              "Saving takes time, so you need @@.",
              "patience"
            ],
            [
              "Gullu says a @@ needs a plan.",
              "wish"
            ]
          ]
        },
        "sortTitle": "Smart or not smart?",
        "sortOpts": [
          {
            "k": "yes",
            "t": "Smart"
          },
          {
            "k": "no",
            "t": "Not smart"
          }
        ],
        "sort": [
          {
            "icon": "coin",
            "label": "Put 20 rupees in the jar every week",
            "a": "yes"
          },
          {
            "icon": "lolly",
            "label": "Spend all your wish money on an ice candy",
            "a": "no"
          },
          {
            "icon": "football",
            "label": "Keep a picture of your wish near the jar",
            "a": "yes"
          },
          {
            "icon": "jalebi",
            "label": "Take coins from the jar to buy sweets",
            "a": "no"
          },
          {
            "icon": "calendar",
            "label": "Mark each week on a calendar",
            "a": "yes"
          }
        ],
        "tf": [
          {
            "q": "Small savings can add up to a big amount.",
            "a": true
          },
          {
            "q": "A goal does not need a plan.",
            "a": false
          },
          {
            "q": "Spending your goal money on treats makes the wish come sooner.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "You save 20 rupees every week. How much will you have after 5 weeks?",
            "opts": [
              "50",
              "100",
              "150"
            ],
            "a": 1
          },
          {
            "q": "A ball costs 200 rupees and you have saved 100. How much more do you need?",
            "opts": [
              "50",
              "100",
              "200"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to make a plan for my wishes, to save a little every week, and to be patient."
      },
      "hi": {
        "remember": [
          "लक्ष्य वह है जिसे तुम सच में पाना चाहते हो।",
          "हर हफ़्ते थोड़ी बचत करो, वह जुड़ती जाती है।",
          "लक्ष्य के पैसे छोटे-मोटे शौक पर खर्च मत करो।",
          "धीरज जीतता है: छोटे सिक्के, बड़ा सपना।"
        ],
        "fill": {
          "bank": [
            "लक्ष्य",
            "बचत",
            "सिक्के",
            "धीरज",
            "इच्छा",
            "हफ़्ता"
          ],
          "items": [
            [
              "@@ वह है जिसे तुम सच में पाना चाहत[[े|ी]] हो, जैसे नई गेंद।",
              "लक्ष्य"
            ],
            [
              "{name}, तुमने हर हफ़्ते बीस रुपये की @@ की।",
              "बचत"
            ],
            [
              "छोटे @@ मिलकर बड़ी रकम बन जाते हैं।",
              "सिक्के"
            ],
            [
              "बचत में वक़्त लगता है, इसलिए @@ चाहिए।",
              "धीरज"
            ],
            [
              "गुल्लू कहता है: @@ हो तो योजना भी होनी चाहिए।",
              "इच्छा"
            ]
          ]
        },
        "sortTitle": "समझदारी या नासमझी?",
        "sortOpts": [
          {
            "k": "yes",
            "t": "समझदारी"
          },
          {
            "k": "no",
            "t": "नासमझी"
          }
        ],
        "sort": [
          {
            "icon": "coin",
            "label": "हर हफ़्ते गुल्लक में बीस रुपये डालना",
            "a": "yes"
          },
          {
            "icon": "lolly",
            "label": "इच्छा के सारे पैसे बर्फ़ के गोले पर खर्च कर देना",
            "a": "no"
          },
          {
            "icon": "football",
            "label": "अपनी इच्छा की तस्वीर गुल्लक के पास रखना",
            "a": "yes"
          },
          {
            "icon": "jalebi",
            "label": "मिठाई के लिए गुल्लक से सिक्के निकाल लेना",
            "a": "no"
          },
          {
            "icon": "calendar",
            "label": "कैलेंडर पर हर हफ़्ते निशान लगाना",
            "a": "yes"
          }
        ],
        "tf": [
          {
            "q": "छोटी-छोटी बचत मिलकर बड़ी रकम बन सकती है।",
            "a": true
          },
          {
            "q": "लक्ष्य के लिए योजना की ज़रूरत नहीं होती।",
            "a": false
          },
          {
            "q": "लक्ष्य के पैसे बर्फ़ के गोले पर खर्च करने से इच्छा जल्दी पूरी होती है।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तुम हर हफ़्ते बीस रुपये बचात[[े|ी]] हो। पाँच हफ़्ते में कितने रुपये होंगे?",
            "opts": [
              "पचास",
              "सौ",
              "डेढ़ सौ"
            ],
            "a": 1
          },
          {
            "q": "गेंद दो सौ रुपये की है और तुम सौ रुपये बचा चुक[[े|ी]] हो। और कितने चाहिए?",
            "opts": [
              "पचास",
              "सौ",
              "दो सौ"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अपनी इच्छाओं की योजना बनाऊँग[[ा|ी]], हर हफ़्ते थोड़ा बचाऊँग[[ा|ी]] और धीरज रखूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "ध्येय म्हणजे जे तुला खरंच मिळवायचं आहे.",
          "दर आठवड्याला थोडी बचत केली की ती वाढत जाते.",
          "ध्येयाचे पैसे लहान खाऊवर खर्च करू नकोस.",
          "संयम जिंकतो: छोटी नाणी, मोठं स्वप्न."
        ],
        "fill": {
          "bank": [
            "ध्येय",
            "बचत",
            "नाणी",
            "संयम",
            "इच्छा",
            "आठवडा"
          ],
          "items": [
            [
              "@@ म्हणजे जे तुला खरंच मिळवायचं आहे, जसा नवा चेंडू.",
              "ध्येय"
            ],
            [
              "{name}, तू दर आठवड्याला वीस रुपयांची @@ केलीस.",
              "बचत"
            ],
            [
              "लहान @@ मिळून मोठी रक्कम होते.",
              "नाणी"
            ],
            [
              "बचतीला वेळ लागतो, म्हणून @@ हवा.",
              "संयम"
            ],
            [
              "गल्लू म्हणतो: @@ असेल तर योजनाही हवी.",
              "इच्छा"
            ]
          ]
        },
        "sortTitle": "हुशारीचं की चुकीचं?",
        "sortOpts": [
          {
            "k": "yes",
            "t": "हुशारीचं"
          },
          {
            "k": "no",
            "t": "चुकीचं"
          }
        ],
        "sort": [
          {
            "icon": "coin",
            "label": "दर आठवड्याला गल्ल्यात वीस रुपये टाकणं",
            "a": "yes"
          },
          {
            "icon": "lolly",
            "label": "इच्छेचे सगळे पैसे बर्फाच्या गोळ्यावर उडवणं",
            "a": "no"
          },
          {
            "icon": "football",
            "label": "इच्छेचं चित्र गल्ल्याजवळ ठेवणं",
            "a": "yes"
          },
          {
            "icon": "jalebi",
            "label": "मिठाईसाठी गल्ल्यातून नाणी काढणं",
            "a": "no"
          },
          {
            "icon": "calendar",
            "label": "कॅलेंडरवर दर आठवड्याला खूण करणं",
            "a": "yes"
          }
        ],
        "tf": [
          {
            "q": "लहान लहान बचत मिळून मोठी रक्कम होऊ शकते.",
            "a": true
          },
          {
            "q": "ध्येयासाठी योजनेची गरज नसते.",
            "a": false
          },
          {
            "q": "ध्येयाचे पैसे खाऊवर खर्च केल्याने इच्छा लवकर पूर्ण होते.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तू दर आठवड्याला वीस रुपये वाचवत[[ो|े]]स. पाच आठवड्यांत किती रुपये होतील?",
            "opts": [
              "पन्नास",
              "शंभर",
              "दीडशे"
            ],
            "a": 1
          },
          {
            "q": "चेंडू दोनशे रुपयांचा आहे आणि तू शंभर रुपये वाचवले आहेस. आणखी किती हवेत?",
            "opts": [
              "पन्नास",
              "शंभर",
              "दोनशे"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की माझ्या इच्छांसाठी योजना बनवीन, दर आठवड्याला थोडी बचत करीन आणि संयम ठेवीन."
      }
    }
  },
  {
    "slug": "inside-a-bank",
    "status": "live",
    "color": "#7bdff2",
    "title": {
      "en": "{name} and the First Bank Account",
      "hi": "{name} और पहला बैंक खाता",
      "mr": "{name} आणि पहिलं बँक खातं"
    },
    "cardTitle": {
      "en": "Inside a Bank",
      "hi": "बैंक के अंदर",
      "mr": "बँकेच्या आत"
    },
    "subtitle": {
      "en": "How a bank keeps money safe",
      "hi": "बैंक पैसे कैसे सुरक्षित रखता है",
      "mr": "बँक पैसे सुरक्षित कसे ठेवते"
    },
    "topic": {
      "en": "Banking",
      "hi": "बैंकिंग",
      "mr": "बँकिंग"
    },
    "stops": {
      "en": [
        "Heavy Gullu",
        "The Bank",
        "The Counter",
        "Safe at Home"
      ],
      "hi": [
        "भारी गुल्लू",
        "बैंक",
        "काउंटर",
        "घर पर सुरक्षित"
      ],
      "mr": [
        "जड गल्लू",
        "बँक",
        "काउंटर",
        "घरी सुरक्षित"
      ]
    },
    "scenes": [
      "You and Aaji walk to the bank. Gullu is so heavy that he is sweating.",
      "Meena Didi sits behind the counter with a stamp and a passbook. You look amazed.",
      "You hand over Gullu's coins at the counter and Meena Didi gets the passbook ready.",
      "At home, you hold up your passbook while Aaji puts it into a locked tin trunk."
    ],
    "story": {
      "en": [
        "Gullu was getting heavy. Clink, clank, he rattled with every step you took. \"I am full of coins, {name}!\" he groaned. \"And what if a thief comes? Or a mouse? Or the roof leaks?\" Aaji smiled. \"There is a safer place, {name}. Come, we are going to the bank!\" You put on your slippers and walked down the road with Aaji, carrying Gullu in your arms.",
        "The bank was a big building with tall pillars. Inside, Meena Didi sat behind a counter. \"Welcome, {name}! A bank is like a big, strong cupboard for everyone's money,\" she said. \"It keeps your money safe, writes down every rupee, and gives it back whenever you need it.\" Gullu's eyes grew wide. \"And all those locks and guards?\" he whispered. \"They are all there for your money,\" smiled Didi.",
        "With Aaji's help, you filled in a small form with your name. Then you tipped Gullu out and counted: 500 rupees! Didi counted too and wrote it in a little book. \"This is your passbook, {name}. It shows every rupee you put in or take out. Putting money in is a deposit. Taking it out is a withdrawal.\" Thump! She stamped the page. Your money now had a safe home, and you could take it back any time.",
        "Back home, Aaji put the passbook into the tin trunk with a lock. \"Remember the bank rules, {name},\" said Gullu. \"Your PIN is a secret number. Never tell it to anyone, not even a friend. If someone calls and asks for the code that came on your phone, say no and tell a grown-up. A real bank never asks for your secrets.\" You nodded. Gullu kept a few coins for small things, and the rest of the money went to sleep safely in the bank."
      ],
      "hi": [
        "गुल्लू भारी होता जा रहा था। तुम्हारे हर कदम पर वह खन-खन बजता। \"मैं सिक्कों से भर गया हूँ, {name}!\" उसने कराहकर कहा। \"और अगर चोर आ गया तो? या चूहा? या छत टपकी तो?\" दादी मुस्कुराईं। \"इससे भी सुरक्षित जगह है, {name}। चलो, बैंक चलते हैं!\" तुमने चप्पल पहनी और गुल्लू को गोद में उठाकर दादी के साथ सड़क पर चल पड़[[े|ीं]]।",
        "बैंक एक बड़ी इमारत थी जिसमें ऊँचे खंभे थे। अंदर काउंटर के पीछे मीना दीदी बैठी थीं। \"आओ {name}, स्वागत है! बैंक सबके पैसों की बड़ी मज़बूत अलमारी जैसा है,\" उन्होंने कहा। \"यह तुम्हारे पैसे सुरक्षित रखता है, हर रुपया लिखकर रखता है, और जब ज़रूरत हो तब वापस दे देता है।\" गुल्लू की आँखें फैल गईं। \"और ये ताले और पहरेदार?\" उसने फुसफुसाकर पूछा। \"ये सब तुम्हारे पैसों के लिए ही हैं,\" दीदी मुस्कुराईं।",
        "दादी की मदद से तुमने एक छोटा फ़ॉर्म भरा, जिसमें तुम्हारा नाम लिखा था। फिर तुमने गुल्लू को खाली किया और गिना: पूरे पाँच सौ रुपये! दीदी ने भी गिने और एक छोटी किताब में लिख दिए। \"यह तुम्हारी पासबुक है, {name}। इसमें हर वह रुपया लिखा रहता है जो तुम डालते या निकालते हो। पैसे डालना जमा कहलाता है। निकालना निकासी।\" ठक! उन्होंने पन्ने पर मुहर लगाई। अब तुम्हारे पैसों का सुरक्षित घर था, और तुम जब चाहो उन्हें वापस ले सकत[[े|ी]] हो।",
        "घर लौटकर दादी ने पासबुक ताले वाले टिन के संदूक में रख दी। \"बैंक के नियम याद रखना, {name},\" गुल्लू ने कहा। \"तुम्हारा पिन एक गुप्त नंबर है। उसे किसी को मत बताओ, दोस्त को भी नहीं। अगर कोई फ़ोन करके तुम्हारे फ़ोन पर आया कोड माँगे, तो मना कर दो और किसी बड़े को बताओ। असली बैंक कभी तुम्हारे राज़ नहीं पूछता।\" तुमने सिर हिलाया। गुल्लू ने छोटे खर्चों के लिए कुछ सिक्के रखे, और बाकी पैसे बैंक में आराम से सोने चले गए।"
      ],
      "mr": [
        "गल्लू जड होत चालला होता. तू चालताना प्रत्येक पावलाला तो खळखळ वाजायचा. \"मी नाण्यांनी भरलोय, {name}!\" तो कण्हत म्हणाला. \"आणि चोर आला तर? किंवा उंदीर? किंवा छप्पर गळलं तर?\" आजी हसली. \"याहून सुरक्षित जागा आहे, {name}. चल, आपण बँकेत जाऊ!\" तू चप्पल घातलीस आणि गल्लूला कुशीत घेऊन आजीसोबत रस्त्याने निघाल[[ास|ीस]].",
        "बँक ही उंच खांबांची मोठी इमारत होती. आत काउंटरमागे मीना ताई बसल्या होत्या. \"ये {name}, स्वागत आहे! बँक म्हणजे सगळ्यांच्या पैशांचं मोठं भक्कम कपाट,\" त्या म्हणाल्या. \"ती तुझे पैसे सुरक्षित ठेवते, प्रत्येक रुपया लिहून ठेवते आणि हवे तेव्हा परत देते.\" गल्लूचे डोळे विस्फारले. \"आणि ही कुलपं आणि पहारेकरी?\" त्याने कुजबुजत विचारलं. \"ते सगळे तुझ्या पैशांसाठीच आहेत,\" ताई हसल्या.",
        "आजीच्या मदतीने तू एक छोटा फॉर्म भरलास, ज्यात तुझं नाव होतं. मग तू गल्लू रिकामा केलास आणि मोजलंस: बरोबर पाचशे रुपये! ताईंनीही मोजले आणि एका छोट्या पुस्तकात लिहिले. \"ही तुझी पासबुक आहे, {name}. तू जे रुपये भरतोस किंवा काढतोस ते सगळे यात लिहिलेले असतात. पैसे भरणं म्हणजे जमा. काढणं म्हणजे पैसे काढणं.\" ठप्प! त्यांनी पानावर शिक्का मारला. आता तुझ्या पैशांना सुरक्षित घर मिळालं होतं, आणि हवे तेव्हा तू ते परत घेऊ शकत[[ो|े]]स.",
        "घरी आल्यावर आजीने पासबुक कुलूप असलेल्या पत्र्याच्या पेटीत ठेवलं. \"बँकेचे नियम लक्षात ठेव, {name},\" गल्लू म्हणाला. \"तुझा पिन म्हणजे गुप्त आकडा. तो कुणालाही सांगू नकोस, मित्रालाही नाही. कुणी फोन करून तुझ्या फोनवर आलेला कोड मागितला, तर नाही म्हण आणि मोठ्यांना सांग. खरी बँक कधीच तुझी गुपितं विचारत नाही.\" तू मान डोलावलीस. गल्लूने छोट्या खर्चासाठी थोडी नाणी ठेवली आणि बाकीचे पैसे बँकेत निवांत झोपी गेले."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A bank keeps your money safe.",
          "Putting money in is a deposit. Taking it out is a withdrawal.",
          "The passbook records every rupee.",
          "Never tell your PIN or phone code to anyone."
        ],
        "fill": {
          "bank": [
            "bank",
            "deposit",
            "withdrawal",
            "passbook",
            "PIN",
            "safe"
          ],
          "items": [
            [
              "A @@ is a place that keeps everyone's money safe.",
              "bank"
            ],
            [
              "Putting money into your account is a @@.",
              "deposit"
            ],
            [
              "Taking money out of your account is a @@.",
              "withdrawal"
            ],
            [
              "{name}, your @@ is the little book that records every rupee.",
              "passbook"
            ],
            [
              "Your @@ is a secret number. Never tell it to anyone.",
              "PIN"
            ]
          ]
        },
        "sortTitle": "Secret or OK to share?",
        "sortOpts": [
          {
            "k": "secret",
            "t": "Secret"
          },
          {
            "k": "share",
            "t": "OK to share"
          }
        ],
        "sort": [
          {
            "icon": "lock",
            "label": "Your ATM PIN",
            "a": "secret"
          },
          {
            "icon": "nametag",
            "label": "Your first name",
            "a": "share"
          },
          {
            "icon": "phone",
            "label": "The code that comes on your phone",
            "a": "secret"
          },
          {
            "icon": "football",
            "label": "Your favourite game",
            "a": "share"
          },
          {
            "icon": "card",
            "label": "Your bank card number",
            "a": "secret"
          }
        ],
        "tf": [
          {
            "q": "A bank keeps your money safe.",
            "a": true
          },
          {
            "q": "Once your money is in a bank, you can never take it out.",
            "a": false
          },
          {
            "q": "It is fine to tell your PIN to a friend.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "You put 500 rupees in the bank and later take out 100. How much is left?",
            "opts": [
              "300",
              "400",
              "600"
            ],
            "a": 1
          },
          {
            "q": "A stranger calls and asks for the code that came on your phone. What should you do?",
            "opts": [
              "Tell him quickly",
              "Say no and tell a grown-up",
              "Send it in a message"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to keep my money safe, to keep my PIN and codes secret, and to ask a grown-up when I am not sure."
      },
      "hi": {
        "remember": [
          "बैंक तुम्हारे पैसे सुरक्षित रखता है।",
          "पैसे डालना जमा है। निकालना निकासी है।",
          "पासबुक में हर रुपये का हिसाब लिखा होता है।",
          "अपना पिन और फ़ोन पर आया कोड किसी को मत बताओ।"
        ],
        "fill": {
          "bank": [
            "बैंक",
            "जमा",
            "निकासी",
            "पासबुक",
            "पिन",
            "सुरक्षित"
          ],
          "items": [
            [
              "@@ वह जगह है जहाँ सबके पैसे सुरक्षित रखे जाते हैं।",
              "बैंक"
            ],
            [
              "खाते में पैसे डालना @@ कहलाता है।",
              "जमा"
            ],
            [
              "खाते से पैसे निकालना @@ कहलाता है।",
              "निकासी"
            ],
            [
              "{name}, तुम्हारी @@ वह छोटी किताब है जिसमें हर रुपये का हिसाब लिखा होता है।",
              "पासबुक"
            ],
            [
              "तुम्हारा @@ एक गुप्त नंबर है। उसे किसी को मत बताओ।",
              "पिन"
            ]
          ]
        },
        "sortTitle": "गुप्त या बता सकते हैं?",
        "sortOpts": [
          {
            "k": "secret",
            "t": "गुप्त"
          },
          {
            "k": "share",
            "t": "बता सकते हैं"
          }
        ],
        "sort": [
          {
            "icon": "lock",
            "label": "ATM का पिन",
            "a": "secret"
          },
          {
            "icon": "nametag",
            "label": "तुम्हारा पहला नाम",
            "a": "share"
          },
          {
            "icon": "phone",
            "label": "फ़ोन पर आया कोड",
            "a": "secret"
          },
          {
            "icon": "football",
            "label": "तुम्हारा पसंदीदा खेल",
            "a": "share"
          },
          {
            "icon": "card",
            "label": "बैंक कार्ड का नंबर",
            "a": "secret"
          }
        ],
        "tf": [
          {
            "q": "बैंक तुम्हारे पैसे सुरक्षित रखता है।",
            "a": true
          },
          {
            "q": "बैंक में पैसे जमा करने के बाद उन्हें कभी निकाला नहीं जा सकता।",
            "a": false
          },
          {
            "q": "अपना पिन दोस्त को बता देना ठीक है।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तुमने बैंक में पाँच सौ रुपये जमा किए और बाद में सौ रुपये निकाले। कितने बचे?",
            "opts": [
              "तीन सौ",
              "चार सौ",
              "छह सौ"
            ],
            "a": 1
          },
          {
            "q": "एक अजनबी फ़ोन करके तुम्हारे फ़ोन पर आया कोड माँगता है। क्या करना चाहिए?",
            "opts": [
              "फ़ौरन कोड बता दो",
              "मना करो और किसी बड़े को बताओ",
              "मैसेज में भेज दो"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अपने पैसे सुरक्षित रखूँग[[ा|ी]], पिन और कोड गुप्त रखूँग[[ा|ी]], और ज़रा-सा भी शक होने पर किसी बड़े से पूछूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "बँक तुझे पैसे सुरक्षित ठेवते.",
          "पैसे भरणं म्हणजे जमा. काढणं म्हणजे पैसे काढणं.",
          "पासबुकमध्ये प्रत्येक रुपयाचा हिशोब लिहिलेला असतो.",
          "तुझा पिन आणि फोनवर आलेला कोड कुणालाही सांगू नकोस."
        ],
        "fill": {
          "bank": [
            "बँक",
            "जमा",
            "काढणं",
            "पासबुक",
            "पिन",
            "सुरक्षित"
          ],
          "items": [
            [
              "@@ ही अशी जागा आहे जिथे सगळ्यांचे पैसे सुरक्षित ठेवले जातात.",
              "बँक"
            ],
            [
              "खात्यात पैसे भरणं म्हणजे @@.",
              "जमा"
            ],
            [
              "खात्यातून पैसे परत घेणं म्हणजे पैसे @@.",
              "काढणं"
            ],
            [
              "{name}, @@ हे ते छोटं पुस्तक आहे ज्यात प्रत्येक रुपयाचा हिशोब लिहिलेला असतो.",
              "पासबुक"
            ],
            [
              "तुझा @@ हा गुप्त आकडा आहे. तो कुणालाही सांगू नकोस.",
              "पिन"
            ]
          ]
        },
        "sortTitle": "गुप्त की सांगितलं तरी चालेल?",
        "sortOpts": [
          {
            "k": "secret",
            "t": "गुप्त"
          },
          {
            "k": "share",
            "t": "सांगितलं तरी चालेल"
          }
        ],
        "sort": [
          {
            "icon": "lock",
            "label": "ATM पिन",
            "a": "secret"
          },
          {
            "icon": "nametag",
            "label": "तुझं पहिलं नाव",
            "a": "share"
          },
          {
            "icon": "phone",
            "label": "फोनवर आलेला कोड",
            "a": "secret"
          },
          {
            "icon": "football",
            "label": "तुझा आवडता खेळ",
            "a": "share"
          },
          {
            "icon": "card",
            "label": "बँक कार्डचा क्रमांक",
            "a": "secret"
          }
        ],
        "tf": [
          {
            "q": "बँक तुझे पैसे सुरक्षित ठेवते.",
            "a": true
          },
          {
            "q": "बँकेत पैसे ठेवल्यावर ते कधीच काढता येत नाहीत.",
            "a": false
          },
          {
            "q": "पिन मित्राला सांगितलेला चालतो.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तू बँकेत पाचशे रुपये भरलेस आणि नंतर शंभर रुपये काढलेस. किती उरले?",
            "opts": [
              "तीनशे",
              "चारशे",
              "सहाशे"
            ],
            "a": 1
          },
          {
            "q": "एक अनोळखी माणूस फोन करून तुझ्या फोनवर आलेला कोड मागतो. काय करायचं?",
            "opts": [
              "लगेच कोड सांग",
              "नाही म्हण आणि मोठ्यांना सांग",
              "मेसेजने पाठवून दे"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की माझे पैसे सुरक्षित ठेवीन, पिन आणि कोड गुप्त ठेवीन, आणि शंका आली तर मोठ्यांना विचारीन."
      }
    }
  },
  {
    "slug": "shop-bill",
    "status": "live",
    "color": "#bdb2ff",
    "title": {
      "en": "{name} and the Extra Five Rupees",
      "hi": "{name} और वे पाँच रुपये ज़्यादा",
      "mr": "{name} आणि ते जादा पाच रुपये"
    },
    "cardTitle": {
      "en": "The Extra Five Rupees",
      "hi": "पाँच रुपये ज़्यादा क्यों?",
      "mr": "जादा पाच रुपये कुठून?"
    },
    "subtitle": {
      "en": "How to read a shop bill",
      "hi": "दुकान का बिल कैसे पढ़ें?",
      "mr": "दुकानाचं बिल कसं वाचायचं?"
    },
    "topic": {
      "en": "Bills",
      "hi": "बिल",
      "mr": "बिल"
    },
    "stops": {
      "en": [
        "Kaka's Shop",
        "The Bill",
        "Where the 5 Goes",
        "Bills on the Board"
      ],
      "hi": [
        "काका की दुकान",
        "बिल",
        "पाँच रुपये कहाँ गए",
        "बोर्ड पर बिल"
      ],
      "mr": [
        "काकांचं दुकान",
        "बिल",
        "पाच रुपये कुठे गेले",
        "बोर्डवरची बिलं"
      ]
    },
    "scenes": [
      "You hand Kaka a 100-rupee note at his shop while he writes on a slip, and a 100 rupee tag hangs by the shop.",
      "You study a big bill that says 100 plus 5 makes 105, with a magnifying glass over it.",
      "A bill sends coins along an arrow into a big clay pot that pays for a school, a clinic and a road.",
      "You hold your bill up with a green tick while three other checked bills hang on the board."
    ],
    "story": {
      "en": [
        "You needed a new notebook for school, so you walked to Kaka's shop. The tag on the shelf said 100 rupees. You handed Kaka a 100-rupee note, feeling very smart. \"Wait a moment,\" said Kaka, smiling, and he began writing something on a slip of paper.",
        "\"Here is your bill,\" said Kaka. You looked at it. It said: price 100, plus 5, total 105. \"But the tag said 100!\" you cried. \"Why is there an extra 5?\" Kaka laughed gently. \"That is GST, a tax. The government asks every shop to add it. See, it is written on the bill, so nothing is hidden.\" Gullu nodded. \"A bill shows the shop's name, the date, the bill number, each price, the tax and the total.\"",
        "\"Where do the 5 rupees go?\" you asked. \"Kaka passes them on to the government,\" said Gullu. \"Different things have different tax rates, but the idea is the same: tax is part of the price, and it is written on the bill.\" You paid the 5 rupees more and wondered what the government does with it. \"That is a story for another day,\" Gullu winked.",
        "At home you stuck the bill on the board beside Aaji's old bills. \"Always keep the bill, especially for bigger things,\" said Aaji. \"It is your proof if something breaks and you need to exchange it.\" Gullu added, \"Check the total before you leave, check the date, and ask politely if anything looks wrong. A bill you can read is a bill that protects you.\""
      ],
      "hi": [
        "स्कूल के लिए तुम्हें नई कॉपी चाहिए थी, इसलिए तुम काका की दुकान गए। अलमारी पर टैग लगा था: सौ रुपये। तुमने काका को सौ का नोट थमाया और बड़ा समझदार महसूस किया। \"ज़रा रुकना,\" काका ने मुस्कुराकर कहा और काग़ज़ की पर्ची पर कुछ लिखने लगे।",
        "\"यह लो तुम्हारा बिल,\" काका बोले। तुमने देखा। उसमें लिखा था: क़ीमत 100, जमा 5, कुल 105। \"पर टैग पर तो सौ लिखा था!\" तुम चौंक उठ[[े|ीं]]। \"यह पाँच रुपये ज़्यादा क्यों?\" काका हल्के से हँसे। \"यह GST है, यानी कर। सरकार हर दुकान से इसे जोड़ने को कहती है। देखो, बिल पर लिखा है, कुछ छिपा नहीं है।\" गुल्लू ने सिर हिलाया। \"बिल में दुकान का नाम, तारीख़, बिल का नंबर, हर चीज़ की क़ीमत, कर और कुल रक़म होती है।\"",
        "\"ये पाँच रुपये कहाँ जाते हैं?\" तुमने पूछा। \"काका इन्हें सरकार को भेज देते हैं,\" गुल्लू बोला। \"अलग-अलग चीज़ों पर कर की दर अलग होती है, पर बात वही है: कर क़ीमत का हिस्सा है और बिल पर लिखा होता है।\" तुमने पाँच रुपये और चुकाए और सोचा कि सरकार इनका क्या करती है। \"वह किसी और दिन की कहानी है,\" गुल्लू ने आँख मारी।",
        "घर पहुँचकर तुमने बिल बोर्ड पर दादी के पुराने बिलों के पास चिपका दिया। \"बिल हमेशा सँभालकर रखो, ख़ासकर बड़ी चीज़ों का,\" दादी ने कहा। \"कुछ टूट जाए और बदलवाना पड़े तो यही तुम्हारा सबूत है।\" गुल्लू ने जोड़ा, \"निकलने से पहले कुल रक़म जाँचो, तारीख़ देखो, और कुछ ग़लत लगे तो विनम्रता से पूछो। जो बिल तुम पढ़ सकत[[े|ी]] हो, वही तुम्हारी रक्षा करता है।\""
      ],
      "mr": [
        "शाळेसाठी तुला नवी वही हवी होती, म्हणून तू काकांच्या दुकानात गेल[[ास|ीस]]. फळीवरच्या टॅगवर शंभर रुपये लिहिलं होतं. तू काकांना शंभराची नोट दिलीस आणि स्वतःला खूप हुशार समजलंस. \"जरा थांब,\" काका हसून म्हणाले आणि कागदाच्या चिठ्ठीवर काहीतरी लिहू लागले.",
        "\"हे घे तुझं बिल,\" काका म्हणाले. तू पाहिलंस. त्यात लिहिलं होतं: किंमत 100, अधिक 5, एकूण 105. \"पण टॅगवर तर शंभर होते!\" तू चकित झाल[[ास|ीस]]. \"हे जादा पाच रुपये कशाचे?\" काका हळूच हसले. \"हा GST आहे, म्हणजे कर. सरकार प्रत्येक दुकानाला तो जोडायला सांगतं. बघ, बिलावर लिहिलं आहे, काही लपवलेलं नाही.\" गल्लूने मान डोलावली. \"बिलात दुकानाचं नाव, तारीख, बिलाचा क्रमांक, प्रत्येक वस्तूची किंमत, कर आणि एकूण रक्कम असते.\"",
        "\"हे पाच रुपये कुठे जातात?\" तू विचारलंस. \"काका ते सरकारला पाठवतात,\" गल्लू म्हणाला. \"वेगवेगळ्या वस्तूंवर कराचे दर वेगवेगळे असतात, पण कल्पना तीच: कर हा किमतीचाच भाग आहे आणि तो बिलावर लिहिलेला असतो.\" तू आणखी पाच रुपये दिलेस आणि सरकार त्याचं काय करतं याचा विचार केलास. \"ती दुसऱ्या दिवसाची गोष्ट आहे,\" गल्लूने डोळा मिचकावला.",
        "घरी आल्यावर तू बिल बोर्डवर आजीच्या जुन्या बिलांशेजारी चिकटवलंस. \"बिल नेहमी जपून ठेव, विशेषतः मोठ्या वस्तूंचं,\" आजी म्हणाल्या. \"काही तुटलं आणि बदलून घ्यायचं असेल तर तोच तुझा पुरावा आहे.\" गल्लूने भर घातली, \"निघण्यापूर्वी एकूण रक्कम तपास, तारीख बघ आणि काही चुकीचं वाटलं तर नम्रपणे विचार. जे बिल तुला वाचता येतं तेच तुझं रक्षण करतं.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A bill shows the shop's name, date, bill number, price, tax and total.",
          "Price + tax = total. 100 + 5 = 105.",
          "GST is a tax added to the price. The shop passes it on to the government.",
          "Keep bills for bigger things, and check the total before you leave."
        ],
        "fill": {
          "bank": [
            "bill",
            "tax",
            "total",
            "proof",
            "government",
            "date"
          ],
          "items": [
            [
              "A paper showing what you bought and what you paid is a @@.",
              "bill"
            ],
            [
              "GST is a kind of @@ added to the price.",
              "tax"
            ],
            [
              "Price plus tax gives the @@.",
              "total"
            ],
            [
              "Keep the bill as @@ of your purchase.",
              "proof"
            ],
            [
              "The tax in a bill is passed on to the @@.",
              "government"
            ]
          ]
        },
        "sortTitle": "Which part of the bill?",
        "sortOpts": [
          {
            "k": "price",
            "t": "Price"
          },
          {
            "k": "tax",
            "t": "Tax (GST)"
          },
          {
            "k": "total",
            "t": "Total"
          },
          {
            "k": "info",
            "t": "Date and number"
          }
        ],
        "sort": [
          {
            "icon": "tag",
            "label": "100 rupees for the notebook",
            "a": "price"
          },
          {
            "icon": "bank",
            "label": "5 rupees that go to the shared fund",
            "a": "tax"
          },
          {
            "icon": "note",
            "label": "105 rupees to pay at the end",
            "a": "total"
          },
          {
            "icon": "calendar",
            "label": "The day you bought it",
            "a": "info"
          },
          {
            "icon": "paper",
            "label": "Bill number printed at the top",
            "a": "info"
          }
        ],
        "tf": [
          {
            "q": "The total on a bill is just the price without tax.",
            "a": false
          },
          {
            "q": "Keeping bills for bigger purchases is a good habit.",
            "a": true
          },
          {
            "q": "The tax shown on a bill is passed on to the government.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A pen costs 40 rupees and the tax is 2 rupees. What is the total?",
            "opts": [
              "42",
              "38",
              "402"
            ],
            "a": 0
          },
          {
            "q": "Your bill total is 105 rupees. You give 200 rupees. How much change should you get?",
            "opts": [
              "95",
              "105",
              "100"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to ask for a bill, to check the total before I leave, and to keep bills for bigger things."
      },
      "hi": {
        "remember": [
          "बिल में दुकान का नाम, तारीख़, बिल नंबर, क़ीमत, कर और कुल रक़म लिखी होती है।",
          "क़ीमत + कर = कुल रक़म। 100 + 5 = 105।",
          "GST क़ीमत में जुड़ने वाला कर है। दुकानदार उसे सरकार को भेज देता है।",
          "बड़ी चीज़ों के बिल सँभालकर रखो और निकलने से पहले कुल रक़म जाँचो।"
        ],
        "fill": {
          "bank": [
            "बिल",
            "कर",
            "कुल",
            "सबूत",
            "सरकार",
            "तारीख़"
          ],
          "items": [
            [
              "ख़रीदी और चुकाई रक़म दिखाने वाला काग़ज़ @@ कहलाता है।",
              "बिल"
            ],
            [
              "GST क़ीमत में जुड़ने वाला एक @@ है।",
              "कर"
            ],
            [
              "क़ीमत और कर जोड़ने पर @@ रक़म मिलती है।",
              "कुल"
            ],
            [
              "बिल को अपनी ख़रीद का @@ समझकर रखो।",
              "सबूत"
            ],
            [
              "बिल में जुड़ा कर @@ को भेजा जाता है।",
              "सरकार"
            ]
          ]
        },
        "sortTitle": "बिल का कौन-सा हिस्सा?",
        "sortOpts": [
          {
            "k": "price",
            "t": "क़ीमत"
          },
          {
            "k": "tax",
            "t": "कर (GST)"
          },
          {
            "k": "total",
            "t": "कुल"
          },
          {
            "k": "info",
            "t": "तारीख़ और नंबर"
          }
        ],
        "sort": [
          {
            "icon": "tag",
            "label": "कॉपी के सौ रुपये",
            "a": "price"
          },
          {
            "icon": "bank",
            "label": "पाँच रुपये जो साझा कोष में जाते हैं",
            "a": "tax"
          },
          {
            "icon": "note",
            "label": "अंत में चुकाने के 105 रुपये",
            "a": "total"
          },
          {
            "icon": "calendar",
            "label": "जिस दिन ख़रीदा",
            "a": "info"
          },
          {
            "icon": "paper",
            "label": "ऊपर छपा बिल नंबर",
            "a": "info"
          }
        ],
        "tf": [
          {
            "q": "बिल की कुल रक़म कर के बिना सिर्फ़ क़ीमत होती है।",
            "a": false
          },
          {
            "q": "बड़ी ख़रीद के बिल सँभालकर रखना अच्छी आदत है।",
            "a": true
          },
          {
            "q": "बिल पर दिखा कर सरकार को भेजा जाता है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एक पेन 40 रुपये का है और कर 2 रुपये है। कुल कितना हुआ?",
            "opts": [
              "42",
              "38",
              "402"
            ],
            "a": 0
          },
          {
            "q": "बिल की कुल रक़म 105 रुपये है। तुमने 200 रुपये दिए। कितने रुपये वापस मिलने चाहिए?",
            "opts": [
              "95",
              "105",
              "100"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि बिल माँगूँग[[ा|ी]], निकलने से पहले कुल रक़म जाँचूँग[[ा|ी]], और बड़ी चीज़ों के बिल सँभालकर रखूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "बिलात दुकानाचं नाव, तारीख, बिल क्रमांक, किंमत, कर आणि एकूण रक्कम असते.",
          "किंमत + कर = एकूण रक्कम. 100 + 5 = 105.",
          "GST हा किमतीत जोडला जाणारा कर आहे. दुकानदार तो सरकारला पाठवतो.",
          "मोठ्या वस्तूंची बिलं जपून ठेव आणि निघण्यापूर्वी एकूण रक्कम तपास."
        ],
        "fill": {
          "bank": [
            "बिल",
            "कर",
            "एकूण",
            "पुरावा",
            "सरकार",
            "तारीख"
          ],
          "items": [
            [
              "काय घेतलं आणि किती दिले ते दाखवणारा कागद म्हणजे @@.",
              "बिल"
            ],
            [
              "GST हा किमतीत जोडला जाणारा एक @@ आहे.",
              "कर"
            ],
            [
              "किंमत आणि कर मिळून @@ रक्कम होते.",
              "एकूण"
            ],
            [
              "बिल हा तुझ्या खरेदीचा @@ आहे, तो जपून ठेव.",
              "पुरावा"
            ],
            [
              "बिलातला कर @@ ला पाठवला जातो.",
              "सरकार"
            ]
          ]
        },
        "sortTitle": "बिलाचा कोणता भाग?",
        "sortOpts": [
          {
            "k": "price",
            "t": "किंमत"
          },
          {
            "k": "tax",
            "t": "कर (GST)"
          },
          {
            "k": "total",
            "t": "एकूण"
          },
          {
            "k": "info",
            "t": "तारीख आणि क्रमांक"
          }
        ],
        "sort": [
          {
            "icon": "tag",
            "label": "वहीचे शंभर रुपये",
            "a": "price"
          },
          {
            "icon": "bank",
            "label": "पाच रुपये जे सामायिक निधीत जातात",
            "a": "tax"
          },
          {
            "icon": "note",
            "label": "शेवटी द्यायचे 105 रुपये",
            "a": "total"
          },
          {
            "icon": "calendar",
            "label": "ज्या दिवशी घेतलं",
            "a": "info"
          },
          {
            "icon": "paper",
            "label": "वर छापलेला बिल क्रमांक",
            "a": "info"
          }
        ],
        "tf": [
          {
            "q": "बिलावरची एकूण रक्कम म्हणजे कराशिवायची फक्त किंमत.",
            "a": false
          },
          {
            "q": "मोठ्या खरेदीची बिलं जपून ठेवणं चांगली सवय आहे.",
            "a": true
          },
          {
            "q": "बिलावर दिसणारा कर सरकारला पाठवला जातो.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एका पेनची किंमत 40 रुपये आहे आणि कर 2 रुपये आहे. एकूण किती?",
            "opts": [
              "42",
              "38",
              "402"
            ],
            "a": 0
          },
          {
            "q": "बिलाची एकूण रक्कम 105 रुपये आहे. तू 200 रुपये दिलेस. किती रुपये परत मिळायला हवेत?",
            "opts": [
              "95",
              "105",
              "100"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की बिल मागेन, निघण्यापूर्वी एकूण रक्कम तपासेन, आणि मोठ्या वस्तूंची बिलं जपून ठेवीन."
      }
    }
  },
  {
    "slug": "better-buy",
    "status": "live",
    "color": "#caffbf",
    "title": {
      "en": "{name} and the Better Buy",
      "hi": "{name} और सही सौदा",
      "mr": "{name} आणि चांगला सौदा"
    },
    "cardTitle": {
      "en": "The Better Buy",
      "hi": "सही सौदा",
      "mr": "चांगला सौदा"
    },
    "subtitle": {
      "en": "Which pack is really cheaper?",
      "hi": "कौन-सा पैकेट सच में सस्ता है?",
      "mr": "कोणतं पाकीट खरंच स्वस्त आहे?"
    },
    "topic": {
      "en": "Smart shopping",
      "hi": "समझदार ख़रीदारी",
      "mr": "हुशार खरेदी"
    },
    "stops": {
      "en": [
        "Two Packs",
        "Price per Unit",
        "The Winner",
        "Use It All"
      ],
      "hi": [
        "दो पैकेट",
        "प्रति इकाई दाम",
        "विजेता",
        "पूरा इस्तेमाल"
      ],
      "mr": [
        "दोन पाकिटं",
        "प्रति एकक किंमत",
        "विजेता",
        "सगळं वापर"
      ]
    },
    "scenes": [
      "You look puzzled with a big question mark above while a small pack with a 50 rupee tag and a big pack with a 90 rupee tag sit on the table.",
      "The blackboard shows 500 grams equals 50 rupees, times 2, equals 1 kilogram at 100 rupees, while you raise your arm.",
      "Two sacks on the board show 100 rupees per kilogram and 90 rupees per kilogram, and a green tick sits above the bigger sack.",
      "Aaji stands beside the table with the big rice pack, a green tick beside it and a calendar full of ticks nearby."
    ],
    "story": {
      "en": [
        "Aaji sent you to Kaka's shop to buy rice. Two packs sat side by side on the table. The small pack held 500 grams and cost 50 rupees. The big pack held 1 kilogram and cost 90 rupees. \"The big one costs more, so the small one is better,\" you said. Gullu raised an eyebrow. \"Costing more and being dearer are not the same thing, {name}.\"",
        "\"The packs are different sizes,\" said Gullu. \"To compare fairly, find the price for the same amount. That is the price per unit.\" On the blackboard he wrote: 500 grams costs 50 rupees. One kilogram is two packs of 500 grams. So 1 kilogram costs 50 times 2, which is 100 rupees.",
        "\"Now compare,\" said Gullu. \"Buying small packs, 1 kilogram costs 100 rupees. The big pack costs 90 rupees for 1 kilogram.\" The big pack was cheaper by 10 rupees every kilogram! You drew a big green tick. \"Bigger is not always cheaper,\" Gullu warned. \"Always work out the price per kilogram, per litre or per piece.\"",
        "You carried the big pack home. Aaji smiled and poured it into the rice tin. \"Rice keeps for many months, so the bigger pack saves us money,\" she said. \"But for bananas that spoil in three days, a small bunch is smarter. The best buy is the one you finish.\" You decided to always check the price per unit, and to think about how much you really need."
      ],
      "hi": [
        "दादी ने तुम्हें चावल लेने काका की दुकान भेजा। मेज़ पर दो पैकेट साथ-साथ रखे थे। छोटे पैकेट में 500 ग्राम था और उसकी क़ीमत 50 रुपये थी। बड़े पैकेट में 1 किलो था और उसकी क़ीमत 90 रुपये थी। \"बड़ा वाला ज़्यादा रुपयों का है, इसलिए छोटा ही ठीक रहेगा,\" तुमने कहा। गुल्लू ने भौंह उठाई। \"ज़्यादा रुपये लगना और महँगा होना एक बात नहीं है, {name}।\"",
        "\"पैकेट अलग-अलग माप के हैं,\" गुल्लू बोला। \"ठीक से तुलना करने के लिए बराबर मात्रा का दाम निकालो। इसे प्रति इकाई दाम कहते हैं।\" ब्लैकबोर्ड पर उसने लिखा: 500 ग्राम की क़ीमत 50 रुपये। 1 किलो यानी 500 ग्राम के दो पैकेट। तो 1 किलो की क़ीमत 50 गुना 2, यानी 100 रुपये।",
        "\"अब तुलना करो,\" गुल्लू बोला। \"छोटे पैकेट लो तो 1 किलो के 100 रुपये पड़ते हैं। बड़े पैकेट में 1 किलो के 90 रुपये हैं।\" बड़ा पैकेट हर किलो पर 10 रुपये सस्ता था! तुमने बड़ा-सा हरा टिक बनाया। \"बड़ा हमेशा सस्ता नहीं होता,\" गुल्लू ने चेताया। \"हमेशा प्रति किलो, प्रति लीटर या प्रति नग का दाम निकालो।\"",
        "तुमने बड़ा पैकेट घर पहुँचाया। दादी मुस्कुराईं और उसे चावल के डिब्बे में उँडेल दिया। \"चावल महीनों चलता है, इसलिए बड़ा पैकेट हमारे पैसे बचाता है,\" उन्होंने कहा। \"पर केले तीन दिन में ख़राब हो जाते हैं, उनके लिए छोटा गुच्छा समझदारी है। सबसे अच्छा सौदा वह है जिसे तुम पूरा खा लो।\" तुमने तय किया कि प्रति इकाई दाम ज़रूर देखना है और यह भी सोचना है कि सच में कितना चाहिए।"
      ],
      "mr": [
        "आजीने तुला तांदूळ आणायला काकांच्या दुकानात पाठवलं. टेबलावर दोन पाकिटं शेजारी शेजारी होती. लहान पाकिटात 500 ग्रॅम होतं आणि त्याची किंमत 50 रुपये होती. मोठ्या पाकिटात 1 किलो होतं आणि त्याची किंमत 90 रुपये होती. \"मोठं जास्त रुपयांचं आहे, म्हणून लहानच बरं,\" तू म्हणाल[[ास|ीस]]. गल्लूने भुवई उंचावली. \"जास्त रुपये लागणं आणि महाग असणं एकच नाही, {name}.\"",
        "\"पाकिटं वेगवेगळ्या मापांची आहेत,\" गल्लू म्हणाला. \"नीट तुलना करायला सारख्या प्रमाणाची किंमत शोध. याला प्रति एकक किंमत म्हणतात.\" फळ्यावर त्याने लिहिलं: 500 ग्रॅमची किंमत 50 रुपये. 1 किलो म्हणजे 500 ग्रॅमची दोन पाकिटं. म्हणजे 1 किलोची किंमत 50 गुणिले 2, म्हणजे 100 रुपये.",
        "\"आता तुलना कर,\" गल्लू म्हणाला. \"लहान पाकिटं घेतलीस तर 1 किलोचे 100 रुपये पडतात. मोठ्या पाकिटात 1 किलोचे 90 रुपये आहेत.\" मोठं पाकीट प्रत्येक किलोला 10 रुपयांनी स्वस्त होतं! तू मोठी हिरवी टिक केलीस. \"मोठं नेहमी स्वस्त असतंच असं नाही,\" गल्लूने सावध केलं. \"नेहमी प्रति किलो, प्रति लिटर किंवा प्रति नग किंमत काढ.\"",
        "तू मोठं पाकीट घरी आणलंस. आजी हसल्या आणि त्यांनी ते तांदळाच्या डब्यात ओतलं. \"तांदूळ अनेक महिने टिकतो, म्हणून मोठं पाकीट आपले पैसे वाचवतं,\" त्या म्हणाल्या. \"पण तीन दिवसांत खराब होणाऱ्या केळ्यांसाठी लहान घड शहाणपणाचा. सर्वात चांगला सौदा तोच जो तू संपवतोस.\" तू ठरवलंस की प्रति एकक किंमत नक्की बघायची आणि खरंच किती हवं आहे तेही ठरवायचं."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Packs come in different sizes, so price tags alone cannot be compared.",
          "Price per unit: find the price for the same amount, like per kilogram, per litre or per piece.",
          "500 grams for 50 rupees is 100 rupees a kilogram. 1 kilogram for 90 rupees is cheaper.",
          "A big pack is a good buy only if you will use it all before it spoils."
        ],
        "fill": {
          "bank": [
            "unit",
            "kilogram",
            "compare",
            "Bigger",
            "spoils",
            "tag"
          ],
          "items": [
            [
              "To compare packs, work out the price per @@.",
              "unit"
            ],
            [
              "500 grams for 50 rupees means 100 rupees per @@.",
              "kilogram"
            ],
            [
              "You cannot @@ packs of different sizes by their tags alone.",
              "compare"
            ],
            [
              "@@ is not always cheaper.",
              "Bigger"
            ],
            [
              "A big pack is a waste if the food @@ before you finish it.",
              "spoils"
            ]
          ]
        },
        "sortTitle": "Smart buy or poor buy?",
        "sortOpts": [
          {
            "k": "smart",
            "t": "Smart buy"
          },
          {
            "k": "poor",
            "t": "Poor buy"
          }
        ],
        "sort": [
          {
            "icon": "sack",
            "label": "Rice at 90 rupees a kilogram instead of 100, and the family will use it all",
            "a": "smart"
          },
          {
            "icon": "mango",
            "label": "A huge pack of bananas that will spoil in three days",
            "a": "poor"
          },
          {
            "icon": "tag",
            "label": "Choosing a pack only because its tag shows a smaller number",
            "a": "poor"
          },
          {
            "icon": "magnifier",
            "label": "Working out the price per kilogram before buying",
            "a": "smart"
          },
          {
            "icon": "clock",
            "label": "Buying far more than you can use before the date on the pack",
            "a": "poor"
          }
        ],
        "tf": [
          {
            "q": "The pack with the smaller price tag is always cheaper.",
            "a": false
          },
          {
            "q": "Price per unit lets you compare packs of different sizes.",
            "a": true
          },
          {
            "q": "A big pack saves money only if you use it all.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A 250 gram pack costs 30 rupees. What is the price for 1 kilogram?",
            "opts": [
              "120",
              "30",
              "60"
            ],
            "a": 0
          },
          {
            "q": "Pack A: 2 kilograms for 180 rupees. Pack B: 1 kilogram for 95 rupees. Which is cheaper per kilogram?",
            "opts": [
              "Pack A",
              "Pack B",
              "Same"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to work out the price per unit before I buy, and to buy only what I will really use."
      },
      "hi": {
        "remember": [
          "पैकेट अलग-अलग माप के होते हैं, इसलिए सिर्फ़ दाम के टैग से तुलना नहीं हो सकती।",
          "प्रति इकाई दाम: बराबर मात्रा का दाम निकालो, जैसे प्रति किलो, प्रति लीटर या प्रति नग।",
          "500 ग्राम के 50 रुपये यानी 1 किलो के 100 रुपये। 1 किलो के 90 रुपये सस्ता है।",
          "बड़ा पैकेट तभी अच्छा सौदा है जब वह ख़राब होने से पहले पूरा इस्तेमाल हो जाए।"
        ],
        "fill": {
          "bank": [
            "इकाई",
            "किलो",
            "तुलना",
            "बड़ा",
            "ख़राब",
            "टैग"
          ],
          "items": [
            [
              "पैकेटों की तुलना के लिए प्रति @@ दाम निकालो।",
              "इकाई"
            ],
            [
              "500 ग्राम के 50 रुपये का मतलब है प्रति @@ 100 रुपये।",
              "किलो"
            ],
            [
              "अलग माप के पैकेटों की सिर्फ़ टैग से @@ नहीं की जा सकती।",
              "तुलना"
            ],
            [
              "@@ पैकेट हमेशा सस्ता नहीं होता।",
              "बड़ा"
            ],
            [
              "अगर खाना पूरा होने से पहले @@ हो जाए तो बड़ा पैकेट बेकार है।",
              "ख़राब"
            ]
          ]
        },
        "sortTitle": "समझदारी का सौदा या ग़लत सौदा?",
        "sortOpts": [
          {
            "k": "smart",
            "t": "समझदारी का सौदा"
          },
          {
            "k": "poor",
            "t": "ग़लत सौदा"
          }
        ],
        "sort": [
          {
            "icon": "sack",
            "label": "100 की जगह 90 रुपये किलो चावल, जिसे परिवार पूरा इस्तेमाल करेगा",
            "a": "smart"
          },
          {
            "icon": "mango",
            "label": "केलों का विशाल पैकेट जो तीन दिन में ख़राब हो जाएगा",
            "a": "poor"
          },
          {
            "icon": "tag",
            "label": "पैकेट सिर्फ़ इसलिए चुनना कि उसके टैग पर छोटा अंक है",
            "a": "poor"
          },
          {
            "icon": "magnifier",
            "label": "ख़रीदने से पहले प्रति किलो दाम निकालना",
            "a": "smart"
          },
          {
            "icon": "clock",
            "label": "पैकेट की तारीख़ से पहले जितना इस्तेमाल हो सके उससे बहुत ज़्यादा ख़रीदना",
            "a": "poor"
          }
        ],
        "tf": [
          {
            "q": "जिस पैकेट के टैग पर कम दाम है वह हमेशा सस्ता होता है।",
            "a": false
          },
          {
            "q": "प्रति इकाई दाम से अलग माप के पैकेटों की तुलना हो सकती है।",
            "a": true
          },
          {
            "q": "बड़ा पैकेट तभी पैसे बचाता है जब पूरा इस्तेमाल हो।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "250 ग्राम का पैकेट 30 रुपये का है। 1 किलो का दाम कितना होगा?",
            "opts": [
              "120",
              "30",
              "60"
            ],
            "a": 0
          },
          {
            "q": "पैकेट A: 2 किलो के 180 रुपये। पैकेट B: 1 किलो के 95 रुपये। प्रति किलो कौन-सा सस्ता है?",
            "opts": [
              "पैकेट A",
              "पैकेट B",
              "बराबर"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि ख़रीदने से पहले प्रति इकाई दाम निकालूँग[[ा|ी]], और सिर्फ़ उतना ही ख़रीदूँग[[ा|ी]] जितना सच में इस्तेमाल होगा।"
      },
      "mr": {
        "remember": [
          "पाकिटं वेगवेगळ्या मापांची असतात, म्हणून फक्त किमतीच्या टॅगवरून तुलना करता येत नाही.",
          "प्रति एकक किंमत: सारख्या प्रमाणाची किंमत काढ, जसं प्रति किलो, प्रति लिटर किंवा प्रति नग.",
          "500 ग्रॅमचे 50 रुपये म्हणजे 1 किलोचे 100 रुपये. 1 किलोचे 90 रुपये स्वस्त आहे.",
          "मोठं पाकीट तेव्हाच चांगला सौदा जेव्हा ते खराब होण्याआधी पूर्ण वापरलं जाईल."
        ],
        "fill": {
          "bank": [
            "एकक",
            "किलो",
            "तुलना",
            "मोठं",
            "खराब",
            "टॅग"
          ],
          "items": [
            [
              "पाकिटांची तुलना करायला प्रति @@ किंमत काढ.",
              "एकक"
            ],
            [
              "500 ग्रॅमचे 50 रुपये म्हणजे प्रति @@ 100 रुपये.",
              "किलो"
            ],
            [
              "वेगवेगळ्या मापांच्या पाकिटांची फक्त टॅगवरून @@ करता येत नाही.",
              "तुलना"
            ],
            [
              "@@ पाकीट नेहमी स्वस्त असतंच असं नाही.",
              "मोठं"
            ],
            [
              "अन्न संपण्याआधीच @@ झालं तर मोठं पाकीट वाया जातं.",
              "खराब"
            ]
          ]
        },
        "sortTitle": "शहाणा सौदा की चुकीचा सौदा?",
        "sortOpts": [
          {
            "k": "smart",
            "t": "शहाणा सौदा"
          },
          {
            "k": "poor",
            "t": "चुकीचा सौदा"
          }
        ],
        "sort": [
          {
            "icon": "sack",
            "label": "100 ऐवजी 90 रुपये किलो तांदूळ, जो कुटुंब पूर्ण वापरेल",
            "a": "smart"
          },
          {
            "icon": "mango",
            "label": "केळ्यांचं मोठं पाकीट जे तीन दिवसांत खराब होईल",
            "a": "poor"
          },
          {
            "icon": "tag",
            "label": "फक्त टॅगवर लहान आकडा आहे म्हणून पाकीट निवडणं",
            "a": "poor"
          },
          {
            "icon": "magnifier",
            "label": "घेण्याआधी प्रति किलो किंमत काढणं",
            "a": "smart"
          },
          {
            "icon": "clock",
            "label": "पाकिटावरच्या तारखेआधी वापरता येईल त्यापेक्षा खूप जास्त घेणं",
            "a": "poor"
          }
        ],
        "tf": [
          {
            "q": "ज्या पाकिटाच्या टॅगवर कमी किंमत आहे ते नेहमी स्वस्त असतं.",
            "a": false
          },
          {
            "q": "प्रति एकक किमतीमुळे वेगवेगळ्या मापांच्या पाकिटांची तुलना करता येते.",
            "a": true
          },
          {
            "q": "मोठं पाकीट तेव्हाच पैसे वाचवतं जेव्हा ते पूर्ण वापरलं जातं.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "250 ग्रॅमचं पाकीट 30 रुपयांचं आहे. 1 किलोची किंमत किती?",
            "opts": [
              "120",
              "30",
              "60"
            ],
            "a": 0
          },
          {
            "q": "पाकीट A: 2 किलोचे 180 रुपये. पाकीट B: 1 किलोचे 95 रुपये. प्रति किलो कोणतं स्वस्त?",
            "opts": [
              "पाकीट A",
              "पाकीट B",
              "सारखं"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की घेण्याआधी प्रति एकक किंमत काढेन, आणि फक्त तितकंच घेईन जितकं मी खरंच वापरेन."
      }
    }
  },
  {
    "slug": "family-budget",
    "status": "live",
    "color": "#b2f7ef",
    "title": {
      "en": "{name} and the Four Envelopes",
      "hi": "{name} और चार लिफ़ाफ़े",
      "mr": "{name} आणि चार लिफाफे"
    },
    "cardTitle": {
      "en": "The Four Envelopes",
      "hi": "चार लिफ़ाफ़े",
      "mr": "चार लिफाफे"
    },
    "subtitle": {
      "en": "Making a family budget",
      "hi": "घर का बजट बनाना",
      "mr": "घरचं बजेट बनवणं"
    },
    "topic": {
      "en": "Budgeting",
      "hi": "बजट",
      "mr": "बजेट"
    },
    "stops": {
      "en": [
        "Money Day",
        "Four Envelopes",
        "The Surprise",
        "Month End"
      ],
      "hi": [
        "पैसों का दिन",
        "चार लिफ़ाफ़े",
        "अचानक खर्च",
        "महीने का अंत"
      ],
      "mr": [
        "पैशांचा दिवस",
        "चार लिफाफे",
        "अचानक खर्च",
        "महिन्याचा शेवट"
      ]
    },
    "scenes": [
      "Aaji spreads ten 1,000 rupee notes on the cot while you wonder how to make them last.",
      "Four envelopes sit on the table: Food, School and Home, Savings and Fun, each with a picture above it.",
      "The pressure cooker has cracked. Aaji calmly takes the Savings envelope.",
      "At the end of the month, you drop the leftover coin into Gullu. A calendar shows every day ticked."
    ],
    "story": {
      "en": [
        "It was the first of the month. Aaji spread ten crisp 1,000 rupee notes on the cot. \"This is all the money our family has for the whole month, {name},\" she said. \"How do we make it last?\" You scratched your head. Gullu hopped up on the cot. \"Easy! Make a budget. A budget is a plan for every rupee before you spend it.\"",
        "Aaji took out four envelopes. You wrote a name on each one with a pencil: FOOD, SCHOOL AND HOME, SAVINGS and FUN. Then you counted out the money: 4,000 for Food, 3,000 for School and Home, 2,000 for Savings and 1,000 for Fun. \"Four, plus three, plus two, plus one,\" you added. \"Exactly ten thousand!\" Every rupee had a job.",
        "In the middle of the month, crack! The old pressure cooker split and could not be used any more. A new one cost 1,500 rupees. You gasped, but Aaji stayed calm. \"This is why we have a Savings envelope,\" she smiled. She took 1,500 rupees from Savings and brought home a new cooker. The Food envelope stayed full, and the school fees were safe. Without savings, the family might have had to borrow.",
        "At the end of the month, you opened the envelopes together. Food had 200 rupees left, because the family cooked only what they needed. Fun was empty, but you had enjoyed the fair and a kite. Savings still had 500 rupees. \"A budget is not a cage, {name},\" said Aaji. \"It is a map. Next month, we will make a new one.\" Gullu got the leftover 200 rupees. Clink!"
      ],
      "hi": [
        "महीने की पहली तारीख थी। दादी ने खाट पर हज़ार-हज़ार के दस कड़क नोट फैला दिए। \"पूरे महीने के लिए हमारे परिवार के पास बस इतने ही पैसे हैं, {name},\" उन्होंने कहा। \"इन्हें पूरे महीने कैसे चलाएँ?\" तुमने सिर खुजाया। गुल्लू उछलकर खाट पर चढ़ गया। \"आसान है! बजट बनाओ। बजट यानी खर्च करने से पहले हर रुपये की योजना।\"",
        "दादी ने चार लिफ़ाफ़े निकाले। तुमने पेंसिल से हर एक पर नाम लिखा: खाना, घर और स्कूल, बचत, और मौज। फिर पैसे गिनकर रखे: खाने के चार हज़ार, घर और स्कूल के तीन हज़ार, बचत के दो हज़ार और मौज के एक हज़ार। \"चार, तीन, दो और एक,\" तुमने जोड़ा। \"पूरे दस हज़ार!\" हर रुपये को एक काम मिल गया।",
        "महीने के बीच में अचानक चटाख! पुराना प्रेशर कुकर चटक गया और अब चल नहीं सकता था। नया कुकर डेढ़ हज़ार रुपये का था। तुम घबरा ग[[ए|ईं]], पर दादी शांत रहीं। \"इसीलिए तो बचत का लिफ़ाफ़ा है,\" वे मुस्कुराईं। उन्होंने बचत में से डेढ़ हज़ार निकाले और नया कुकर ले आईं। खाने का लिफ़ाफ़ा भरा रहा और स्कूल की फ़ीस भी सुरक्षित रही। बचत न होती तो परिवार को उधार लेना पड़ता।",
        "महीने के अंत में तुमने मिलकर सारे लिफ़ाफ़े खोले। खाने में दो सौ रुपये बचे थे, क्योंकि घर में उतना ही पकाया गया जितना ज़रूरी था। मौज वाला लिफ़ाफ़ा खाली था, पर तुमने मेले और पतंग का मज़ा लिया था। बचत में अब भी पाँच सौ रुपये थे। \"बजट पिंजरा नहीं होता, {name},\" दादी ने कहा। \"यह तो रास्ता दिखाने वाला नक्शा है। अगले महीने हम नया बनाएँगे।\" बचे हुए दो सौ रुपये गुल्लू को मिले। खन!"
      ],
      "mr": [
        "महिन्याची पहिली तारीख होती. आजीने खाटेवर हजार हजारांच्या दहा कोऱ्या नोटा पसरल्या. \"आपल्या कुटुंबाकडे पूर्ण महिन्यासाठी एवढेच पैसे आहेत, {name},\" ती म्हणाली. \"हे पूर्ण महिना कसे पुरवायचे?\" तू डोकं खाजवलंस. गल्लू टुणकन खाटेवर चढला. \"सोपं आहे! बजेट बनवा. बजेट म्हणजे पैसे खर्च करण्याआधी प्रत्येक रुपयाची योजना.\"",
        "आजीने चार लिफाफे काढले. तू पेन्सिलने प्रत्येकावर नाव लिहिलंस: जेवण, घर आणि शाळा, बचत आणि मजा. मग पैसे मोजून ठेवलेस: जेवणासाठी चार हजार, घर आणि शाळेसाठी तीन हजार, बचतीसाठी दोन हजार आणि मजेसाठी एक हजार. \"चार, तीन, दोन आणि एक,\" तू बेरीज केलीस. \"बरोबर दहा हजार!\" प्रत्येक रुपयाला एक काम मिळालं.",
        "महिन्याच्या मध्यावर अचानक तडाक्! जुना प्रेशर कुकर तडकला आणि वापरता येईना. नवा कुकर दीड हजार रुपयांचा होता. तू घाबरल[[ास|ीस]], पण आजी शांत राहिली. \"म्हणूनच तर बचतीचा लिफाफा असतो,\" ती हसली. तिने बचतीतून दीड हजार काढले आणि नवा कुकर आणला. जेवणाचा लिफाफा भरलेलाच राहिला आणि शाळेची फीही सुरक्षित राहिली. बचत नसती तर कुटुंबाला उसनवारी करावी लागली असती.",
        "महिन्याच्या शेवटी तुम्ही सगळे लिफाफे एकत्र उघडले. जेवणाच्या लिफाफ्यात दोनशे रुपये उरले होते, कारण घरात गरजेएवढंच शिजवलं गेलं. मजेचा लिफाफा रिकामा होता, पण तुम्ही जत्रा आणि पतंगाची मजा लुटली होती. बचतीत अजूनही पाचशे रुपये होते. \"बजेट म्हणजे पिंजरा नाही, {name},\" आजी म्हणाली. \"तो रस्ता दाखवणारा नकाशा आहे. पुढच्या महिन्यात आपण नवा बनवू.\" उरलेले दोनशे रुपये गल्लूला मिळाले. खळ्ळ!"
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A budget is a plan for every rupee.",
          "Needs like food and school come first.",
          "Savings help when a surprise cost comes.",
          "Check your budget every month and make a new one."
        ],
        "fill": {
          "bank": [
            "budget",
            "food",
            "savings",
            "plan",
            "month",
            "fun"
          ],
          "items": [
            [
              "A @@ is a plan for how to use your money.",
              "budget"
            ],
            [
              "Aaji put the money for rice and dal in the @@ envelope.",
              "food"
            ],
            [
              "When the cooker cracked, Aaji used money from the @@ envelope.",
              "savings"
            ],
            [
              "Every rupee has a job, so we make a @@ before spending.",
              "plan"
            ],
            [
              "At the end of the @@, we open the envelopes and check.",
              "month"
            ]
          ]
        },
        "sortTitle": "Which envelope?",
        "sortOpts": [
          {
            "k": "food",
            "t": "Food"
          },
          {
            "k": "home",
            "t": "School and Home"
          },
          {
            "k": "save",
            "t": "Savings"
          },
          {
            "k": "fun",
            "t": "Fun"
          }
        ],
        "sort": [
          {
            "icon": "bread",
            "label": "Rice and dal",
            "a": "food"
          },
          {
            "icon": "notebook",
            "label": "School fees",
            "a": "home"
          },
          {
            "icon": "coin",
            "label": "Coins for the jar",
            "a": "save"
          },
          {
            "icon": "car",
            "label": "A toy car",
            "a": "fun"
          },
          {
            "icon": "bottle",
            "label": "Medicine",
            "a": "home"
          }
        ],
        "tf": [
          {
            "q": "A budget is a plan for your money.",
            "a": true
          },
          {
            "q": "Fun money should be bigger than food money.",
            "a": false
          },
          {
            "q": "Savings help when a surprise cost comes.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "Food 4,000 + School and Home 3,000 + Savings 2,000 + Fun 1,000. What is the total?",
            "opts": [
              "9,000",
              "10,000",
              "11,000"
            ],
            "a": 1
          },
          {
            "q": "Savings had 2,000 and the cooker cost 1,500. How much is left in Savings?",
            "opts": [
              "500",
              "1,000",
              "1,500"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to give every rupee a job, to put needs first, and to keep some savings for surprises."
      },
      "hi": {
        "remember": [
          "बजट हर रुपये की योजना है।",
          "ज़रूरतें, जैसे खाना और स्कूल, पहले आती हैं।",
          "अचानक खर्च आए तो बचत काम आती है।",
          "हर महीने बजट देखो और नया बनाओ।"
        ],
        "fill": {
          "bank": [
            "बजट",
            "खाना",
            "बचत",
            "योजना",
            "महीने",
            "मौज"
          ],
          "items": [
            [
              "@@ यानी खर्च से पहले पैसों की योजना।",
              "बजट"
            ],
            [
              "दादी ने चावल-दाल के पैसे @@ वाले लिफ़ाफ़े में रखे।",
              "खाना"
            ],
            [
              "कुकर टूटा तो दादी ने @@ में से पैसे निकाले।",
              "बचत"
            ],
            [
              "हर रुपये को काम मिले, इसीलिए खर्च से पहले @@ बनाते हैं।",
              "योजना"
            ],
            [
              "@@ के अंत में हम लिफ़ाफ़े खोलकर हिसाब देखते हैं।",
              "महीने"
            ]
          ]
        },
        "sortTitle": "कौन-सा लिफ़ाफ़ा?",
        "sortOpts": [
          {
            "k": "food",
            "t": "खाना"
          },
          {
            "k": "home",
            "t": "घर और स्कूल"
          },
          {
            "k": "save",
            "t": "बचत"
          },
          {
            "k": "fun",
            "t": "मौज"
          }
        ],
        "sort": [
          {
            "icon": "bread",
            "label": "चावल-दाल",
            "a": "food"
          },
          {
            "icon": "notebook",
            "label": "स्कूल की फ़ीस",
            "a": "home"
          },
          {
            "icon": "coin",
            "label": "गुल्लू के लिए सिक्के",
            "a": "save"
          },
          {
            "icon": "car",
            "label": "खिलौना कार",
            "a": "fun"
          },
          {
            "icon": "bottle",
            "label": "दवा",
            "a": "home"
          }
        ],
        "tf": [
          {
            "q": "बजट पैसों की एक योजना है।",
            "a": true
          },
          {
            "q": "मौज का लिफ़ाफ़ा खाने के लिफ़ाफ़े से बड़ा होना चाहिए।",
            "a": false
          },
          {
            "q": "अचानक खर्च आने पर बचत काम आती है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "खाना 4,000 + घर और स्कूल 3,000 + बचत 2,000 + मौज 1,000। कुल कितने?",
            "opts": [
              "9,000",
              "10,000",
              "11,000"
            ],
            "a": 1
          },
          {
            "q": "बचत में 2,000 रुपये थे और कुकर 1,500 का आया। बचत में कितने बचे?",
            "opts": [
              "500",
              "1,000",
              "1,500"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि हर रुपये को एक काम दूँग[[ा|ी]], पहले ज़रूरतें रखूँग[[ा|ी]] और अचानक खर्च के लिए कुछ बचत रखूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "बजेट म्हणजे प्रत्येक रुपयाची योजना.",
          "गरजा, जसं जेवण आणि शाळा, आधी येतात.",
          "अचानक खर्च आला तर बचत कामी येते.",
          "दर महिन्याला बजेट तपासा आणि नवा बनवा."
        ],
        "fill": {
          "bank": [
            "बजेट",
            "जेवण",
            "बचत",
            "योजना",
            "महिन्याच्या",
            "मजा"
          ],
          "items": [
            [
              "@@ म्हणजे खर्च करण्याआधी पैशांची योजना.",
              "बजेट"
            ],
            [
              "आजीने तांदूळ-डाळीचे पैसे @@ असं नाव असलेल्या लिफाफ्यात ठेवले.",
              "जेवण"
            ],
            [
              "कुकर खराब झाला तेव्हा आजीने ज्या लिफाफ्यातून पैसे काढले त्याचं नाव @@ होतं.",
              "बचत"
            ],
            [
              "प्रत्येक रुपयाला काम मिळावं म्हणून खर्चाआधी @@ बनवतात.",
              "योजना"
            ],
            [
              "@@ शेवटी आपण लिफाफे उघडून हिशोब पाहतो.",
              "महिन्याच्या"
            ]
          ]
        },
        "sortTitle": "कोणता लिफाफा?",
        "sortOpts": [
          {
            "k": "food",
            "t": "जेवण"
          },
          {
            "k": "home",
            "t": "घर आणि शाळा"
          },
          {
            "k": "save",
            "t": "बचत"
          },
          {
            "k": "fun",
            "t": "मजा"
          }
        ],
        "sort": [
          {
            "icon": "bread",
            "label": "तांदूळ-डाळ",
            "a": "food"
          },
          {
            "icon": "notebook",
            "label": "शाळेची फी",
            "a": "home"
          },
          {
            "icon": "coin",
            "label": "गल्लूसाठी नाणी",
            "a": "save"
          },
          {
            "icon": "car",
            "label": "खेळण्यातली गाडी",
            "a": "fun"
          },
          {
            "icon": "bottle",
            "label": "औषध",
            "a": "home"
          }
        ],
        "tf": [
          {
            "q": "बजेट म्हणजे पैशांची योजना.",
            "a": true
          },
          {
            "q": "मजेचा लिफाफा जेवणाच्या लिफाफ्यापेक्षा मोठा असावा.",
            "a": false
          },
          {
            "q": "अचानक खर्च आला तर बचत कामी येते.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "जेवण 4,000 + घर आणि शाळा 3,000 + बचत 2,000 + मजा 1,000. एकूण किती?",
            "opts": [
              "9,000",
              "10,000",
              "11,000"
            ],
            "a": 1
          },
          {
            "q": "बचतीत 2,000 रुपये होते आणि कुकर 1,500 रुपयांचा आला. बचतीत किती उरले?",
            "opts": [
              "500",
              "1,000",
              "1,500"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की प्रत्येक रुपयाला एक काम देईन, आधी गरजा ठेवीन आणि अचानक खर्चासाठी थोडी बचत ठेवीन."
      }
    }
  },
  {
    "slug": "emergency-fund",
    "status": "live",
    "color": "#caffbf",
    "title": {
      "en": "{name} and the Rainy Day Jar",
      "hi": "{name} और बुरे वक़्त की बरनी",
      "mr": "{name} आणि अडीअडचणीची बरणी"
    },
    "cardTitle": {
      "en": "The Rainy Day Jar",
      "hi": "बुरे वक़्त की बरनी",
      "mr": "अडीअडचणीची बरणी"
    },
    "subtitle": {
      "en": "Why keep an emergency fund?",
      "hi": "आपातकालीन बचत क्यों ज़रूरी है?",
      "mr": "आणीबाणीसाठी बचत का हवी?"
    },
    "topic": {
      "en": "Emergency fund",
      "hi": "आपातकालीन बचत",
      "mr": "आणीबाणीची बचत"
    },
    "stops": {
      "en": [
        "The Burst Pipe",
        "The Red Tin",
        "Start a Jar",
        "A Rainy Night"
      ],
      "hi": [
        "फटा पाइप",
        "लाल डिब्बा",
        "बरनी शुरू करो",
        "बरसात की रात"
      ],
      "mr": [
        "फुटलेला पाइप",
        "लाल डबा",
        "बरणी सुरू करा",
        "पावसाळी रात्र"
      ]
    },
    "scenes": [
      "A water pipe bursts in Aaji's kitchen and sprays water everywhere while you stare in shock.",
      "Aaji opens her little red tin of emergency money. In your thought bubble, the football on sale is crossed out.",
      "On the blackboard, 10 rupees times 50 weeks makes 500, and you drop a coin into your own jar.",
      "On a rainy night, you stand safe and dry beside a jar full of coins."
    ],
    "story": {
      "en": [
        "One morning, bang! A water pipe burst in Aaji's kitchen and water sprayed everywhere. You grabbed a bucket while Aaji called a plumber. \"This will cost 2,500 rupees,\" the plumber said. You worried. Where would that money come from today? Gullu grinned. \"Don't worry, {name}. Aaji has a secret.\"",
        "Aaji opened her little red tin. Inside, notes were kept for exactly such days. \"This is my emergency fund,\" she said. \"Money kept only for sudden, urgent troubles, like a burst pipe or a trip to the hospital.\" You remembered the football on sale on your phone. \"Can we use it for that football?\" you asked. Aaji shook her head gently. \"That is a want. Before opening the tin, ask three questions: Is it urgent? Is it needed? Was it unexpected?\"",
        "That night, you decided to start your own jar. \"How much should I save?\" you asked Gullu. \"Start small and be regular,\" he said. \"10 rupees every week. In 50 weeks, 10 times 50 makes 500 rupees.\" You made a chart. \"For grown-ups, a good goal is enough money for three to six months of must-have costs, like food, rent, school fees and bills. Keep it separate from your wants money, and in a safe place you can reach quickly, like a bank savings account.\"",
        "Months later, it was a rainy night with thunder, and the lights were out. You sat inside, safe and dry, with the jar full of coins beside you. \"Look how heavy it is!\" you laughed. Aaji smiled. \"A jar like this does not stop the rain, {name}. It stops the rain from soaking your whole life. And if you ever use it, fill it up again before spending on wants.\" Gullu cheered, \"Three cheers for the Rainy Day Jar!\""
      ],
      "hi": [
        "एक सुबह धड़ाम! दादी की रसोई में पानी का पाइप फट गया और हर तरफ़ पानी फैल गया। तुमने बाल्टी उठाई और दादी ने प्लंबर को फ़ोन किया। \"इसमें ढाई हज़ार रुपये लगेंगे,\" प्लंबर बोला। तुम चिंता में पड़ ग[[ए|ईं]]। आज ही इतने पैसे कहाँ से आएँगे? गुल्लू मुस्कुराया। \"फ़िक्र मत करो {name}। दादी का एक राज़ है।\"",
        "दादी ने अपना छोटा लाल डिब्बा खोला। अंदर ऐसे ही दिनों के लिए नोट रखे थे। \"यह मेरी आपातकालीन बचत है,\" उन्होंने कहा। \"सिर्फ़ अचानक आई ज़रूरी मुसीबत के लिए, जैसे फटा पाइप या अस्पताल जाना।\" तुम्हें फ़ोन पर फ़ुटबॉल की सेल याद आ गई। \"क्या इसी से वह फ़ुटबॉल ले लें?\" तुमने पूछा। दादी ने प्यार से सिर हिलाया। \"वह चाहत है। डिब्बा खोलने से पहले तीन सवाल पूछो: क्या यह अभी ज़रूरी है? क्या यह सच में चाहिए? क्या यह अचानक आया?\"",
        "उस रात तुमने अपनी बरनी शुरू करने की ठानी। \"कितना बचाऊँ?\" तुमने गुल्लू से पूछा। \"छोटे से शुरू करो और नियम से करो,\" वह बोला। \"हर हफ़्ते दस रुपये। पचास हफ़्तों में दस गुना पचास यानी पाँच सौ रुपये।\" तुमने एक चार्ट बनाया। \"बड़ों के लिए अच्छा लक्ष्य है तीन से छह महीने के ज़रूरी ख़र्चों जितनी रक़म, जैसे खाना, किराया, स्कूल की फ़ीस और बिल। इसे अपनी चाहत वाले पैसों से अलग रखो, और ऐसी सुरक्षित जगह जहाँ से जल्दी निकल सके, जैसे बैंक का बचत खाता।\"",
        "कुछ महीनों बाद एक बरसाती रात आई, बिजली गरज रही थी और बत्ती गुल थी। तुम घर के अंदर सुरक्षित और सूखे बैठ[[े|ी]] थ[[े|ीं]], पास में सिक्कों से भरी बरनी थी। \"देखो कितनी भारी है!\" तुम हँस पड़[[े|ीं]]। दादी मुस्कुराईं। \"ऐसी बरनी बारिश नहीं रोकती, {name}। वह बारिश को तुम्हारी पूरी ज़िंदगी भिगोने से रोकती है। और अगर कभी इसे इस्तेमाल करो, तो चाहत पर ख़र्च करने से पहले इसे फिर भर दो।\" गुल्लू ने ख़ुशी से कहा, \"बुरे वक़्त की बरनी ज़िंदाबाद!\""
      ],
      "mr": [
        "एका सकाळी धडाम! आजीच्या स्वयंपाकघरातला पाण्याचा पाइप फुटला आणि सगळीकडे पाणी उडालं. तू बादली उचललीस आणि आजीने प्लंबरला फोन केला. \"यासाठी अडीच हजार रुपये लागतील,\" प्लंबर म्हणाला. तुला काळजी वाटली. आजच एवढे पैसे कुठून येणार? गल्लू हसला. \"काळजी करू नकोस {name}. आजीचं एक गुपित आहे.\"",
        "आजीने तिचा छोटा लाल डबा उघडला. आत अशाच दिवसांसाठी नोटा ठेवल्या होत्या. \"ही माझी आणीबाणीची बचत आहे,\" ती म्हणाली. \"फक्त अचानक आलेल्या तातडीच्या संकटासाठी, जसं फुटलेला पाइप किंवा दवाखान्यात जाणं.\" तुला फोनवरची फुटबॉलची सेल आठवली. \"यातून तो फुटबॉल घेऊ का?\" तू विचारलंस. आजीने प्रेमाने मान हलवली. \"ती इच्छा आहे. डबा उघडण्याआधी तीन प्रश्न विचार: हे आत्ता तातडीचं आहे का? हे खरंच हवं आहे का? हे अचानक आलं का?\"",
        "त्या रात्री तू स्वतःची बरणी सुरू करायचं ठरवलंस. \"मी किती वाचवू?\" तू गल्लूला विचारलंस. \"लहान सुरुवात कर आणि नियमित राहा,\" तो म्हणाला. \"दर आठवड्याला दहा रुपये. पन्नास आठवड्यांत दहा गुणिले पन्नास म्हणजे पाचशे रुपये.\" तू एक तक्ता बनवलास. \"मोठ्यांसाठी चांगलं ध्येय म्हणजे तीन ते सहा महिन्यांच्या गरजेच्या खर्चाइतकी रक्कम, जसं जेवण, भाडं, शाळेची फी आणि बिलं. ती तुझ्या इच्छांच्या पैशांपासून वेगळी ठेव, आणि लवकर काढता येईल अशा सुरक्षित जागी, जसं बँकेचं बचत खातं.\"",
        "काही महिन्यांनी एक पावसाळी रात्र आली, विजा कडकडत होत्या आणि लाइट गेले होते. तू घरात सुरक्षित आणि कोरडा बसल[[ा|ी]] होत[[ास|ीस]], शेजारी नाण्यांनी भरलेली बरणी होती. \"बघ किती जड आहे!\" तू हसल[[ास|ीस]]. आजी हसल्या. \"अशी बरणी पाऊस थांबवत नाही, {name}. ती पावसाला तुझं सगळं आयुष्य भिजवू देत नाही. आणि जर कधी वापरलीस, तर इच्छांवर खर्च करण्याआधी ती पुन्हा भर.\" गल्लू आनंदाने ओरडला, \"अडीअडचणीची बरणी झिंदाबाद!\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "An emergency fund is money kept only for sudden, urgent troubles.",
          "Emergency test: is it urgent, needed and unexpected? If not, it is a want.",
          "Save a little every week, and keep it separate and easy to reach.",
          "Grown-ups aim for three to six months of must-have costs."
        ],
        "fill": {
          "bank": [
            "emergency",
            "urgent",
            "week",
            "separate",
            "refill",
            "want"
          ],
          "items": [
            [
              "Money kept for sudden troubles is called an @@ fund.",
              "emergency"
            ],
            [
              "Before using it, ask: is it @@, needed and unexpected?",
              "urgent"
            ],
            [
              "Saving 10 rupees every @@ adds up to 500 in fifty weeks.",
              "week"
            ],
            [
              "Keep your emergency money @@ from your spending money.",
              "separate"
            ],
            [
              "After using it, @@ the jar before buying wants.",
              "refill"
            ]
          ]
        },
        "sortTitle": "Emergency or want?",
        "sortOpts": [
          {
            "k": "em",
            "t": "Emergency"
          },
          {
            "k": "want",
            "t": "Want"
          }
        ],
        "sort": [
          {
            "icon": "wrench",
            "label": "A water pipe bursts at home",
            "a": "em"
          },
          {
            "icon": "car",
            "label": "The newest toy car everyone is buying",
            "a": "want"
          },
          {
            "icon": "plus",
            "label": "A sudden visit to the hospital",
            "a": "em"
          },
          {
            "icon": "jalebi",
            "label": "A big treat for all your friends",
            "a": "want"
          },
          {
            "icon": "cooker",
            "label": "The only cooker breaks down",
            "a": "em"
          }
        ],
        "tf": [
          {
            "q": "An emergency fund is for sales and treats.",
            "a": false
          },
          {
            "q": "It is good to keep emergency money separate from other money.",
            "a": true
          },
          {
            "q": "Saving small amounts regularly can build a fund.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "You save 10 rupees every week. How much will you have after 20 weeks?",
            "opts": [
              "100",
              "200",
              "20"
            ],
            "a": 1
          },
          {
            "q": "A family spends 8,000 rupees a month on must-have costs. What is three months of that?",
            "opts": [
              "11,000",
              "24,000",
              "80,000"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to save a little every week, to keep it for real emergencies only, and to refill it after I use it."
      },
      "hi": {
        "remember": [
          "आपातकालीन बचत वह पैसा है जो सिर्फ़ अचानक आई ज़रूरी मुसीबत के लिए रखा जाता है।",
          "तीन सवाल: क्या यह अभी ज़रूरी है, सच में चाहिए, और अचानक आया? नहीं, तो वह चाहत है।",
          "हर हफ़्ते थोड़ा बचाओ, और उसे अलग और आसानी से निकल सकने वाली जगह रखो।",
          "बड़े लोग तीन से छह महीने के ज़रूरी ख़र्च जितना जमा करने का लक्ष्य रखते हैं।"
        ],
        "fill": {
          "bank": [
            "आपातकालीन",
            "ज़रूरी",
            "हफ़्ता",
            "अलग",
            "भरो",
            "चाहत"
          ],
          "items": [
            [
              "अचानक आई मुसीबत के लिए रखे पैसों को @@ बचत कहते हैं।",
              "आपातकालीन"
            ],
            [
              "इस्तेमाल से पहले पूछो: क्या यह अभी @@ है, सच में चाहिए और अचानक आया?",
              "ज़रूरी"
            ],
            [
              "हर @@ दस रुपये बचाओ तो पचास हफ़्तों में पाँच सौ हो जाते हैं।",
              "हफ़्ता"
            ],
            [
              "आपातकालीन पैसे अपने ख़र्च वाले पैसों से @@ रखो।",
              "अलग"
            ],
            [
              "इस्तेमाल के बाद चाहत पर ख़र्च से पहले बरनी फिर से @@।",
              "भरो"
            ]
          ]
        },
        "sortTitle": "आपात स्थिति या चाहत?",
        "sortOpts": [
          {
            "k": "em",
            "t": "आपात स्थिति"
          },
          {
            "k": "want",
            "t": "चाहत"
          }
        ],
        "sort": [
          {
            "icon": "wrench",
            "label": "घर में पानी का पाइप फट गया",
            "a": "em"
          },
          {
            "icon": "car",
            "label": "सबके पास जो नई खिलौना कार है, वही चाहिए",
            "a": "want"
          },
          {
            "icon": "plus",
            "label": "अचानक अस्पताल जाना पड़ा",
            "a": "em"
          },
          {
            "icon": "jalebi",
            "label": "सब दोस्तों को बड़ी दावत देना",
            "a": "want"
          },
          {
            "icon": "cooker",
            "label": "घर का इकलौता कुकर ख़राब हो गया",
            "a": "em"
          }
        ],
        "tf": [
          {
            "q": "आपातकालीन बचत सेल और दावतों के लिए होती है।",
            "a": false
          },
          {
            "q": "आपातकालीन पैसे बाक़ी पैसों से अलग रखना अच्छा है।",
            "a": true
          },
          {
            "q": "थोड़ी-थोड़ी नियमित बचत से भी कोष बन सकता है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "हर हफ़्ते दस रुपये बचाए जाएँ, तो बीस हफ़्तों में कितने होंगे?",
            "opts": [
              "100",
              "200",
              "20"
            ],
            "a": 1
          },
          {
            "q": "एक परिवार हर महीने ज़रूरी चीज़ों पर 8,000 रुपये ख़र्च करता है। उसके तीन महीने का ख़र्च कितना हुआ?",
            "opts": [
              "11,000",
              "24,000",
              "80,000"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि हर हफ़्ते थोड़ा बचाऊँग[[ा|ी]], उसे सिर्फ़ सच्ची आपात स्थिति के लिए रखूँग[[ा|ी]], और इस्तेमाल के बाद फिर भर दूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "आणीबाणीची बचत म्हणजे फक्त अचानक आलेल्या तातडीच्या संकटासाठी ठेवलेले पैसे.",
          "तीन प्रश्न: हे आत्ता तातडीचं, खरंच हवं आणि अचानक आलं का? नसेल तर ती इच्छा आहे.",
          "दर आठवड्याला थोडं वाचव, आणि ते वेगळं आणि सहज काढता येईल अशा जागी ठेव.",
          "मोठी माणसं तीन ते सहा महिन्यांच्या गरजेच्या खर्चाइतकी रक्कम जमवण्याचं ध्येय ठेवतात."
        ],
        "fill": {
          "bank": [
            "आणीबाणीची",
            "तातडीचं",
            "आठवडा",
            "वेगळे",
            "भर",
            "इच्छा"
          ],
          "items": [
            [
              "अचानक आलेल्या संकटासाठी ठेवलेल्या पैशांना @@ बचत म्हणतात.",
              "आणीबाणीची"
            ],
            [
              "वापरण्याआधी विचार: हे आत्ता @@, खरंच हवं आणि अचानक आलं का?",
              "तातडीचं"
            ],
            [
              "दर @@ दहा रुपये वाचवलेस तर पन्नास आठवड्यांत पाचशे होतात.",
              "आठवडा"
            ],
            [
              "आणीबाणीचे पैसे खर्चाच्या पैशांपासून @@ ठेव.",
              "वेगळे"
            ],
            [
              "वापरल्यानंतर इच्छांवर खर्च करण्याआधी बरणी पुन्हा @@.",
              "भर"
            ]
          ]
        },
        "sortTitle": "आणीबाणी की इच्छा?",
        "sortOpts": [
          {
            "k": "em",
            "t": "आणीबाणी"
          },
          {
            "k": "want",
            "t": "इच्छा"
          }
        ],
        "sort": [
          {
            "icon": "wrench",
            "label": "घरातला पाण्याचा पाइप फुटला",
            "a": "em"
          },
          {
            "icon": "car",
            "label": "सगळे घेत आहेत ती नवी खेळण्यातली कार",
            "a": "want"
          },
          {
            "icon": "plus",
            "label": "अचानक दवाखान्यात जावं लागलं",
            "a": "em"
          },
          {
            "icon": "jalebi",
            "label": "सगळ्या मित्रांना मोठी पार्टी देणं",
            "a": "want"
          },
          {
            "icon": "cooker",
            "label": "घरातला एकुलता एक कुकर बिघडला",
            "a": "em"
          }
        ],
        "tf": [
          {
            "q": "आणीबाणीची बचत सेल आणि पार्ट्यांसाठी असते.",
            "a": false
          },
          {
            "q": "आणीबाणीचे पैसे बाकीच्या पैशांपासून वेगळे ठेवणं चांगलं.",
            "a": true
          },
          {
            "q": "थोडी थोडी नियमित बचत करूनही निधी तयार होऊ शकतो.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "दर आठवड्याला दहा रुपये वाचवले, तर वीस आठवड्यांत किती होतील?",
            "opts": [
              "100",
              "200",
              "20"
            ],
            "a": 1
          },
          {
            "q": "एक कुटुंब दर महिन्याला गरजेच्या गोष्टींवर 8,000 रुपये खर्च करतं. त्याचा तीन महिन्यांचा खर्च किती?",
            "opts": [
              "11,000",
              "24,000",
              "80,000"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की दर आठवड्याला थोडी बचत करीन, ती फक्त खऱ्या आणीबाणीसाठी ठेवीन, आणि वापरल्यानंतर ती पुन्हा भरीन."
      }
    }
  },
  {
    "slug": "what-is-interest",
    "status": "live",
    "color": "#f7d6e0",
    "title": {
      "en": "{name} and the Money Tree",
      "hi": "{name} और पैसों का पेड़",
      "mr": "{name} आणि पैशांचं झाड"
    },
    "cardTitle": {
      "en": "The Money Tree",
      "hi": "पैसों का पेड़",
      "mr": "पैशांचं झाड"
    },
    "subtitle": {
      "en": "What is interest?",
      "hi": "ब्याज क्या होता है",
      "mr": "व्याज म्हणजे काय"
    },
    "topic": {
      "en": "Simple interest",
      "hi": "साधारण ब्याज",
      "mr": "साधं व्याज"
    },
    "stops": {
      "en": [
        "The Seed",
        "The Bank",
        "The Maths",
        "One Year Later"
      ],
      "hi": [
        "बीज",
        "बैंक",
        "हिसाब",
        "एक साल बाद"
      ],
      "mr": [
        "बी",
        "बँक",
        "हिशोब",
        "एका वर्षानंतर"
      ]
    },
    "scenes": [
      "Under Kaka's mango tree you hold up a big seed. Gullu watches, amazed.",
      "Meena Didi at the bank shows a board: 5 rupees extra for every 100 rupees.",
      "On a big blackboard you work out 1,000 plus 50 makes 1,050.",
      "One year later, the money tree is full of mangoes and golden coins, and Gullu catches the falling coins."
    ],
    "story": {
      "en": [
        "One hot afternoon, you sat under Kaka's big mango tree, eating a sweet mango. Inside was a big seed. \"Don't throw it away!\" said Kaka. \"Plant it, and one day it grows into a tree with hundreds of mangoes. You get much more than you planted.\" Gullu's eyes lit up. \"{name}, money can grow like that too. Come, I will show you how!\"",
        "At the bank, Meena Didi smiled. \"The bank takes the money people keep here and lends it to others who need it, like a farmer buying seeds. For letting the bank use your money, it says thank you with a little extra. That extra is called interest.\" She pointed at the board. \"This account gives 5 rupees extra for every 100 rupees you keep for a whole year.\" She added, \"The number can change, so always ask the bank.\"",
        "Back home, you did the sum on your slate. You had kept 1,000 rupees in the bank. For every 100, you get 5. There are ten hundreds in 1,000, so 10 times 5 makes 50 rupees. \"1,000 plus 50 is 1,050!\" you wrote. \"And next year,\" said Gullu, \"you earn on the extra 50 too. Your seed grows into a bigger tree.\" Under a pillow, the same 1,000 rupees would have stayed just 1,000.",
        "A year later, you and Aaji went to the bank and looked at your passbook. Didi had added 50 rupees of interest. The seed had grown! \"Patience is the water for the money tree,\" said Gullu. \"The longer you wait, the more it grows.\" But Aaji gave a warning. \"If you borrow money, you pay interest. So borrow only when you really must.\" You nodded. You hugged Gullu and planted a real mango seed too."
      ],
      "hi": [
        "एक गरम दोपहर में तुम काका के बड़े आम के पेड़ के नीचे बैठकर मीठा आम खा रह[[े|ी]] थ[[े|ीं]]। अंदर से एक बड़ी गुठली निकली। \"इसे फेंको मत!\" काका बोले। \"इसे बो दो, तो एक दिन यह ऐसा पेड़ बनेगा जिसमें सैकड़ों आम लगेंगे। जितना बोया था, उससे कहीं ज़्यादा मिलेगा।\" गुल्लू की आँखें चमक उठीं। \"{name}, पैसा भी ऐसे ही बढ़ सकता है। चलो, मैं दिखाता हूँ!\"",
        "बैंक में मीना दीदी मुस्कुराईं। \"लोग जो पैसे यहाँ रखते हैं, बैंक उन्हें ज़रूरतमंदों को उधार देता है, जैसे बीज खरीदने वाले किसान को। तुम्हारे पैसे इस्तेमाल करने के बदले बैंक धन्यवाद के रूप में थोड़ा-सा ऊपर से देता है। उसी को ब्याज कहते हैं।\" उन्होंने बोर्ड की ओर इशारा किया। \"इस खाते में पूरे एक साल तक हर सौ रुपये पर पाँच रुपये ऊपर से मिलते हैं।\" दीदी ने जोड़ा, \"यह संख्या बदल सकती है, इसलिए हमेशा बैंक से पूछ लेना।\"",
        "घर आकर तुमने पट्टी पर हिसाब लगाया। बैंक में तुमने एक हज़ार रुपये रखे थे। हर सौ पर पाँच। एक हज़ार में दस सौ होते हैं, तो दस गुना पाँच, यानी पचास रुपये। \"एक हज़ार और पचास, एक हज़ार पचास!\" तुमने लिखा। \"और अगले साल,\" गुल्लू ने कहा, \"उन पचास रुपये पर भी ब्याज मिलेगा। तुम्हारा बीज और बड़ा पेड़ बनेगा।\" तकिये के नीचे वही एक हज़ार रुपये एक हज़ार ही रहते।",
        "एक साल बाद तुम और दादी बैंक ग[[ए|ईं]] और पासबुक देखी। दीदी ने पचास रुपये ब्याज जोड़ दिया था। बीज बड़ा हो गया था! \"धीरज पैसों के पेड़ का पानी है,\" गुल्लू ने कहा। \"जितना ज़्यादा इंतज़ार, उतने ज़्यादा फल।\" पर दादी ने चेताया, \"अगर तुम उधार लोगे, तो ब्याज देना पड़ता है। इसलिए उधार तभी लो जब सच में ज़रूरी हो।\" तुमने सिर हिलाया। तुमने गुल्लू को गले लगाया और आम की एक असली गुठली भी बो दी।"
      ],
      "mr": [
        "एका रणरणत्या दुपारी तू काकांच्या मोठ्या आंब्याच्या झाडाखाली बसून गोड आंबा खात होत[[ास|ीस]]. आतून एक मोठी कोय निघाली. \"ती फेकू नकोस!\" काका म्हणाले. \"ती लाव, म्हणजे एक दिवस तिचं झाड होईल आणि त्याला शेकडो आंबे लागतील. तू लावलेल्यापेक्षा खूपच जास्त मिळेल.\" गल्लूचे डोळे चमकले. \"{name}, पैसाही असाच वाढू शकतो. चल, मी दाखवतो!\"",
        "बँकेत मीना ताई हसल्या. \"लोक इथे जे पैसे ठेवतात, ते बँक गरजूंना कर्जाने देते, जसं बियाणं घेणाऱ्या शेतकऱ्याला. तुझे पैसे वापरल्याबद्दल बँक तुला धन्यवाद म्हणून थोडे वर देते. त्यालाच व्याज म्हणतात.\" त्यांनी फळ्याकडे बोट दाखवलं. \"या खात्यात पूर्ण एक वर्ष ठेवलेल्या प्रत्येक शंभर रुपयांवर पाच रुपये वर मिळतात.\" ताईंनी पुढे सांगितलं, \"हा आकडा बदलू शकतो, म्हणून नेहमी बँकेला विचारून घे.\"",
        "घरी आल्यावर तू पाटीवर हिशोब केलास. बँकेत तू एक हजार रुपये ठेवले होतेस. प्रत्येक शंभरावर पाच. एका हजारात दहा शंभर असतात, म्हणजे दहा गुणिले पाच, पन्नास रुपये. \"एक हजार अधिक पन्नास, एक हजार पन्नास!\" तू लिहिलंस. \"आणि पुढच्या वर्षी,\" गल्लू म्हणाला, \"त्या पन्नासवरही व्याज मिळेल. तुझं बी आणखी मोठं झाड होईल.\" उशीखाली तेच एक हजार एक हजारच राहिले असते.",
        "एका वर्षानंतर तू आणि आजी बँकेत गेलात आणि पासबुक पाहिलं. ताईंनी पन्नास रुपये व्याज जमा केलं होतं. बी मोठं झालं होतं! \"संयम हे पैशांच्या झाडाचं पाणी आहे,\" गल्लू म्हणाला. \"जितकी जास्त वाट पाहशील, तितकी जास्त फळं.\" पण आजीने सावध केलं, \"तू उसने पैसे घेतलेस तर व्याज द्यावं लागतं. म्हणून उसने तेव्हाच घे जेव्हा खरंच गरज असेल.\" तू मान डोलावलीस. तू गल्लूला मिठी मारलीस आणि आंब्याची खरीखुरी कोयही लावलीस."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Interest is extra money a bank gives you for keeping money with it.",
          "5 rupees on every 100 for a year means 50 rupees on 1,000.",
          "The longer money stays, the more it grows.",
          "If you borrow, you pay interest, so borrow only when you must."
        ],
        "fill": {
          "bank": [
            "interest",
            "bank",
            "patience",
            "borrow",
            "year",
            "seed"
          ],
          "items": [
            [
              "The extra money a bank gives you is called @@.",
              "interest"
            ],
            [
              "A @@ is a place where money you keep can grow.",
              "bank"
            ],
            [
              "The bank gave 5 rupees extra on every 100 for one @@.",
              "year"
            ],
            [
              "Money needs @@ to grow, just like a mango tree.",
              "patience"
            ],
            [
              "If you @@ money from someone, you must pay interest.",
              "borrow"
            ]
          ]
        },
        "sortTitle": "Earn or pay?",
        "sortOpts": [
          {
            "k": "earn",
            "t": "Earn interest"
          },
          {
            "k": "pay",
            "t": "Pay interest"
          }
        ],
        "sort": [
          {
            "icon": "bank",
            "label": "Money kept in a bank account",
            "a": "earn"
          },
          {
            "icon": "note",
            "label": "Money borrowed from a lender",
            "a": "pay"
          },
          {
            "icon": "passbook",
            "label": "A savings account",
            "a": "earn"
          },
          {
            "icon": "",
            "label": "A loan taken to buy a cow",
            "a": "pay"
          },
          {
            "icon": "coin",
            "label": "A fixed deposit in a bank",
            "a": "earn"
          }
        ],
        "tf": [
          {
            "q": "Interest is extra money.",
            "a": true
          },
          {
            "q": "Money kept under a pillow earns interest.",
            "a": false
          },
          {
            "q": "If you borrow money, you also pay interest.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A bank gives 5 rupees on every 100 in a year. How much interest on 200 rupees in one year?",
            "opts": [
              "5",
              "10",
              "20"
            ],
            "a": 1
          },
          {
            "q": "You keep 1,000 rupees for a year, with 5 on every 100. How much will you have then?",
            "opts": [
              "1,005",
              "1,050",
              "1,500"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to be patient with my savings, to ask the bank how much interest I will get, and to borrow only when I really must."
      },
      "hi": {
        "remember": [
          "ब्याज वह अतिरिक्त पैसा है जो बैंक पैसे रखने के बदले देता है।",
          "साल भर में हर सौ पर पाँच रुपये हों, तो एक हज़ार पर पचास रुपये मिलते हैं।",
          "पैसा जितने ज़्यादा समय रहता है, उतना बढ़ता है।",
          "उधार लो तो ब्याज देना पड़ता है, इसलिए तभी लो जब ज़रूरी हो।"
        ],
        "fill": {
          "bank": [
            "ब्याज",
            "बैंक",
            "धीरज",
            "उधार",
            "साल",
            "बीज"
          ],
          "items": [
            [
              "बैंक जो ऊपर से पैसे देता है, उसे @@ कहते हैं।",
              "ब्याज"
            ],
            [
              "@@ वह जगह है जहाँ रखे हुए पैसे बढ़ सकते हैं।",
              "बैंक"
            ],
            [
              "बैंक ने एक @@ तक हर सौ रुपये पर पाँच रुपये दिए।",
              "साल"
            ],
            [
              "आम के पेड़ की तरह पैसों को भी बढ़ने के लिए @@ चाहिए।",
              "धीरज"
            ],
            [
              "किसी से पैसे @@ लोगे, तो ब्याज देना पड़ेगा।",
              "उधार"
            ]
          ]
        },
        "sortTitle": "ब्याज मिलेगा या देना पड़ेगा?",
        "sortOpts": [
          {
            "k": "earn",
            "t": "मिलेगा"
          },
          {
            "k": "pay",
            "t": "देना पड़ेगा"
          }
        ],
        "sort": [
          {
            "icon": "bank",
            "label": "बैंक खाते में रखे पैसे",
            "a": "earn"
          },
          {
            "icon": "note",
            "label": "साहूकार से लिया उधार",
            "a": "pay"
          },
          {
            "icon": "passbook",
            "label": "बचत खाता",
            "a": "earn"
          },
          {
            "icon": "",
            "label": "गाय खरीदने के लिए लिया कर्ज़",
            "a": "pay"
          },
          {
            "icon": "coin",
            "label": "बैंक में एफ़डी",
            "a": "earn"
          }
        ],
        "tf": [
          {
            "q": "ब्याज अतिरिक्त पैसा है।",
            "a": true
          },
          {
            "q": "तकिये के नीचे रखे पैसों पर ब्याज मिलता है।",
            "a": false
          },
          {
            "q": "उधार लेने पर भी ब्याज देना पड़ता है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "बैंक एक साल में हर सौ पर पाँच रुपये देता है। दो सौ रुपये पर एक साल का ब्याज कितना होगा?",
            "opts": [
              "5",
              "10",
              "20"
            ],
            "a": 1
          },
          {
            "q": "तुम एक हज़ार रुपये एक साल रखत[[े|ी]] हो, हर सौ पर पाँच। तब कुल कितने होंगे?",
            "opts": [
              "1,005",
              "1,050",
              "1,500"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अपनी बचत के साथ धीरज रखूँग[[ा|ी]], बैंक से पूछूँग[[ा|ी]] कि कितना ब्याज मिलेगा, और उधार तभी लूँग[[ा|ी]] जब सच में ज़रूरी हो।"
      },
      "mr": {
        "remember": [
          "व्याज म्हणजे पैसे बँकेत ठेवल्याबद्दल मिळणारी जास्तीची रक्कम.",
          "वर्षभर प्रत्येक शंभरावर पाच रुपये असतील तर हजारावर पन्नास रुपये मिळतात.",
          "पैसे जितका जास्त काळ राहतात, तितके वाढतात.",
          "उसने घेतलंस तर व्याज द्यावं लागतं, म्हणून गरज असेल तेव्हाच घे."
        ],
        "fill": {
          "bank": [
            "व्याज",
            "बँक",
            "संयम",
            "उसने",
            "वर्ष",
            "बी"
          ],
          "items": [
            [
              "बँक जास्तीचे जे पैसे देते त्याला @@ म्हणतात.",
              "व्याज"
            ],
            [
              "@@ ही अशी जागा आहे जिथे ठेवलेले पैसे वाढू शकतात.",
              "बँक"
            ],
            [
              "बँकेने एक @@ ठेवलेल्या प्रत्येक शंभर रुपयांवर पाच रुपये दिले.",
              "वर्ष"
            ],
            [
              "आंब्याच्या झाडाप्रमाणे पैशांनाही वाढायला @@ हवा.",
              "संयम"
            ],
            [
              "तू कुणाकडून पैसे @@ घेतलेस, तर व्याज द्यावं लागतं.",
              "उसने"
            ]
          ]
        },
        "sortTitle": "व्याज मिळेल की द्यावं लागेल?",
        "sortOpts": [
          {
            "k": "earn",
            "t": "मिळेल"
          },
          {
            "k": "pay",
            "t": "द्यावं लागेल"
          }
        ],
        "sort": [
          {
            "icon": "bank",
            "label": "बँक खात्यात ठेवलेले पैसे",
            "a": "earn"
          },
          {
            "icon": "note",
            "label": "सावकाराकडून घेतलेले उसने पैसे",
            "a": "pay"
          },
          {
            "icon": "passbook",
            "label": "बचत खातं",
            "a": "earn"
          },
          {
            "icon": "",
            "label": "गाय घेण्यासाठी घेतलेलं कर्ज",
            "a": "pay"
          },
          {
            "icon": "coin",
            "label": "बँकेतली एफडी",
            "a": "earn"
          }
        ],
        "tf": [
          {
            "q": "व्याज म्हणजे जास्तीचे पैसे.",
            "a": true
          },
          {
            "q": "उशीखाली ठेवलेल्या पैशांवर व्याज मिळतं.",
            "a": false
          },
          {
            "q": "पैसे उसने घेतले तरी व्याज द्यावं लागतं.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "बँक एका वर्षात प्रत्येक शंभरावर पाच रुपये देते. दोनशे रुपयांवर एका वर्षाचं व्याज किती?",
            "opts": [
              "5",
              "10",
              "20"
            ],
            "a": 1
          },
          {
            "q": "तू एक हजार रुपये एक वर्ष ठेवत[[ो|े]]स, प्रत्येक शंभरावर पाच. मग एकूण किती होतील?",
            "opts": [
              "1,005",
              "1,050",
              "1,500"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की माझ्या बचतीबाबत संयम ठेवीन, बँकेला किती व्याज मिळेल ते विचारीन आणि खरंच गरज असेल तेव्हाच उसने घेईन."
      }
    }
  },
  {
    "slug": "why-prices-rise",
    "status": "live",
    "color": "#f2b5d4",
    "title": {
      "en": "{name} and the Samosa Mystery",
      "hi": "{name} और समोसे का रहस्य",
      "mr": "{name} आणि समोश्याचं रहस्य"
    },
    "cardTitle": {
      "en": "The Samosa Mystery",
      "hi": "समोसे का रहस्य",
      "mr": "समोश्याचं रहस्य"
    },
    "subtitle": {
      "en": "Why do prices go up?",
      "hi": "चीज़ें महँगी क्यों होती हैं?",
      "mr": "वस्तू महाग का होतात?"
    },
    "topic": {
      "en": "Inflation",
      "hi": "महँगाई",
      "mr": "महागाई"
    },
    "stops": {
      "en": [
        "Aaji's Samosa",
        "Kaka's Shop",
        "The Onion Puzzle",
        "Stay Ahead"
      ],
      "hi": [
        "दादी का समोसा",
        "काका की दुकान",
        "प्याज़ की पहेली",
        "आगे रहो"
      ],
      "mr": [
        "आजीचा समोसा",
        "काकांचं दुकान",
        "कांद्याचं कोडं",
        "पुढे राहा"
      ]
    },
    "scenes": [
      "Aaji remembers a samosa costing 1 rupee. The stall's tag now says 15 rupees, and Gullu watches.",
      "At Kaka's shop, oil, flour and gas cylinders all have red arrows pointing up.",
      "After a dry summer, the onion stall has only three onions and a tag of 80 rupees.",
      "On the blackboard, 100 rupees becomes 105, while you and Gullu celebrate with the passbook."
    ],
    "story": {
      "en": [
        "You were walking past the samosa stall with Aaji when she sighed. \"When I was little, a hot samosa cost just 1 rupee,\" she said. \"Today it costs 15!\" You looked at the tag, and then at Gullu. \"Did the samosa shrink?\" you asked. Gullu laughed. \"No, {name}. The samosa is the same size. But prices keep creeping up, so the same rupee buys less and less. That is called inflation.\"",
        "At Kaka's shop, you asked why the samosa seller charges more now. Kaka pointed at his shelves. \"Look, {name}. Oil costs more than last year. So does flour. So does the gas cylinder for cooking. The helper's pay goes up too. When it costs more to make a samosa, the seller must charge more, or he will lose money.\" Gullu added, \"And it happens slowly, a little every year. In India, the Reserve Bank (RBI) tries to keep it small and steady, around 4 rupees in every 100 each year.\"",
        "Then came a dry summer. The rains were late, and many onion plants dried up in the fields. At the market, you saw the onion stall with only three onions. The tag said 80 rupees a kilo, much more than usual. \"Why so costly?\" you whispered. \"Very few onions, and everyone still needs onions,\" said the seller. \"When something is rare and many people want it, its price jumps.\" Gullu nodded. \"Sometimes the cost of making pushes prices up. Sometimes a shortage does.\"",
        "That night, Aaji wrote on the blackboard: 100 rupees, an arrow, 105 rupees. \"If prices rise by 5 in every 100 in a year, something that costs 100 rupees today will cost 105 next year. Money lying idle under a pillow will buy less.\" Gullu showed his passbook. \"Money in a bank earns interest, so it can grow too. It will not always keep up with prices, so keep comparing.\" You made three promises: needs first, a little saving, and asking prices at different shops before buying."
      ],
      "hi": [
        "एक दिन दादी के साथ समोसे के ठेले के पास से गुज़रते हुए तुमने उन्हें लंबी साँस लेते सुना। \"जब मैं छोटी थी, तो गरमागरम समोसा सिर्फ़ एक रुपये का मिलता था,\" उन्होंने कहा। \"आज वही पंद्रह रुपये का है!\" तुमने क़ीमत का पर्चा देखा, फिर गुल्लू को। \"क्या समोसा छोटा हो गया?\" तुमने पूछा। गुल्लू हँस पड़ा। \"नहीं {name}, समोसा उतना ही बड़ा है। बस चीज़ों के दाम धीरे-धीरे बढ़ते रहते हैं, इसलिए उतने ही रुपये में कम चीज़ मिलती है। इसी को महँगाई कहते हैं।\"",
        "काका की दुकान पर तुमने पूछा कि समोसे वाला अब ज़्यादा पैसे क्यों लेता है। काका ने अपनी अलमारी की ओर इशारा किया। \"देखो {name}, तेल पिछले साल से महँगा है। आटा भी। रसोई गैस का सिलेंडर भी। मदद करने वाले की मज़दूरी भी बढ़ती है। जब समोसा बनाना महँगा पड़ता है, तो बेचने वाले को दाम बढ़ाने पड़ते हैं, वरना उसे घाटा होगा।\" गुल्लू ने जोड़ा, \"और यह हर साल थोड़ा-थोड़ा होता है। भारत में रिज़र्व बैंक (आरबीआई) कोशिश करता है कि यह कम और स्थिर रहे, लगभग साल में हर सौ पर चार रुपये।\"",
        "फिर एक सूखी गरमी आई। बारिश देर से आई और खेतों में प्याज़ के कई पौधे सूख गए। बाज़ार में तुमने प्याज़ वाले की दुकान देखी, जहाँ बस तीन प्याज़ रखे थे। पर्चे पर लिखा था, अस्सी रुपये किलो, जो आम दिनों से बहुत ज़्यादा था। \"इतना महँगा क्यों?\" तुमने धीरे से पूछा। \"प्याज़ बहुत कम हैं और ज़रूरत सबको है,\" दुकानदार ने कहा। \"जब कोई चीज़ कम हो और बहुत लोग उसे चाहें, तो उसका दाम उछल जाता है।\" गुल्लू ने सिर हिलाया। \"कभी बनाने का ख़र्च दाम बढ़ाता है, कभी कमी।\"",
        "उस रात दादी ने ब्लैकबोर्ड पर लिखा: सौ रुपये, एक तीर, एक सौ पाँच रुपये। \"अगर साल भर में हर सौ पर पाँच रुपये दाम बढ़ें, तो आज जो चीज़ सौ रुपये की है, वह अगले साल एक सौ पाँच की होगी। तकिये के नीचे पड़े पैसे कम चीज़ें ख़रीद पाएँगे।\" गुल्लू ने अपनी पासबुक दिखाई। \"बैंक में रखे पैसों पर ब्याज मिलता है, तो वे भी बढ़ सकते हैं। पर यह हमेशा दामों के बराबर नहीं बढ़ता, इसलिए तुलना करते रहो।\" तुमने तीन वादे किए: पहले ज़रूरत की चीज़ें, थोड़ी बचत, और ख़रीदने से पहले अलग-अलग दुकानों में दाम पूछना।"
      ],
      "mr": [
        "एके दिवशी आजीसोबत समोश्याच्या गाडीजवळून जाताना आजीने मोठा उसासा सोडला. \"मी लहान असताना गरमागरम समोसा फक्त एक रुपयाला मिळायचा,\" ती म्हणाली. \"आज तोच पंधरा रुपयांना आहे!\" तू किमतीची पाटी पाहिलीस आणि मग गल्लूकडे. \"समोसा लहान झाला का?\" तू विचारलंस. गल्लू हसला. \"नाही {name}, समोसा तेवढाच आहे. फक्त वस्तूंचे भाव हळूहळू वाढत राहतात, म्हणून तेवढ्याच रुपयांत कमी वस्तू मिळते. यालाच महागाई म्हणतात.\"",
        "काकांच्या दुकानात तू विचारलंस की समोसेवाला आता जास्त पैसे का घेतो. काकांनी कपाटाकडे बोट दाखवलं. \"बघ {name}, तेल गेल्या वर्षीपेक्षा महाग आहे. पीठही. स्वयंपाकाचा गॅस सिलेंडरही. मदतनिसाचा पगारही वाढतो. समोसा बनवणं महाग पडलं की विक्रेत्याला भाव वाढवावे लागतात, नाहीतर त्याला तोटा होईल.\" गल्लूने भर घातली, \"आणि हे दरवर्षी थोडं थोडं होतं. भारतात रिझर्व्ह बँक (आरबीआय) हे कमी आणि स्थिर ठेवण्याचा प्रयत्न करते, साधारण वर्षाला प्रत्येक शंभरावर चार रुपये.\"",
        "मग उन्हाळा कोरडा गेला. पाऊस उशिरा आला आणि शेतातली कांद्याची कितीतरी रोपं सुकली. बाजारात तू कांदेवाल्याची गाडी पाहिलीस, तिथे फक्त तीन कांदे ठेवले होते. पाटीवर लिहिलं होतं, ऐंशी रुपये किलो, जे नेहमीपेक्षा खूपच जास्त होतं. \"एवढं महाग का?\" तू हळूच विचारलंस. \"कांदे खूप कमी आहेत आणि गरज सगळ्यांना आहे,\" विक्रेता म्हणाला. \"एखादी वस्तू कमी असली आणि खूप लोकांना हवी असली की तिचा भाव उसळतो.\" गल्लूने मान डोलावली. \"कधी बनवण्याचा खर्च भाव वाढवतो, कधी तुटवडा.\"",
        "त्या रात्री आजीने फळ्यावर लिहिलं: शंभर रुपये, एक बाण, एकशे पाच रुपये. \"जर वर्षभरात प्रत्येक शंभरावर पाच रुपये भाव वाढले, तर आज शंभर रुपयांची असलेली वस्तू पुढच्या वर्षी एकशे पाचला मिळेल. उशीखाली पडलेले पैसे कमी वस्तू विकत घेतील.\" गल्लूने आपलं पासबुक दाखवलं. \"बँकेत ठेवलेल्या पैशांवर व्याज मिळतं, म्हणून ते पैसेही वाढू शकतात. पण ते नेहमी भावांइतकं वाढतंच असं नाही, म्हणून तुलना करत राहा.\" तू तीन वचनं दिलीस: आधी गरजेच्या गोष्टी, थोडी बचत, आणि विकत घेण्याआधी वेगवेगळ्या दुकानांत भाव विचारणं."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Inflation means prices slowly rise, so the same money buys less.",
          "Prices go up when making things costs more, or when something becomes scarce.",
          "Saving some money and letting it earn interest helps it keep up.",
          "Needs first, wants later, and compare prices before you buy."
        ],
        "fill": {
          "bank": [
            "inflation",
            "prices",
            "needs",
            "shortage",
            "interest",
            "compare"
          ],
          "items": [
            [
              "When prices slowly rise over the years, it is called @@.",
              "inflation"
            ],
            [
              "A bad crop can cause a @@ and push prices up.",
              "shortage"
            ],
            [
              "With inflation, the same rupees buy less, because @@ rise.",
              "prices"
            ],
            [
              "Savings that earn @@ can grow instead of staying still.",
              "interest"
            ],
            [
              "Before buying, it helps to @@ prices at different shops.",
              "compare"
            ]
          ]
        },
        "sortTitle": "Why did the price go up?",
        "sortOpts": [
          {
            "k": "cost",
            "t": "Making it costs more"
          },
          {
            "k": "short",
            "t": "Too few, many want it"
          }
        ],
        "sort": [
          {
            "icon": "oil",
            "label": "Cooking oil got dearer for the samosa seller",
            "a": "cost"
          },
          {
            "icon": "onion",
            "label": "A dry summer ruined the onion crop",
            "a": "short"
          },
          {
            "icon": "cylinder",
            "label": "Gas for cooking became costlier",
            "a": "cost"
          },
          {
            "icon": "football",
            "label": "Everyone wants tickets for the big football final",
            "a": "short"
          },
          {
            "icon": "sack",
            "label": "Flour costs more, so bread costs more",
            "a": "cost"
          }
        ],
        "tf": [
          {
            "q": "Inflation means prices slowly go up over time.",
            "a": true
          },
          {
            "q": "Inflation makes the same money buy more.",
            "a": false
          },
          {
            "q": "A shortage of something can make its price jump.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A school bag costs 100 rupees now. If prices rise by 5 in every 100 this year, what will it cost next year?",
            "opts": [
              "95",
              "105",
              "150"
            ],
            "a": 1
          },
          {
            "q": "Last year, 20 rupees bought a snack. Now it costs 25. What happened?",
            "opts": [
              "Prices rose (inflation)",
              "Prices fell",
              "Nothing changed"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to spend on needs first, to save a little and let it grow, and to compare prices before I buy."
      },
      "hi": {
        "remember": [
          "महँगाई यानी चीज़ों के दाम धीरे-धीरे बढ़ना, इसलिए उतने ही पैसों में कम चीज़ मिलती है।",
          "दाम तब बढ़ते हैं जब चीज़ बनाना महँगा हो जाए, या जब किसी चीज़ की कमी हो जाए।",
          "थोड़ी बचत करके उसे ब्याज कमाने देने से पैसे आगे बने रह सकते हैं।",
          "पहले ज़रूरत, फिर चाहत, और ख़रीदने से पहले दामों की तुलना।"
        ],
        "fill": {
          "bank": [
            "महँगाई",
            "दाम",
            "ज़रूरत",
            "कमी",
            "ब्याज",
            "तुलना"
          ],
          "items": [
            [
              "जब चीज़ों के दाम सालों में धीरे-धीरे बढ़ते हैं, तो उसे @@ कहते हैं।",
              "महँगाई"
            ],
            [
              "फ़सल ख़राब होने से @@ हो जाती है और दाम बढ़ जाते हैं।",
              "कमी"
            ],
            [
              "महँगाई में उतने ही रुपये से कम चीज़ मिलती है, क्योंकि @@ बढ़ जाते हैं।",
              "दाम"
            ],
            [
              "जो बचत @@ कमाती है, वह एक जगह रुकी नहीं रहती, बढ़ सकती है।",
              "ब्याज"
            ],
            [
              "ख़रीदने से पहले अलग-अलग दुकानों के दामों की @@ करो।",
              "तुलना"
            ]
          ]
        },
        "sortTitle": "दाम क्यों बढ़ा?",
        "sortOpts": [
          {
            "k": "cost",
            "t": "बनाना महँगा हुआ"
          },
          {
            "k": "short",
            "t": "चीज़ कम, चाहने वाले ज़्यादा"
          }
        ],
        "sort": [
          {
            "icon": "oil",
            "label": "समोसे वाले के लिए खाने का तेल महँगा हो गया",
            "a": "cost"
          },
          {
            "icon": "onion",
            "label": "सूखी गरमी से प्याज़ की फ़सल बर्बाद हुई",
            "a": "short"
          },
          {
            "icon": "cylinder",
            "label": "खाना पकाने की गैस महँगी हो गई",
            "a": "cost"
          },
          {
            "icon": "football",
            "label": "फ़ुटबॉल के बड़े फ़ाइनल के टिकट सब चाहते हैं",
            "a": "short"
          },
          {
            "icon": "sack",
            "label": "आटा महँगा हुआ, इसलिए ब्रेड भी महँगी हुई",
            "a": "cost"
          }
        ],
        "tf": [
          {
            "q": "महँगाई का मतलब है कि दाम समय के साथ धीरे-धीरे बढ़ते हैं।",
            "a": true
          },
          {
            "q": "महँगाई से उतने ही पैसे में ज़्यादा चीज़ें मिलती हैं।",
            "a": false
          },
          {
            "q": "किसी चीज़ की कमी होने पर उसका दाम उछल सकता है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "स्कूल का बैग अभी सौ रुपये का है। इस साल हर सौ पर पाँच रुपये दाम बढ़ें, तो अगले साल उसका दाम क्या होगा?",
            "opts": [
              "95",
              "105",
              "150"
            ],
            "a": 1
          },
          {
            "q": "पिछले साल बीस रुपये में एक नाश्ता आता था। अब पच्चीस रुपये लगते हैं। क्या हुआ?",
            "opts": [
              "दाम बढ़े (महँगाई)",
              "दाम घटे",
              "कुछ नहीं बदला"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि पहले ज़रूरत की चीज़ों पर ख़र्च करूँग[[ा|ी]], थोड़ी बचत करके उसे बढ़ने दूँग[[ा|ी]], और ख़रीदने से पहले दामों की तुलना करूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "महागाई म्हणजे वस्तूंचे भाव हळूहळू वाढणं, म्हणून तेवढ्याच पैशांत कमी वस्तू मिळते.",
          "वस्तू बनवणं महाग झालं किंवा तिचा तुटवडा झाला की भाव वाढतात.",
          "थोडी बचत करून तिला व्याज मिळू दिलं तर पैसे पुढे राहू शकतात.",
          "आधी गरज, मग इच्छा, आणि विकत घेण्याआधी भावांची तुलना."
        ],
        "fill": {
          "bank": [
            "महागाई",
            "भाव",
            "गरज",
            "तुटवडा",
            "व्याज",
            "तुलना"
          ],
          "items": [
            [
              "वस्तूंचे भाव वर्षानुवर्षं हळूहळू वाढतात, त्याला @@ म्हणतात.",
              "महागाई"
            ],
            [
              "पीक बिघडलं की @@ होतो आणि भाव वाढतात.",
              "तुटवडा"
            ],
            [
              "महागाईत तेवढ्याच रुपयांत कमी वस्तू मिळते, कारण @@ वाढतात.",
              "भाव"
            ],
            [
              "ज्या बचतीला @@ मिळतं ती जागेवर थांबत नाही, वाढू शकते.",
              "व्याज"
            ],
            [
              "विकत घेण्याआधी वेगवेगळ्या दुकानांतल्या भावांची @@ कर.",
              "तुलना"
            ]
          ]
        },
        "sortTitle": "भाव का वाढला?",
        "sortOpts": [
          {
            "k": "cost",
            "t": "बनवणं महाग झालं"
          },
          {
            "k": "short",
            "t": "वस्तू कमी, मागणी जास्त"
          }
        ],
        "sort": [
          {
            "icon": "oil",
            "label": "समोसेवाल्यासाठी खाद्यतेल महाग झालं",
            "a": "cost"
          },
          {
            "icon": "onion",
            "label": "कोरड्या उन्हाळ्याने कांद्याचं पीक वाया गेलं",
            "a": "short"
          },
          {
            "icon": "cylinder",
            "label": "स्वयंपाकाचा गॅस महाग झाला",
            "a": "cost"
          },
          {
            "icon": "football",
            "label": "फुटबॉलच्या मोठ्या अंतिम सामन्याची तिकिटं सगळ्यांना हवी आहेत",
            "a": "short"
          },
          {
            "icon": "sack",
            "label": "पीठ महाग झालं, म्हणून पावही महाग झाला",
            "a": "cost"
          }
        ],
        "tf": [
          {
            "q": "महागाई म्हणजे वेळेनुसार भाव हळूहळू वाढणं.",
            "a": true
          },
          {
            "q": "महागाईमुळे तेवढ्याच पैशांत जास्त वस्तू मिळतात.",
            "a": false
          },
          {
            "q": "एखाद्या वस्तूचा तुटवडा झाला की तिचा भाव उसळू शकतो.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "शाळेची बॅग सध्या शंभर रुपयांची आहे. या वर्षी प्रत्येक शंभरावर पाच रुपये भाव वाढले, तर पुढच्या वर्षी तिची किंमत किती होईल?",
            "opts": [
              "95",
              "105",
              "150"
            ],
            "a": 1
          },
          {
            "q": "गेल्या वर्षी वीस रुपयांत एक खाऊ मिळायचा. आता पंचवीस रुपये लागतात. काय झालं?",
            "opts": [
              "भाव वाढले (महागाई)",
              "भाव कमी झाले",
              "काही बदललं नाही"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की आधी गरजेच्या गोष्टींवर खर्च करीन, थोडी बचत करून ती वाढू देईन, आणि विकत घेण्याआधी भावांची तुलना करीन."
      }
    }
  },
  {
    "slug": "nimbu-pani-stall",
    "status": "live",
    "color": "#ffe66d",
    "title": {
      "en": "{name} and the Nimbu Pani Stall",
      "hi": "{name} और नींबू-पानी का ठेला",
      "mr": "{name} आणि लिंबू सरबताचा स्टॉल"
    },
    "cardTitle": {
      "en": "The Nimbu Pani Stall",
      "hi": "नींबू-पानी का ठेला",
      "mr": "लिंबू सरबताचा स्टॉल"
    },
    "subtitle": {
      "en": "Cost, price and profit",
      "hi": "लागत, क़ीमत और मुनाफ़ा",
      "mr": "खर्च, किंमत आणि नफा"
    },
    "topic": {
      "en": "Profit",
      "hi": "मुनाफ़ा",
      "mr": "नफा"
    },
    "stops": {
      "en": [
        "Buying Supplies",
        "Setting the Price",
        "A Busy Afternoon",
        "Counting Coins"
      ],
      "hi": [
        "सामान की ख़रीद",
        "क़ीमत तय करना",
        "भीड़ वाली दोपहर",
        "सिक्कों की गिनती"
      ],
      "mr": [
        "सामानाची खरेदी",
        "किंमत ठरवणं",
        "गर्दीची दुपार",
        "नाणी मोजणं"
      ]
    },
    "scenes": [
      "You hand Kaka a note at his shop, where lemons and a sack of sugar sit on the counter beside a 6 rupee tag.",
      "On the blackboard, 10 minus 6 makes 4, with lemons tagged 6 and a glass tagged 10 on the table.",
      "Behind your stall you serve friends and neighbours who queue up, with a board saying 4 times 50 makes 200.",
      "At sunset you stand proudly beside four tall stacks of coins on a table, with a 200 tag."
    ],
    "story": {
      "en": [
        "It was a very hot summer. \"Everyone is thirsty,\" you said. \"Let us open a nimbu pani stall!\" You went to Kaka's shop to buy lemons, sugar, ice and paper cups. Kaka added it all up: \"For each glass, the lemon, sugar, ice and cup cost you 6 rupees.\" Gullu squealed happily. \"That 6 rupees is your cost, {name}. Cost is the money you spend to make something.\"",
        "\"How much should we charge?\" you asked. Gullu wrote on the blackboard. \"If you sell each glass for 6 rupees, you only get back what you spent. No profit. If you charge 30 rupees, nobody will buy.\" After thinking, you chose 10 rupees. \"The price is 10 rupees,\" said Gullu. \"Profit is price minus cost. 10 minus 6 makes 4 rupees profit on every glass.\"",
        "That afternoon, the stall was busy. Kids, uncles and a rickshaw driver all asked for a cold glass. By evening you had sold 50 glasses. \"Money in: 10 times 50 makes 500 rupees,\" said Gullu. \"Cost: 6 times 50 makes 300 rupees. So 500 minus 300 leaves 200 rupees of profit. Or 4 times 50 makes 200, the same answer!\"",
        "At sunset you counted the coins. \"First, put aside the 300 rupees to buy tomorrow's lemons, sugar and ice,\" said Gullu. \"Then split the 200 rupees of profit: some to save, some to spend.\" You smiled, but Gullu added gently, \"Remember, on a rainy day you may sell fewer glasses and earn less. Profit is never promised. That is why we save a part of every profit.\""
      ],
      "hi": [
        "गर्मी बहुत थी। \"सब प्यासे हैं,\" तुमने कहा। \"चलो, नींबू-पानी का ठेला लगाते हैं!\" तुम नींबू, चीनी, बर्फ़ और काग़ज़ के गिलास लेने काका की दुकान पर ग[[ए|ईं]]। काका ने सबका हिसाब जोड़ा: \"हर गिलास के पीछे नींबू, चीनी, बर्फ़ और गिलास पर तुम्हारे छह रुपये लगते हैं।\" गुल्लू ख़ुशी से चहका। \"यह छह रुपये तुम्हारी लागत है, {name}। लागत वह पैसा है जो किसी चीज़ को बनाने में ख़र्च होता है।\"",
        "\"हम कितने में बेचें?\" तुमने पूछा। गुल्लू ने ब्लैकबोर्ड पर लिखा। \"हर गिलास छह रुपये में बेचो तो बस ख़र्च हुआ पैसा लौटता है। कोई मुनाफ़ा नहीं। तीस रुपये माँगो तो कोई नहीं ख़रीदेगा।\" सोचकर तुमने दस रुपये चुने। \"क़ीमत दस रुपये,\" गुल्लू बोला। \"मुनाफ़ा यानी क़ीमत में से लागत घटाना। दस में से छह घटाओ तो हर गिलास पर चार रुपये मुनाफ़ा।\"",
        "उस दोपहर ठेले पर भीड़ रही। बच्चे, अंकल और एक रिक्शेवाले, सबने ठंडा गिलास माँगा। शाम तक तुमने पचास गिलास बेच दिए। \"आया पैसा: दस गुना पचास यानी पाँच सौ रुपये,\" गुल्लू बोला। \"लागत: छह गुना पचास यानी तीन सौ रुपये। तो पाँच सौ में से तीन सौ घटाओ, बचे दो सौ रुपये मुनाफ़ा। या चार गुना पचास यानी दो सौ, वही जवाब!\"",
        "सूरज ढलते समय तुमने सिक्के गिने। \"पहले तीन सौ रुपये अलग रखो, कल के नींबू, चीनी और बर्फ़ के लिए,\" गुल्लू बोला। \"फिर दो सौ रुपये का मुनाफ़ा बाँटो: कुछ बचत के लिए, कुछ ख़र्च के लिए।\" तुम मुस्कुरा[[ए|ईं]], पर गुल्लू ने नरमी से जोड़ा, \"याद रखो, बरसात के दिन कम गिलास बिक सकते हैं और कमाई कम हो सकती है। मुनाफ़े का वादा कभी नहीं होता। इसीलिए हम हर मुनाफ़े का एक हिस्सा बचाते हैं।\""
      ],
      "mr": [
        "उन्हाळा खूप कडक होता. \"सगळ्यांना तहान लागली आहे,\" तू म्हणाल[[ास|ीस]]. \"चला, लिंबू सरबताचा स्टॉल लावू!\" तू लिंबू, साखर, बर्फ आणि कागदी ग्लास घ्यायला काकांच्या दुकानात गेल[[ास|ीस]]. काकांनी सगळा हिशोब केला: \"प्रत्येक ग्लासामागे लिंबू, साखर, बर्फ आणि ग्लास मिळून तुला सहा रुपये लागतात.\" गल्लू आनंदाने ओरडला. \"हे सहा रुपये म्हणजे तुझा खर्च, {name}. खर्च म्हणजे एखादी गोष्ट बनवायला लागणारा पैसा.\"",
        "\"आपण किती रुपयांना विकायचं?\" तू विचारलंस. गल्लूने फळ्यावर लिहिलं. \"प्रत्येक ग्लास सहा रुपयांना विकलास तर फक्त खर्च झालेले पैसे परत येतात. नफा नाही. तीस रुपये मागितलेस तर कोणी घेणार नाही.\" विचार करून तू दहा रुपये ठरवलेस. \"किंमत दहा रुपये,\" गल्लू म्हणाला. \"नफा म्हणजे किंमत वजा खर्च. दहा वजा सहा म्हणजे प्रत्येक ग्लासावर चार रुपये नफा.\"",
        "त्या दुपारी स्टॉलवर गर्दी होती. मुलं, काका लोक आणि एक रिक्षावाला, सगळ्यांनी थंड ग्लास मागितला. संध्याकाळपर्यंत तू पन्नास ग्लास विकलेस. \"आलेले पैसे: दहा गुणिले पन्नास म्हणजे पाचशे रुपये,\" गल्लू म्हणाला. \"खर्च: सहा गुणिले पन्नास म्हणजे तीनशे रुपये. म्हणजे पाचशे वजा तीनशे, उरले दोनशे रुपये नफा. किंवा चार गुणिले पन्नास म्हणजे दोनशे, तेच उत्तर!\"",
        "सूर्यास्ताच्या वेळी तू नाणी मोजलीस. \"आधी तीनशे रुपये बाजूला ठेव, उद्याच्या लिंबू, साखर आणि बर्फासाठी,\" गल्लू म्हणाला. \"मग दोनशे रुपयांचा नफा वाटून घे: काही बचतीसाठी, काही खर्चासाठी.\" तू हसल[[ास|ीस]], पण गल्लू हळूच म्हणाला, \"लक्षात ठेव, पावसाच्या दिवशी कमी ग्लास विकले जाऊ शकतात आणि कमाई कमी होऊ शकते. नफ्याचं वचन कधीच नसतं. म्हणूनच आपण प्रत्येक नफ्याचा एक भाग बचतीला ठेवतो.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Cost is the money you spend to make or buy something.",
          "Price is what the customer pays. Profit = price − cost.",
          "Total profit = profit on one glass × glasses sold: 4 × 50 = 200.",
          "Keep money back for tomorrow's supplies, and save part of every profit. Profit is never promised."
        ],
        "fill": {
          "bank": [
            "cost",
            "price",
            "profit",
            "200",
            "lemons",
            "loss"
          ],
          "items": [
            [
              "What you spend to make one glass is the @@.",
              "cost"
            ],
            [
              "What a customer pays for one glass is the @@.",
              "price"
            ],
            [
              "Price minus cost is the @@.",
              "profit"
            ],
            [
              "4 rupees profit × 50 glasses = @@ rupees.",
              "200"
            ],
            [
              "Keep money back to buy tomorrow's @@.",
              "lemons"
            ]
          ]
        },
        "sortTitle": "Money out or money in?",
        "sortOpts": [
          {
            "k": "cost",
            "t": "Cost (money out)"
          },
          {
            "k": "inc",
            "t": "Income (money in)"
          }
        ],
        "sort": [
          {
            "icon": "lemon",
            "label": "Buying lemons for the day",
            "a": "cost"
          },
          {
            "icon": "note",
            "label": "Customers paying for their glasses",
            "a": "inc"
          },
          {
            "icon": "sack",
            "label": "Buying a sack of sugar",
            "a": "cost"
          },
          {
            "icon": "coin",
            "label": "Selling the last glass of the day",
            "a": "inc"
          },
          {
            "icon": "bucket",
            "label": "Buying water and ice",
            "a": "cost"
          }
        ],
        "tf": [
          {
            "q": "Profit is the price you charge for a glass.",
            "a": false
          },
          {
            "q": "If price equals cost, you earn no profit.",
            "a": true
          },
          {
            "q": "Some days you may sell fewer glasses and earn less.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A glass costs 8 rupees to make and sells for 15 rupees. What is the profit on one glass?",
            "opts": [
              "7",
              "8",
              "23"
            ],
            "a": 0
          },
          {
            "q": "You earn 5 rupees profit on each of 40 glasses. What is the total profit?",
            "opts": [
              "45",
              "200",
              "400"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to count my costs before I set a price, to keep money back for tomorrow, and to save a part of every profit."
      },
      "hi": {
        "remember": [
          "लागत वह पैसा है जो कोई चीज़ बनाने या ख़रीदने में ख़र्च होता है।",
          "क़ीमत वह है जो ग्राहक देता है। मुनाफ़ा = क़ीमत − लागत।",
          "कुल मुनाफ़ा = एक गिलास का मुनाफ़ा × बिके गिलास: 4 × 50 = 200।",
          "कल के सामान के लिए पैसा अलग रखो और हर मुनाफ़े का हिस्सा बचाओ। मुनाफ़े का वादा कभी नहीं होता।"
        ],
        "fill": {
          "bank": [
            "लागत",
            "क़ीमत",
            "मुनाफ़ा",
            "200",
            "नींबू",
            "घाटा"
          ],
          "items": [
            [
              "एक गिलास बनाने में जो ख़र्च होता है वह @@ है।",
              "लागत"
            ],
            [
              "एक गिलास के लिए ग्राहक जो देता है वह @@ है।",
              "क़ीमत"
            ],
            [
              "क़ीमत में से लागत घटाने पर @@ मिलता है।",
              "मुनाफ़ा"
            ],
            [
              "4 रुपये मुनाफ़ा × 50 गिलास = @@ रुपये।",
              "200"
            ],
            [
              "कल के @@ ख़रीदने के लिए पैसे अलग रखो।",
              "नींबू"
            ]
          ]
        },
        "sortTitle": "जाने वाला या आने वाला पैसा?",
        "sortOpts": [
          {
            "k": "cost",
            "t": "लागत (जाने वाला)"
          },
          {
            "k": "inc",
            "t": "आमदनी (आने वाला)"
          }
        ],
        "sort": [
          {
            "icon": "lemon",
            "label": "दिन भर के नींबू ख़रीदना",
            "a": "cost"
          },
          {
            "icon": "note",
            "label": "ग्राहकों का गिलास के पैसे देना",
            "a": "inc"
          },
          {
            "icon": "sack",
            "label": "चीनी की बोरी ख़रीदना",
            "a": "cost"
          },
          {
            "icon": "coin",
            "label": "दिन का आख़िरी गिलास बेचना",
            "a": "inc"
          },
          {
            "icon": "bucket",
            "label": "पानी और बर्फ़ ख़रीदना",
            "a": "cost"
          }
        ],
        "tf": [
          {
            "q": "मुनाफ़ा वही है जो तुम एक गिलास की क़ीमत रखते हो।",
            "a": false
          },
          {
            "q": "क़ीमत और लागत बराबर हो तो कोई मुनाफ़ा नहीं होता।",
            "a": true
          },
          {
            "q": "कुछ दिन कम गिलास बिक सकते हैं और कमाई कम हो सकती है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एक गिलास बनाने में 8 रुपये लगते हैं और वह 15 रुपये में बिकता है। एक गिलास पर मुनाफ़ा कितना है?",
            "opts": [
              "7",
              "8",
              "23"
            ],
            "a": 0
          },
          {
            "q": "40 गिलासों में से हर एक पर 5 रुपये मुनाफ़ा होता है। कुल मुनाफ़ा कितना हुआ?",
            "opts": [
              "45",
              "200",
              "400"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि क़ीमत तय करने से पहले अपनी लागत गिनूँग[[ा|ी]], कल के लिए पैसा अलग रखूँग[[ा|ी]], और हर मुनाफ़े का एक हिस्सा बचाऊँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "खर्च म्हणजे एखादी गोष्ट बनवायला किंवा घ्यायला लागणारा पैसा.",
          "किंमत म्हणजे ग्राहक जे देतो ते. नफा = किंमत − खर्च.",
          "एकूण नफा = एका ग्लासावरचा नफा × विकलेले ग्लास: 4 × 50 = 200.",
          "उद्याच्या सामानासाठी पैसे बाजूला ठेव आणि प्रत्येक नफ्याचा भाग वाचव. नफ्याचं वचन कधीच नसतं."
        ],
        "fill": {
          "bank": [
            "खर्च",
            "किंमत",
            "नफा",
            "200",
            "लिंबं",
            "तोटा"
          ],
          "items": [
            [
              "एक ग्लास बनवायला जे लागतं तो @@.",
              "खर्च"
            ],
            [
              "एका ग्लाससाठी ग्राहक जे देतो ती @@.",
              "किंमत"
            ],
            [
              "किंमत वजा खर्च म्हणजे @@.",
              "नफा"
            ],
            [
              "4 रुपये नफा × 50 ग्लास = @@ रुपये.",
              "200"
            ],
            [
              "उद्याची @@ घ्यायला पैसे बाजूला ठेव.",
              "लिंबं"
            ]
          ]
        },
        "sortTitle": "जाणारा की येणारा पैसा?",
        "sortOpts": [
          {
            "k": "cost",
            "t": "खर्च (जाणारा)"
          },
          {
            "k": "inc",
            "t": "उत्पन्न (येणारा)"
          }
        ],
        "sort": [
          {
            "icon": "lemon",
            "label": "दिवसभराचे लिंबू घेणं",
            "a": "cost"
          },
          {
            "icon": "note",
            "label": "ग्राहकांनी ग्लासचे पैसे देणं",
            "a": "inc"
          },
          {
            "icon": "sack",
            "label": "साखरेचं पोतं घेणं",
            "a": "cost"
          },
          {
            "icon": "coin",
            "label": "दिवसाचा शेवटचा ग्लास विकणं",
            "a": "inc"
          },
          {
            "icon": "bucket",
            "label": "पाणी आणि बर्फ घेणं",
            "a": "cost"
          }
        ],
        "tf": [
          {
            "q": "नफा म्हणजे तू एका ग्लाससाठी ठेवलेली किंमत.",
            "a": false
          },
          {
            "q": "किंमत आणि खर्च सारखे असतील तर नफा होत नाही.",
            "a": true
          },
          {
            "q": "काही दिवशी कमी ग्लास विकले जाऊ शकतात आणि कमाई कमी होऊ शकते.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एक ग्लास बनवायला 8 रुपये लागतात आणि तो 15 रुपयांना विकला जातो. एका ग्लासावर नफा किती?",
            "opts": [
              "7",
              "8",
              "23"
            ],
            "a": 0
          },
          {
            "q": "40 ग्लासांपैकी प्रत्येकावर 5 रुपये नफा होतो. एकूण नफा किती?",
            "opts": [
              "45",
              "200",
              "400"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की किंमत ठरवण्याआधी माझा खर्च मोजीन, उद्यासाठी पैसे बाजूला ठेवीन, आणि प्रत्येक नफ्याचा एक भाग वाचवीन."
      }
    }
  },
  {
    "slug": "phone-scams",
    "status": "live",
    "color": "#ffb4a2",
    "title": {
      "en": "{name} and the Fraud Fox",
      "hi": "{name} और ठग लोमड़ी",
      "mr": "{name} आणि लबाड कोल्हा"
    },
    "cardTitle": {
      "en": "The Fraud Fox",
      "hi": "ठग लोमड़ी",
      "mr": "लबाड कोल्हा"
    },
    "subtitle": {
      "en": "Stay safe from UPI and phone scams",
      "hi": "UPI और फ़ोन ठगी से बचो",
      "mr": "UPI आणि फोन फसवणुकीपासून वाचा"
    },
    "topic": {
      "en": "Scams",
      "hi": "ठगी",
      "mr": "फसवणूक"
    },
    "stops": {
      "en": [
        "The Call",
        "Stop!",
        "Three Nevers",
        "Tell and Report"
      ],
      "hi": [
        "वह फ़ोन",
        "रुको!",
        "तीन कभी नहीं",
        "बताओ और शिकायत करो"
      ],
      "mr": [
        "तो फोन",
        "थांब!",
        "तीन कधीच नाही",
        "सांगा आणि तक्रार करा"
      ]
    },
    "scenes": [
      "Aaji's phone rings with a sly fox on the screen. A bubble shows a message asking for an OTP.",
      "You gently take the phone while a big red stop sign appears, and Gullu watches.",
      "On the board, three things are crossed out: the OTP, the card and PIN, and the QR code used to receive money.",
      "You hold the phone showing 1930 while the fox runs away and the shield glows."
    ],
    "story": {
      "en": [
        "One afternoon, Aaji's phone rang. \"Hello Madam, I am calling from your bank,\" said a smooth voice. \"Your account will be blocked in ten minutes! Tell me the OTP that just came on your phone.\" Aaji's hands trembled. \"Oh dear, my savings!\" You looked at the screen. It was an unknown number. Gullu whispered, \"{name}, this smells like a fox!\"",
        "You gently took the phone. \"Aaji, please wait.\" Gullu said, \"Remember: a real bank never asks for your OTP, PIN or password, not on a call and not in a message. Real problems do not need to be solved in ten minutes. Scammers hurry you so you cannot think.\" You pressed the red button and ended the call. Then you called the bank number printed on the back of Aaji's card. The answer came: \"Your account is perfectly fine.\"",
        "That evening, you and Gullu made a board of Three Nevers. One: never tell anyone your OTP. Two: never tell your PIN, card number or CVV. Three: never scan a QR code or enter your PIN to \"receive\" money, because a PIN is only for paying. Gullu added, \"Be careful with prize messages, strange links, and anyone who asks you to install a screen-sharing app. If something sounds too good or too scary, stop and ask a grown-up.\"",
        "A few days later, Aaji got a message: \"You have won a lottery! Click here.\" She showed it to you at once, and you both laughed and deleted it. \"And if someone ever does cheat you,\" you said, \"act fast. Call the cyber crime helpline 1930 and tell your bank right away. Quick action can save money.\" Gullu nodded. \"There is no shame in being tricked, {name}. The shame is in hiding it.\" The fox slunk away."
      ],
      "hi": [
        "एक दोपहर दादी का फ़ोन बजा। \"हेलो मैडम, मैं आपके बैंक से बोल रहा हूँ,\" एक मीठी आवाज़ बोली। \"आपका खाता दस मिनट में बंद हो जाएगा! अभी आपके फ़ोन पर जो OTP आया है, वह बताइए।\" दादी के हाथ काँपने लगे। \"अरे, मेरी बचत!\" तुमने स्क्रीन देखी। नंबर अनजान था। गुल्लू ने फुसफुसाकर कहा, \"{name}, यह तो लोमड़ी की चाल लगती है!\"",
        "तुमने धीरे से फ़ोन ले लिया। \"दादी, ज़रा रुकिए।\" गुल्लू बोला, \"याद रखो: असली बैंक कभी तुम्हारा OTP, पिन या पासवर्ड नहीं माँगता, न फ़ोन पर, न मैसेज में। असली समस्या दस मिनट में हल करने की नहीं होती। ठग जल्दबाज़ी इसलिए मचाते हैं ताकि तुम सोच न सको।\" तुमने लाल बटन दबाकर कॉल काट दी। फिर तुमने दादी के कार्ड के पीछे छपे बैंक के नंबर पर फ़ोन किया। जवाब मिला, \"आपका खाता बिलकुल ठीक है।\"",
        "उस शाम तुमने और गुल्लू ने \"तीन कभी नहीं\" का एक बोर्ड बनाया। एक: OTP किसी को कभी मत बताओ। दो: अपना पिन, कार्ड नंबर या CVV किसी को मत बताओ। तीन: पैसे \"पाने\" के लिए कोई QR कोड स्कैन मत करो और पिन मत डालो, क्योंकि पिन सिर्फ़ पैसे देने के लिए डाला जाता है। गुल्लू ने जोड़ा, \"इनाम वाले मैसेज, अजीब लिंक, और स्क्रीन दिखाने वाला कोई ऐप डलवाने वाले से सावधान रहो। कोई बात बहुत अच्छी या बहुत डरावनी लगे, तो रुको और किसी बड़े से पूछो।\"",
        "कुछ दिन बाद दादी के पास मैसेज आया: \"आपने लॉटरी जीती है! यहाँ क्लिक करें।\" उन्होंने तुरंत तुम्हें दिखाया और तुम दोनों हँस पड़[[े|ीं]], फिर मैसेज मिटा दिया। \"और अगर कोई कभी सच में ठग ले,\" तुमने कहा, \"तो तुरंत काम करो। साइबर अपराध हेल्पलाइन 1930 पर फ़ोन करो और बैंक को फ़ौरन बताओ। जल्दी करने से पैसे बच सकते हैं।\" गुल्लू ने सिर हिलाया। \"ठगे जाने में शर्म नहीं है, {name}। छिपाने में है।\" लोमड़ी दुम दबाकर भाग गई।"
      ],
      "mr": [
        "एका दुपारी आजीचा फोन वाजला. \"हॅलो मॅडम, मी तुमच्या बँकेतून बोलतोय,\" एक गोड आवाज म्हणाला. \"तुमचं खातं दहा मिनिटांत बंद होणार आहे! आत्ता तुमच्या फोनवर जो OTP आला आहे तो सांगा.\" आजीचे हात थरथरू लागले. \"अरे देवा, माझी बचत!\" तू स्क्रीन पाहिलीस. नंबर अनोळखी होता. गल्लू कुजबुजला, \"{name}, हा तर कोल्ह्याचा डाव वाटतो!\"",
        "तू हळूच फोन घेतलास. \"आजी, जरा थांबा.\" गल्लू म्हणाला, \"लक्षात ठेव: खरी बँक कधीही तुझा OTP, पिन किंवा पासवर्ड मागत नाही, ना फोनवर, ना मेसेजमध्ये. खऱ्या अडचणी दहा मिनिटांत सोडवायच्या नसतात. फसवणूक करणारे घाई करतात, म्हणजे तुला विचार करता येणार नाही.\" तू लाल बटण दाबून कॉल कट केलास. मग तू आजीच्या कार्डामागे छापलेल्या बँकेच्या नंबरवर फोन केलास. उत्तर आलं, \"तुमचं खातं अगदी ठीक आहे.\"",
        "त्या संध्याकाळी तू आणि गल्लूने \"तीन कधीच नाही\" चा फलक बनवला. एक: OTP कोणालाही कधी सांगू नकोस. दोन: तुझा पिन, कार्ड नंबर किंवा CVV कोणालाही सांगू नकोस. तीन: पैसे \"मिळवण्यासाठी\" कोणताही QR कोड स्कॅन करू नकोस आणि पिन टाकू नकोस, कारण पिन फक्त पैसे देण्यासाठी टाकतात. गल्लू पुढे म्हणाला, \"बक्षिसाचे मेसेज, विचित्र लिंक आणि स्क्रीन दाखवणारं अ‍ॅप टाकायला सांगणाऱ्यांपासून सावध राहा. एखादी गोष्ट खूप छान किंवा खूप भीतीदायक वाटली, तर थांब आणि मोठ्यांना विचार.\"",
        "काही दिवसांनी आजीला मेसेज आला: \"तुम्ही लॉटरी जिंकली आहे! इथे क्लिक करा.\" तिने लगेच तुला दाखवला आणि तुम्ही दोघं हसलात, मग मेसेज डिलीट केला. \"आणि जर कधी कोणी खरंच फसवलं,\" तू म्हणाल[[ास|ीस]], \"तर लगेच कृती करा. सायबर गुन्हे हेल्पलाइन 1930 वर फोन करा आणि बँकेला ताबडतोब कळवा. लवकर केल्याने पैसे वाचू शकतात.\" गल्लूने मान डोलावली. \"फसवलं जाण्यात लाज नाही, {name}. लपवण्यात आहे.\" कोल्हा शेपूट घालून पळाला."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A real bank never asks for your OTP, PIN or password.",
          "Scammers use fear and hurry. Stop, breathe, and ask a grown-up.",
          "You enter your UPI PIN only to pay, never to receive money.",
          "If you are cheated, call 1930 and tell your bank right away."
        ],
        "fill": {
          "bank": [
            "OTP",
            "PIN",
            "stop",
            "link",
            "1930",
            "bank"
          ],
          "items": [
            [
              "Never tell anyone the @@ that comes on your phone.",
              "OTP"
            ],
            [
              "You enter your UPI @@ only when you pay someone.",
              "PIN"
            ],
            [
              "If a call scares or rushes you, @@ and think.",
              "stop"
            ],
            [
              "Do not click a @@ in a prize message.",
              "link"
            ],
            [
              "If you are cheated, call @@ and tell your bank.",
              "1930"
            ]
          ]
        },
        "sortTitle": "Safe or scam?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "Safe"
          },
          {
            "k": "scam",
            "t": "Scam"
          }
        ],
        "sort": [
          {
            "icon": "fakecall",
            "label": "A caller says \"Tell me your OTP or your account closes\"",
            "a": "scam"
          },
          {
            "icon": "qr",
            "label": "Scanning the shopkeeper's QR code and entering your PIN to pay",
            "a": "safe"
          },
          {
            "icon": "envelope",
            "label": "A message says \"You won 10 lakh rupees! Click this link\"",
            "a": "scam"
          },
          {
            "icon": "lock",
            "label": "Someone asks for your UPI PIN so they can \"send you money\"",
            "a": "scam"
          },
          {
            "icon": "shield",
            "label": "Calling the number printed on the back of your bank card",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "A real bank may ask for your OTP on a phone call.",
            "a": false
          },
          {
            "q": "Scammers like to hurry you so you cannot think.",
            "a": true
          },
          {
            "q": "You must enter your UPI PIN to receive money.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "A caller says you won a prize and asks you to pay 500 rupees first to collect it. What should you do?",
            "opts": [
              "Pay quickly before the offer ends",
              "Hang up and tell a grown-up",
              "Share your OTP to prove it is you"
            ],
            "a": 1
          },
          {
            "q": "You were cheated online. What is the best first step?",
            "opts": [
              "Wait a week and see",
              "Call 1930 and tell your bank at once",
              "Delete the messages and stay quiet"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise never to share my OTP, PIN or card details, to stop and ask a grown-up when something feels rushed, and to report any cheating at once."
      },
      "hi": {
        "remember": [
          "असली बैंक कभी तुम्हारा OTP, पिन या पासवर्ड नहीं माँगता।",
          "ठग डर और जल्दबाज़ी का सहारा लेते हैं। रुको, गहरी साँस लो और किसी बड़े से पूछो।",
          "UPI पिन सिर्फ़ पैसे देने के लिए डालते हैं, पैसे पाने के लिए कभी नहीं।",
          "ठगे जाओ तो तुरंत 1930 पर फ़ोन करो और बैंक को बताओ।"
        ],
        "fill": {
          "bank": [
            "OTP",
            "पिन",
            "रुको",
            "लिंक",
            "1930",
            "बैंक"
          ],
          "items": [
            [
              "फ़ोन पर आया @@ किसी को कभी मत बताओ।",
              "OTP"
            ],
            [
              "UPI @@ सिर्फ़ किसी को पैसे देते समय डाला जाता है।",
              "पिन"
            ],
            [
              "कोई फ़ोन तुम्हें डराए या जल्दी मचाए, तो @@ और सोचो।",
              "रुको"
            ],
            [
              "इनाम वाले मैसेज के @@ पर क्लिक मत करो।",
              "लिंक"
            ],
            [
              "ठगे जाओ तो @@ पर फ़ोन करो और बैंक को बताओ।",
              "1930"
            ]
          ]
        },
        "sortTitle": "सुरक्षित या ठगी?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "सुरक्षित"
          },
          {
            "k": "scam",
            "t": "ठगी"
          }
        ],
        "sort": [
          {
            "icon": "fakecall",
            "label": "फ़ोन पर कोई कहता है, \"OTP बताओ वरना खाता बंद\"",
            "a": "scam"
          },
          {
            "icon": "qr",
            "label": "दुकानदार का QR कोड स्कैन करके पिन डालकर पैसे देना",
            "a": "safe"
          },
          {
            "icon": "envelope",
            "label": "मैसेज आता है, \"आपने दस लाख जीते! यह लिंक दबाइए\"",
            "a": "scam"
          },
          {
            "icon": "lock",
            "label": "कोई तुम्हारा UPI पिन माँगता है ताकि तुम्हें पैसे \"भेज\" सके",
            "a": "scam"
          },
          {
            "icon": "shield",
            "label": "बैंक कार्ड के पीछे छपे नंबर पर फ़ोन करना",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "असली बैंक फ़ोन पर तुमसे OTP माँग सकता है।",
            "a": false
          },
          {
            "q": "ठग तुम्हें जल्दी में डालना चाहते हैं ताकि तुम सोच न सको।",
            "a": true
          },
          {
            "q": "पैसे पाने के लिए UPI पिन डालना ज़रूरी है।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "कोई फ़ोन करके कहता है कि तुमने इनाम जीता है और इनाम लेने के लिए पहले पाँच सौ रुपये भेजने को कहता है। तुम्हें क्या करना चाहिए?",
            "opts": [
              "ऑफ़र ख़त्म होने से पहले जल्दी पैसे भेजना",
              "फ़ोन काटकर किसी बड़े को बताना",
              "पहचान के लिए OTP बताना"
            ],
            "a": 1
          },
          {
            "q": "ऑनलाइन ठगी हो गई। सबसे अच्छा पहला कदम क्या है?",
            "opts": [
              "एक हफ़्ता इंतज़ार करना",
              "1930 पर फ़ोन करना और बैंक को तुरंत बताना",
              "मैसेज मिटाकर चुप रहना"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अपना OTP, पिन और कार्ड की जानकारी कभी किसी को नहीं बताऊँग[[ा|ी]], जल्दबाज़ी वाली बात पर रुककर किसी बड़े से पूछूँग[[ा|ी]], और ठगी होने पर तुरंत शिकायत करूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "खरी बँक कधीही तुझा OTP, पिन किंवा पासवर्ड मागत नाही.",
          "फसवणूक करणारे भीती आणि घाई वापरतात. थांब, दीर्घ श्वास घे आणि मोठ्यांना विचार.",
          "UPI पिन फक्त पैसे देण्यासाठी टाकतात, पैसे मिळवण्यासाठी कधीच नाही.",
          "फसवणूक झाली तर लगेच 1930 वर फोन कर आणि बँकेला सांग."
        ],
        "fill": {
          "bank": [
            "OTP",
            "पिन",
            "थांब",
            "लिंक",
            "1930",
            "बँक"
          ],
          "items": [
            [
              "फोनवर आलेला @@ कोणालाही कधी सांगू नकोस.",
              "OTP"
            ],
            [
              "UPI @@ फक्त कोणाला पैसे देताना टाकतात.",
              "पिन"
            ],
            [
              "एखाद्या फोनने तुला घाबरवलं किंवा घाई केली, तर @@ आणि विचार कर.",
              "थांब"
            ],
            [
              "बक्षिसाच्या मेसेजमधल्या @@ वर क्लिक करू नकोस.",
              "लिंक"
            ],
            [
              "फसवणूक झाली तर @@ वर फोन कर आणि बँकेला सांग.",
              "1930"
            ]
          ]
        },
        "sortTitle": "सुरक्षित की फसवणूक?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "सुरक्षित"
          },
          {
            "k": "scam",
            "t": "फसवणूक"
          }
        ],
        "sort": [
          {
            "icon": "fakecall",
            "label": "फोनवर कोणी म्हणतो, \"OTP सांगा नाहीतर खातं बंद\"",
            "a": "scam"
          },
          {
            "icon": "qr",
            "label": "दुकानदाराचा QR कोड स्कॅन करून पिन टाकून पैसे देणं",
            "a": "safe"
          },
          {
            "icon": "envelope",
            "label": "मेसेज येतो, \"तुम्ही दहा लाख जिंकलात! ही लिंक दाबा\"",
            "a": "scam"
          },
          {
            "icon": "lock",
            "label": "कोणीतरी तुला \"पैसे पाठवण्यासाठी\" तुझा UPI पिन मागतो",
            "a": "scam"
          },
          {
            "icon": "shield",
            "label": "बँक कार्डाच्या मागे छापलेल्या नंबरवर फोन करणं",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "खरी बँक फोनवर तुझा OTP मागू शकते.",
            "a": false
          },
          {
            "q": "फसवणूक करणारे तुला घाईत टाकतात म्हणजे तुला विचार करता येऊ नये.",
            "a": true
          },
          {
            "q": "पैसे मिळवण्यासाठी UPI पिन टाकावा लागतो.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "कोणीतरी फोन करून सांगतं की बक्षीस जिंकलं आहे आणि ते घेण्यासाठी आधी पाचशे रुपये भरायला सांगतं. काय करावं?",
            "opts": [
              "ऑफर संपण्याआधी लगेच पैसे भरावेत",
              "फोन ठेवून मोठ्यांना सांगावं",
              "ओळख पटवण्यासाठी OTP सांगावा"
            ],
            "a": 1
          },
          {
            "q": "ऑनलाइन फसवणूक झाली. सर्वात चांगली पहिली पायरी कोणती?",
            "opts": [
              "एक आठवडा वाट पाहणं",
              "1930 वर फोन करून बँकेला लगेच सांगणं",
              "मेसेज डिलीट करून गप्प राहणं"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की माझा OTP, पिन आणि कार्डची माहिती कोणालाही सांगणार नाही, घाई करायला लावणाऱ्या गोष्टीवर थांबून मोठ्यांना विचारीन, आणि फसवणूक झाली तर लगेच तक्रार करीन."
      }
    }
  },
  {
    "slug": "journey-of-50",
    "status": "live",
    "color": "#e4c1f9",
    "title": {
      "en": "The Journey of {name}'s 50 Rupees",
      "hi": "{name} के 50 रुपये का सफ़र",
      "mr": "{name} च्या 50 रुपयांचा प्रवास"
    },
    "cardTitle": {
      "en": "The Journey of 50 Rupees",
      "hi": "50 रुपये का सफ़र",
      "mr": "50 रुपयांचा प्रवास"
    },
    "subtitle": {
      "en": "How a UPI payment works",
      "hi": "UPI भुगतान कैसे चलता है",
      "mr": "UPI पेमेंट कसं चालतं"
    },
    "topic": {
      "en": "Digital payments",
      "hi": "डिजिटल भुगतान",
      "mr": "डिजिटल पेमेंट"
    },
    "stops": {
      "en": [
        "Scan the Code",
        "Check the Name",
        "PIN Is Private",
        "The Green Tick"
      ],
      "hi": [
        "कोड स्कैन करो",
        "नाम जाँचो",
        "पिन गुप्त है",
        "हरा टिक"
      ],
      "mr": [
        "कोड स्कॅन कर",
        "नाव तपास",
        "पिन गुप्त आहे",
        "हिरवी टिक"
      ]
    },
    "scenes": [
      "You hold a phone and scan a square QR code on Kaka's stall while a 50 rupee tag hovers above.",
      "The phone shows a name card and you hold a magnifying glass over it to check the name.",
      "You think about your private PIN while a classmate leans in to look, and a no sign covers the PIN dots above.",
      "Kaka's phone shows a green tick and Kaka hands you a samosa while you smile."
    ],
    "story": {
      "en": [
        "You were hungry after school, and the samosas at Kaka's stall smelled wonderful. Today you had no cash, only the phone Aaji lets you use for payments. \"Scan the QR code and pay,\" said Kaka. Gullu curled up on your shoulder. \"Let us follow your 50 rupees on their journey, {name}. A QR code is just a picture holding Kaka's payment address. When you scan it, your phone sends a message to your bank.\"",
        "Before you pressed pay, Gullu said, \"Stop. Read the name first.\" Your phone showed the receiver's name. You lifted your magnifier and read it carefully. It matched Kaka's shop. \"Always check the name and the amount before you pay,\" said Gullu. \"If the name looks wrong, do not pay. A fake QR sticker can be pasted over a real one to send your money to a stranger.\"",
        "Just then, a classmate leaned over your shoulder. \"What is your PIN? I want to see how it works!\" Gullu squeaked, \"NO!\" You remembered: \"My UPI PIN is private. Only I type it, in my own phone, and I never tell it to anyone, not even a best friend. I will cover the screen and type it so nobody can see.\" You thanked your classmate and kept the PIN secret.",
        "Back at the stall, you checked the name and amount, typed your private PIN where nobody could see, and pressed pay. The screen showed a green tick. On Kaka's phone, a happy sound said, \"50 rupees received.\" Kaka gave you a hot samosa. \"In a few seconds your money went from your bank to his bank,\" said Gullu. \"Safe habits make it a quick, happy journey.\""
      ],
      "hi": [
        "स्कूल के बाद तुम्हें भूख लगी थी और काका की दुकान के समोसे बहुत महक रहे थे। आज तुम्हारे पास नक़द नहीं था, बस वह फ़ोन जो दादी भुगतान के लिए तुम्हें देती हैं। \"QR कोड स्कैन करो और पैसे दो,\" काका ने कहा। गुल्लू तुम्हारे कंधे पर सिमट गया। \"चलो अपने 50 रुपये का सफ़र देखें, {name}। QR कोड बस एक तस्वीर है जिसमें काका का भुगतान पता छिपा है। उसे स्कैन करते ही तुम्हारा फ़ोन तुम्हारे बैंक को संदेश भेजता है।\"",
        "भुगतान दबाने से पहले गुल्लू बोला, \"रुको। पहले नाम पढ़ो।\" फ़ोन पर पाने वाले का नाम दिखा। तुमने अपना शीशा उठाया और ध्यान से पढ़ा। वह काका की दुकान से मेल खाता था। \"भुगतान से पहले हमेशा नाम और रक़म जाँचो,\" गुल्लू बोला। \"अगर नाम ग़लत लगे तो पैसे मत दो। असली QR पर नक़ली स्टिकर चिपकाकर तुम्हारा पैसा किसी अजनबी को भेजा जा सकता है।\"",
        "तभी तुम्हारे कंधे के ऊपर से एक सहपाठी की आवाज़ आई। \"तुम्हारा पिन क्या है? मुझे देखना है कि यह कैसे चलता है!\" गुल्लू चीख़ा, \"नहीं!\" तुम्हें याद आया: \"मेरा UPI पिन गुप्त है। उसे सिर्फ़ मैं अपने फ़ोन में डालत[[ा|ी]] हूँ और किसी को नहीं बतात[[ा|ी]], अपने सबसे अच्छे दोस्त को भी नहीं। मैं स्क्रीन ढककर पिन डालूँग[[ा|ी]] ताकि कोई देख न सके।\" तुमने सहपाठी को शुक्रिया कहा और पिन को राज़ ही रखा।",
        "दुकान पर लौटकर तुमने नाम और रक़म जाँची, अपना निजी पिन ऐसे डाला कि कोई देख न सके, और भुगतान दबाया। स्क्रीन पर हरा टिक आया। काका के फ़ोन पर ख़ुशी की आवाज़ आई, \"50 रुपये मिले।\" काका ने तुम्हें गरम समोसा दिया। \"कुछ ही सेकंड में तुम्हारे बैंक से उनके बैंक तक पैसा पहुँच गया,\" गुल्लू बोला। \"सुरक्षित आदतें इस सफ़र को तेज़ और ख़ुशनुमा बनाती हैं।\""
      ],
      "mr": [
        "शाळेनंतर तुला भूक लागली होती आणि काकांच्या स्टॉलवरच्या समोशांचा वास सुटला होता. आज तुझ्याकडे रोख नव्हती, फक्त तो फोन होता जो आजी पेमेंटसाठी तुला देते. \"QR कोड स्कॅन कर आणि पैसे दे,\" काका म्हणाले. गल्लू तुझ्या खांद्यावर गुरफटला. \"चल, तुझ्या 50 रुपयांचा प्रवास बघू, {name}. QR कोड म्हणजे फक्त एक चित्र, ज्यात काकांचा पेमेंट पत्ता दडलेला असतो. तू तो स्कॅन केलास की तुझा फोन तुझ्या बँकेला संदेश पाठवतो.\"",
        "पे दाबण्याआधी गल्लू म्हणाला, \"थांब. आधी नाव वाच.\" फोनवर घेणाऱ्याचं नाव दिसलं. तू भिंग उचललंस आणि नीट वाचलंस. ते काकांच्या दुकानाशी जुळत होतं. \"पैसे देण्याआधी नेहमी नाव आणि रक्कम तपास,\" गल्लू म्हणाला. \"नाव चुकीचं वाटलं तर पैसे देऊ नकोस. खऱ्या QR वर खोटा स्टिकर चिकटवून तुझे पैसे एखाद्या अनोळखी माणसाकडे पाठवले जाऊ शकतात.\"",
        "तेवढ्यात तुझ्या खांद्यामागून एका वर्गमित्राचा आवाज आला. \"तुझा पिन काय आहे? मला बघायचंय हे कसं चालतं ते!\" गल्लू ओरडला, \"नाही!\" तुला आठवलं: \"माझा UPI पिन गुप्त आहे. तो फक्त मीच माझ्या फोनमध्ये टाकत[[ो|े]] आणि कोणालाही सांगत नाही, जिवलग मित्रालाही नाही. मी स्क्रीन झाकून पिन टाकेन म्हणजे कोणाला दिसणार नाही.\" तू वर्गमित्राला धन्यवाद दिलेस आणि पिन गुपितच ठेवलास.",
        "स्टॉलवर परत येऊन तू नाव आणि रक्कम तपासलीस, तुझा खासगी पिन कोणाला दिसणार नाही असा टाकलास, आणि पे दाबलंस. स्क्रीनवर हिरवी टिक आली. काकांच्या फोनवर आनंदी आवाज आला, \"50 रुपये मिळाले.\" काकांनी तुला गरम समोसा दिला. \"काही सेकंदांत तुझ्या बँकेतून त्यांच्या बँकेत पैसे पोहोचले,\" गल्लू म्हणाला. \"सुरक्षित सवयींमुळे हा प्रवास झटपट आणि आनंदी होतो.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A QR code holds a payment address. Scanning it starts a payment message to your bank.",
          "Check the name and the amount before you press pay.",
          "Your PIN is private. Only you type it, and you never tell anyone, not even friends.",
          "A green tick and a message from the app show that the payment went through."
        ],
        "fill": {
          "bank": [
            "QR",
            "name",
            "PIN",
            "private",
            "tick",
            "amount"
          ],
          "items": [
            [
              "A @@ code holds a payment address.",
              "QR"
            ],
            [
              "Before paying, check the @@ and the amount.",
              "name"
            ],
            [
              "Your UPI @@ is only for you to type.",
              "PIN"
            ],
            [
              "Keep your PIN @@, even from friends.",
              "private"
            ],
            [
              "After a payment, a green @@ shows it went through.",
              "tick"
            ]
          ]
        },
        "sortTitle": "Safe habit or risky habit?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "Safe habit"
          },
          {
            "k": "risk",
            "t": "Risky habit"
          }
        ],
        "sort": [
          {
            "icon": "nametag",
            "label": "Checking the receiver's name before paying",
            "a": "safe"
          },
          {
            "icon": "otp",
            "label": "Telling a friend your PIN so they can pay for you",
            "a": "risk"
          },
          {
            "icon": "lock",
            "label": "Covering the screen when you type your PIN",
            "a": "safe"
          },
          {
            "icon": "qr",
            "label": "Pressing pay without reading the amount",
            "a": "risk"
          },
          {
            "icon": "phone",
            "label": "Keeping your phone locked",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "It is fine to tell your best friend your UPI PIN.",
            "a": false
          },
          {
            "q": "You should check the receiver's name before you pay.",
            "a": true
          },
          {
            "q": "A green tick shows that a payment went through.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A samosa costs 25 rupees and you buy 2. How much do you pay?",
            "opts": [
              "50",
              "25",
              "75"
            ],
            "a": 0
          },
          {
            "q": "You meant to pay 50 rupees but typed 500. When is the best time to notice?",
            "opts": [
              "Before pressing pay",
              "After the samosa",
              "Never"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to check the name and amount before I pay, to keep my PIN private, and to look for the green tick."
      },
      "hi": {
        "remember": [
          "QR कोड में भुगतान का पता होता है। उसे स्कैन करने से तुम्हारे बैंक को भुगतान का संदेश जाता है।",
          "भुगतान दबाने से पहले नाम और रक़म जाँचो।",
          "तुम्हारा पिन गुप्त है। उसे सिर्फ़ तुम डालते हो और किसी को नहीं बताते, दोस्तों को भी नहीं।",
          "हरा टिक और ऐप का संदेश दिखाते हैं कि भुगतान हो गया।"
        ],
        "fill": {
          "bank": [
            "QR",
            "नाम",
            "पिन",
            "गुप्त",
            "टिक",
            "रक़म"
          ],
          "items": [
            [
              "@@ कोड में भुगतान का पता होता है।",
              "QR"
            ],
            [
              "भुगतान से पहले @@ और रक़म जाँचो।",
              "नाम"
            ],
            [
              "तुम्हारा UPI @@ सिर्फ़ तुम्हें डालना है।",
              "पिन"
            ],
            [
              "अपना पिन दोस्तों से भी @@ रखो।",
              "गुप्त"
            ],
            [
              "भुगतान के बाद हरा @@ दिखता है कि वह पूरा हो गया।",
              "टिक"
            ]
          ]
        },
        "sortTitle": "सुरक्षित आदत या जोखिम भरी?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "सुरक्षित आदत"
          },
          {
            "k": "risk",
            "t": "जोखिम भरी आदत"
          }
        ],
        "sort": [
          {
            "icon": "nametag",
            "label": "भुगतान से पहले पाने वाले का नाम जाँचना",
            "a": "safe"
          },
          {
            "icon": "otp",
            "label": "दोस्त को पिन बताना ताकि वह तुम्हारी जगह भुगतान कर दे",
            "a": "risk"
          },
          {
            "icon": "lock",
            "label": "पिन डालते समय स्क्रीन ढक लेना",
            "a": "safe"
          },
          {
            "icon": "qr",
            "label": "रक़म पढ़े बिना भुगतान दबा देना",
            "a": "risk"
          },
          {
            "icon": "phone",
            "label": "फ़ोन को लॉक रखना",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "अपने सबसे अच्छे दोस्त को UPI पिन बताना ठीक है।",
            "a": false
          },
          {
            "q": "भुगतान से पहले पाने वाले का नाम जाँचना चाहिए।",
            "a": true
          },
          {
            "q": "हरा टिक दिखाता है कि भुगतान पूरा हो गया।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एक समोसा 25 रुपये का है और तुम 2 ख़रीदते हो। कुल कितने रुपये दोगे?",
            "opts": [
              "50",
              "25",
              "75"
            ],
            "a": 0
          },
          {
            "q": "तुम 50 रुपये देना चाहते थे पर 500 टाइप हो गया। इसे देखने का सबसे अच्छा समय कब है?",
            "opts": [
              "भुगतान दबाने से पहले",
              "समोसा खाने के बाद",
              "कभी नहीं"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि भुगतान से पहले नाम और रक़म जाँचूँग[[ा|ी]], अपना पिन गुप्त रखूँग[[ा|ी]], और हरा टिक देखूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "QR कोडमध्ये पेमेंटचा पत्ता असतो. तो स्कॅन केला की तुझ्या बँकेला पेमेंटचा संदेश जातो.",
          "पे दाबण्याआधी नाव आणि रक्कम तपास.",
          "तुझा पिन गुप्त असतो. तो फक्त तूच टाकतोस आणि कोणालाही सांगत नाहीस, मित्रांनाही नाही.",
          "हिरवी टिक आणि अॅपचा संदेश दाखवतात की पेमेंट झालं."
        ],
        "fill": {
          "bank": [
            "QR",
            "नाव",
            "पिन",
            "गुप्त",
            "टिक",
            "रक्कम"
          ],
          "items": [
            [
              "@@ कोडमध्ये पेमेंटचा पत्ता असतो.",
              "QR"
            ],
            [
              "पैसे देण्याआधी @@ आणि रक्कम तपास.",
              "नाव"
            ],
            [
              "तुझा UPI @@ फक्त तूच टाकायचा असतो.",
              "पिन"
            ],
            [
              "तुझा पिन मित्रांपासूनही @@ ठेव.",
              "गुप्त"
            ],
            [
              "पेमेंटनंतर हिरवी @@ दिसते, म्हणजे ते पूर्ण झालं.",
              "टिक"
            ]
          ]
        },
        "sortTitle": "सुरक्षित सवय की धोकादायक?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "सुरक्षित सवय"
          },
          {
            "k": "risk",
            "t": "धोकादायक सवय"
          }
        ],
        "sort": [
          {
            "icon": "nametag",
            "label": "पैसे देण्याआधी घेणाऱ्याचं नाव तपासणं",
            "a": "safe"
          },
          {
            "icon": "otp",
            "label": "मित्राला पिन सांगणं म्हणजे तो तुझ्याऐवजी पैसे देऊ शकेल",
            "a": "risk"
          },
          {
            "icon": "lock",
            "label": "पिन टाकताना स्क्रीन झाकणं",
            "a": "safe"
          },
          {
            "icon": "qr",
            "label": "रक्कम न वाचता पे दाबणं",
            "a": "risk"
          },
          {
            "icon": "phone",
            "label": "फोन लॉक ठेवणं",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "जिवलग मित्राला UPI पिन सांगणं ठीक आहे.",
            "a": false
          },
          {
            "q": "पैसे देण्याआधी घेणाऱ्याचं नाव तपासावं.",
            "a": true
          },
          {
            "q": "हिरवी टिक दाखवते की पेमेंट पूर्ण झालं.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एक समोसा 25 रुपयांचा आहे आणि तू 2 घेतलेस. एकूण किती रुपये द्यावे लागतील?",
            "opts": [
              "50",
              "25",
              "75"
            ],
            "a": 0
          },
          {
            "q": "तुला 50 रुपये द्यायचे होते पण 500 टाइप झाले. ते लक्षात घेण्याची सर्वात चांगली वेळ कोणती?",
            "opts": [
              "पे दाबण्याआधी",
              "समोसा खाल्ल्यानंतर",
              "कधीच नाही"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की पैसे देण्याआधी नाव आणि रक्कम तपासेन, माझा पिन गुप्त ठेवेन, आणि हिरवी टिक पाहीन."
      }
    }
  },
  {
    "slug": "moneylender-or-bank",
    "status": "live",
    "color": "#cdb4db",
    "title": {
      "en": "{name} and the Leaking Roof",
      "hi": "{name} और टपकती छत",
      "mr": "{name} आणि गळकं छप्पर"
    },
    "cardTitle": {
      "en": "The Leaking Roof",
      "hi": "टपकती छत",
      "mr": "गळकं छप्पर"
    },
    "subtitle": {
      "en": "Moneylender or bank?",
      "hi": "साहूकार या बैंक?",
      "mr": "सावकार की बँक?"
    },
    "topic": {
      "en": "Borrowing",
      "hi": "कर्ज़",
      "mr": "कर्ज"
    },
    "stops": {
      "en": [
        "The Leak",
        "The Lender",
        "The Bank",
        "The Scales"
      ],
      "hi": [
        "टपकती छत",
        "साहूकार",
        "बैंक",
        "तराज़ू"
      ],
      "mr": [
        "गळकं छप्पर",
        "सावकार",
        "बँक",
        "तराजू"
      ]
    },
    "scenes": [
      "Rain drips through the ceiling into a bucket while Aaji worries about the 10,000 rupees needed to repair it.",
      "A lender sits with his big ledger. On the board you work out that 500 rupees a month for 12 months is 6,000.",
      "Meena Didi at the bank shows a form. The board says 12 in 100 on 10,000 rupees is 1,200.",
      "Scales show 6,000 rupees weighing much more than 1,200, and the repaired house shines in the sun."
    ],
    "story": {
      "en": [
        "It was monsoon, and drip, drip, drip, water leaked through Aaji's roof into a bucket. \"The roof needs mending before the big rains,\" Aaji sighed. \"It will cost 10,000 rupees, and I do not have it.\" You and Gullu looked at each other. \"Borrowing is not wrong, {name},\" said Gullu. \"But we must borrow wisely. Let's find out where to borrow from.\"",
        "Next door, a lender said, \"Come today, I will give you 10,000 rupees in five minutes. No forms. Just pay me 5 rupees on every 100 each month.\" You took out your notebook. 5 rupees on every 100 means 500 rupees on 10,000, every month. In 12 months that is 12 times 500, which makes 6,000 rupees, only as interest, and you would still owe the 10,000! \"Many lenders are honest,\" said Gullu, \"but a very high rate can crush a family. Never decide on the same day.\"",
        "The next day, you went to the bank with Aaji. Meena Didi gave you a form. \"It takes a few days and some papers,\" she said, \"but the bank will tell you everything in writing. For example, 12 rupees on every 100 each year.\" You worked it out: 12 on every 100 means 1,200 rupees on 10,000 for the whole year. \"And you get a receipt for every payment,\" said Didi. \"You can also ask how much you will pay back in total.\"",
        "That night, you drew scales. On one side 6,000, on the other 1,200. The heavy side tipped down. \"The papers take longer,\" you said, \"but the bank costs 4,800 rupees less.\" Aaji borrowed from the bank. Soon the roof was mended and the house shone in the sun. Gullu gave three rules: ask the rate for a whole year, ask the total you must pay back, and never sign a blank paper. \"And borrow only for real needs,\" Aaji added."
      ],
      "hi": [
        "बरसात का मौसम था, और टप, टप, टप... दादी की छत से पानी बाल्टी में गिर रहा था। \"बड़ी बारिश से पहले छत ठीक करवानी होगी,\" दादी ने आह भरी। \"इसमें दस हज़ार रुपये लगेंगे, और मेरे पास इतने नहीं हैं।\" तुमने और गुल्लू ने एक-दूसरे को देखा। \"उधार लेना बुरा नहीं है, {name},\" गुल्लू बोला। \"पर समझदारी से लेना चाहिए। चलो पता करें कि कहाँ से लें।\"",
        "पड़ोस के एक साहूकार ने कहा, \"आज ही आओ, पाँच मिनट में दस हज़ार रुपये दे दूँगा। कोई फ़ॉर्म नहीं। बस हर महीने हर सौ पर पाँच रुपये दे देना।\" तुमने कॉपी निकाली। हर सौ पर पाँच यानी दस हज़ार पर हर महीने पाँच सौ। बारह महीने में बारह गुना पाँच सौ, यानी छह हज़ार रुपये, सिर्फ़ ब्याज के, और दस हज़ार का कर्ज़ तब भी बाक़ी! \"बहुत से साहूकार ईमानदार होते हैं,\" गुल्लू ने कहा, \"पर ऊँची दर किसी भी परिवार की कमर तोड़ सकती है। फ़ैसला कभी उसी दिन मत करो।\"",
        "अगले दिन तुम दादी के साथ बैंक ग[[ए|ईं]]। मीना दीदी ने एक फ़ॉर्म दिया। \"इसमें कुछ दिन और कुछ काग़ज़ात लगते हैं,\" उन्होंने कहा, \"पर बैंक सब कुछ लिखकर बताएगा। जैसे, साल में हर सौ पर बारह रुपये।\" तुमने हिसाब लगाया: सौ पर बारह यानी दस हज़ार पर पूरे साल के बारह सौ। \"और हर क़िस्त की रसीद भी मिलेगी,\" दीदी ने कहा। \"तुम पूछ भी सकत[[े|ी]] हो कि कुल कितना लौटाना होगा।\"",
        "उस रात तुमने तराज़ू बनाया। एक पलड़े में छह हज़ार, दूसरे में बारह सौ। भारी पलड़ा नीचे झुक गया। \"काग़ज़ात में समय ज़्यादा लगता है,\" तुमने कहा, \"पर बैंक का ख़र्च चार हज़ार आठ सौ रुपये कम है।\" दादी ने बैंक से कर्ज़ लिया। जल्द ही छत ठीक हो गई और घर धूप में चमकने लगा। गुल्लू ने तीन नियम बताए: पूरे साल की दर पूछो, कुल कितना लौटाना है पूछो, और कभी कोरे काग़ज़ पर दस्तख़त मत करो। \"और कर्ज़ सिर्फ़ सच्ची ज़रूरत के लिए लो,\" दादी ने जोड़ा।"
      ],
      "mr": [
        "पावसाळा होता, आणि टप, टप, टप... आजीच्या छपरातून पाणी बादलीत पडत होतं. \"मोठ्या पावसाआधी छप्पर दुरुस्त करायला हवं,\" आजीने उसासा टाकला. \"त्याला दहा हजार रुपये लागतील आणि माझ्याकडे इतके नाहीत.\" तू आणि गल्लूने एकमेकांकडे पाहिलं. \"कर्ज घेणं वाईट नाही, {name},\" गल्लू म्हणाला. \"पण ते शहाणपणाने घ्यायला हवं. चल, कुठून घ्यायचं ते शोधू.\"",
        "शेजारच्या एका सावकाराने सांगितलं, \"आजच या, पाच मिनिटांत दहा हजार रुपये देतो. फॉर्म नाही. फक्त दर महिन्याला प्रत्येक शंभरावर पाच रुपये द्या.\" तू वही काढलीस. प्रत्येक शंभरावर पाच म्हणजे दहा हजारांवर दर महिन्याला पाचशे. बारा महिन्यांत बारा गुणिले पाचशे, म्हणजे सहा हजार रुपये, फक्त व्याजाचे, आणि दहा हजारांचं कर्ज तरीही बाकी! \"बरेच सावकार प्रामाणिक असतात,\" गल्लू म्हणाला, \"पण चढा दर कुठल्याही कुटुंबाचं कंबरडं मोडू शकतो. निर्णय कधीच त्याच दिवशी घेऊ नकोस.\"",
        "दुसऱ्या दिवशी तू आजीसोबत बँकेत गेल[[ास|ीस]]. मीना ताईंनी एक फॉर्म दिला. \"यात काही दिवस आणि काही कागदपत्रं लागतात,\" त्या म्हणाल्या, \"पण बँक सगळं लिहून देईल. उदाहरणार्थ, वर्षाला प्रत्येक शंभरावर बारा रुपये.\" तू हिशोब केलास: शंभरावर बारा म्हणजे दहा हजारांवर पूर्ण वर्षाचे बाराशे. \"आणि प्रत्येक हप्त्याची पावतीही मिळेल,\" ताई म्हणाल्या. \"एकूण किती परत करायचे आहेत हेही तू विचारू शकत[[ोस|ेस]].\"",
        "त्या रात्री तू तराजू काढलास. एका पारड्यात सहा हजार, दुसऱ्यात बाराशे. जड पारडं खाली झुकलं. \"कागदपत्रांना वेळ जास्त लागतो,\" तू म्हणाल[[ास|ीस]], \"पण बँकेचा खर्च चार हजार आठशे रुपयांनी कमी आहे.\" आजीने बँकेतून कर्ज घेतलं. लवकरच छप्पर दुरुस्त झालं आणि घर उन्हात चमकू लागलं. गल्लूने तीन नियम सांगितले: पूर्ण वर्षाचा दर विचारा, एकूण किती परत करायचे ते विचारा, आणि कोऱ्या कागदावर कधीच सही करू नका. \"आणि कर्ज फक्त खऱ्या गरजेसाठी घ्या,\" आजीने पुढे सांगितलं."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Borrowed money must be paid back, with interest.",
          "Compare the cost for a whole year: 5 on every 100 each month is 60 on every 100 each year.",
          "Ask for everything in writing, and keep a receipt for every payment.",
          "Never sign a blank paper, and borrow only for real needs."
        ],
        "fill": {
          "bank": [
            "borrow",
            "interest",
            "writing",
            "receipt",
            "year",
            "blank"
          ],
          "items": [
            [
              "When you @@ money, you must pay it back with interest.",
              "borrow"
            ],
            [
              "Always ask for the interest rate for a whole @@.",
              "year"
            ],
            [
              "Ask the lender to put everything in @@.",
              "writing"
            ],
            [
              "After every payment, ask for a @@.",
              "receipt"
            ],
            [
              "Never sign a @@ paper.",
              "blank"
            ]
          ]
        },
        "sortTitle": "Good sign or warning sign?",
        "sortOpts": [
          {
            "k": "good",
            "t": "Good sign"
          },
          {
            "k": "warn",
            "t": "Warning sign"
          }
        ],
        "sort": [
          {
            "icon": "paper",
            "label": "The lender gives a written paper with the interest rate",
            "a": "good"
          },
          {
            "icon": "lock",
            "label": "He asks you to sign a blank paper",
            "a": "warn"
          },
          {
            "icon": "ledger",
            "label": "He tells you the total you must pay back",
            "a": "good"
          },
          {
            "icon": "house",
            "label": "He keeps your land papers or jewellery with no receipt",
            "a": "warn"
          },
          {
            "icon": "stamp",
            "label": "Every payment gets a stamped receipt",
            "a": "good"
          }
        ],
        "tf": [
          {
            "q": "Borrowed money must be paid back with interest.",
            "a": true
          },
          {
            "q": "5 on every 100 each month is the same as 5 on every 100 each year.",
            "a": false
          },
          {
            "q": "It is a good idea to sign a paper without reading it.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "A lender charges 5 rupees on every 100 each month. How much interest on 100 rupees in a whole year?",
            "opts": [
              "5",
              "12",
              "60"
            ],
            "a": 2
          },
          {
            "q": "A loan of 10,000 rupees is taken at 12 on every 100 per year. How much interest after one year?",
            "opts": [
              "120",
              "1,200",
              "12,000"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to borrow only when I really must, to ask for the rate for a whole year in writing, and never to sign a blank paper."
      },
      "hi": {
        "remember": [
          "उधार लिए पैसे ब्याज के साथ लौटाने पड़ते हैं।",
          "पूरे साल का ख़र्च देखो: हर महीने सौ पर पाँच यानी साल में सौ पर साठ।",
          "सब कुछ लिखित में लो और हर क़िस्त की रसीद रखो।",
          "कोरे काग़ज़ पर कभी दस्तख़त मत करो और कर्ज़ सिर्फ़ सच्ची ज़रूरत के लिए लो।"
        ],
        "fill": {
          "bank": [
            "उधार",
            "ब्याज",
            "लिखित",
            "रसीद",
            "साल",
            "कोरे"
          ],
          "items": [
            [
              "पैसे @@ लेने पर उन्हें ब्याज के साथ लौटाना पड़ता है।",
              "उधार"
            ],
            [
              "हमेशा पूरे @@ की ब्याज दर पूछो।",
              "साल"
            ],
            [
              "साहूकार से कहो कि सब कुछ @@ में दे।",
              "लिखित"
            ],
            [
              "हर क़िस्त के बाद @@ माँगो।",
              "रसीद"
            ],
            [
              "@@ काग़ज़ पर कभी दस्तख़त मत करो।",
              "कोरे"
            ]
          ]
        },
        "sortTitle": "अच्छा संकेत या ख़तरे की घंटी?",
        "sortOpts": [
          {
            "k": "good",
            "t": "अच्छा संकेत"
          },
          {
            "k": "warn",
            "t": "ख़तरे की घंटी"
          }
        ],
        "sort": [
          {
            "icon": "paper",
            "label": "साहूकार ब्याज दर लिखकर एक काग़ज़ देता है",
            "a": "good"
          },
          {
            "icon": "lock",
            "label": "वह कोरे काग़ज़ पर दस्तख़त करवाता है",
            "a": "warn"
          },
          {
            "icon": "ledger",
            "label": "वह बताता है कि कुल कितना लौटाना होगा",
            "a": "good"
          },
          {
            "icon": "house",
            "label": "वह तुम्हारी ज़मीन के काग़ज़ या गहने बिना रसीद के रख लेता है",
            "a": "warn"
          },
          {
            "icon": "stamp",
            "label": "हर भुगतान की रसीद पर मुहर लगती है",
            "a": "good"
          }
        ],
        "tf": [
          {
            "q": "उधार लिए पैसे ब्याज के साथ लौटाने पड़ते हैं।",
            "a": true
          },
          {
            "q": "हर महीने सौ पर पाँच रुपये और साल में सौ पर पाँच रुपये एक ही बात है।",
            "a": false
          },
          {
            "q": "बिना पढ़े काग़ज़ पर दस्तख़त कर देना अच्छा है।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "साहूकार हर महीने सौ पर पाँच रुपये लेता है। पूरे साल में सौ रुपये पर कितना ब्याज होगा?",
            "opts": [
              "5",
              "12",
              "60"
            ],
            "a": 2
          },
          {
            "q": "दस हज़ार रुपये का कर्ज़ साल में हर सौ पर बारह रुपये की दर से लिया गया। एक साल का ब्याज कितना होगा?",
            "opts": [
              "120",
              "1,200",
              "12,000"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि कर्ज़ तभी लूँग[[ा|ी]] जब सच में ज़रूरी हो, पूरे साल की दर लिखित में पूछूँग[[ा|ी]], और कोरे काग़ज़ पर कभी दस्तख़त नहीं करूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "कर्ज घेतलेले पैसे व्याजासह परत करावे लागतात.",
          "पूर्ण वर्षाच्या खर्चाची तुलना कर: दर महिन्याला शंभरावर पाच म्हणजे वर्षाला शंभरावर साठ.",
          "सगळं लेखी घे आणि प्रत्येक हप्त्याची पावती ठेव.",
          "कोऱ्या कागदावर कधीच सही करू नकोस आणि कर्ज फक्त खऱ्या गरजेसाठी घे."
        ],
        "fill": {
          "bank": [
            "कर्ज",
            "व्याज",
            "लेखी",
            "पावती",
            "वर्ष",
            "कोऱ्या"
          ],
          "items": [
            [
              "पैसे @@ घेतले की ते व्याजासह परत करावे लागतात.",
              "कर्ज"
            ],
            [
              "नेहमी एका संपूर्ण @@ साठीचा व्याजदर विचार.",
              "वर्ष"
            ],
            [
              "सावकाराला सगळं @@ द्यायला सांग.",
              "लेखी"
            ],
            [
              "प्रत्येक हप्त्यानंतर @@ माग.",
              "पावती"
            ],
            [
              "@@ कागदावर कधीच सही करू नकोस.",
              "कोऱ्या"
            ]
          ]
        },
        "sortTitle": "चांगली खूण की धोक्याची घंटा?",
        "sortOpts": [
          {
            "k": "good",
            "t": "चांगली खूण"
          },
          {
            "k": "warn",
            "t": "धोक्याची घंटा"
          }
        ],
        "sort": [
          {
            "icon": "paper",
            "label": "सावकार व्याजदर लिहिलेला कागद देतो",
            "a": "good"
          },
          {
            "icon": "lock",
            "label": "तो कोऱ्या कागदावर सही करायला लावतो",
            "a": "warn"
          },
          {
            "icon": "ledger",
            "label": "तो एकूण किती परत करायचे ते सांगतो",
            "a": "good"
          },
          {
            "icon": "house",
            "label": "तो पावतीशिवाय तुझ्या जमिनीचे कागद किंवा दागिने ठेवून घेतो",
            "a": "warn"
          },
          {
            "icon": "stamp",
            "label": "प्रत्येक भरण्याच्या पावतीवर शिक्का मारला जातो",
            "a": "good"
          }
        ],
        "tf": [
          {
            "q": "उसने घेतलेले पैसे व्याजासह परत करावे लागतात.",
            "a": true
          },
          {
            "q": "दर महिन्याला शंभरावर पाच आणि वर्षाला शंभरावर पाच हे एकच आहे.",
            "a": false
          },
          {
            "q": "न वाचता कागदावर सही करणं चांगलं असतं.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "सावकार दर महिन्याला शंभरावर पाच रुपये घेतो. पूर्ण वर्षात शंभर रुपयांवर किती व्याज होईल?",
            "opts": [
              "5",
              "12",
              "60"
            ],
            "a": 2
          },
          {
            "q": "दहा हजार रुपयांचं कर्ज वर्षाला प्रत्येक शंभरावर बारा रुपये दराने घेतलं. एका वर्षाचं व्याज किती?",
            "opts": [
              "120",
              "1,200",
              "12,000"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की खरंच गरज असेल तेव्हाच कर्ज घेईन, पूर्ण वर्षाचा दर लेखी विचारीन, आणि कोऱ्या कागदावर कधीच सही करणार नाही."
      }
    }
  },
  {
    "slug": "insurance",
    "status": "live",
    "color": "#a2d2ff",
    "title": {
      "en": "{name} and the Big Red Umbrella",
      "hi": "{name} और बड़ी लाल छतरी",
      "mr": "{name} आणि मोठी लाल छत्री"
    },
    "cardTitle": {
      "en": "The Big Red Umbrella",
      "hi": "बड़ी लाल छतरी",
      "mr": "मोठी लाल छत्री"
    },
    "subtitle": {
      "en": "What is insurance?",
      "hi": "बीमा क्या होता है?",
      "mr": "विमा म्हणजे काय?"
    },
    "topic": {
      "en": "Insurance",
      "hi": "बीमा",
      "mr": "विमा"
    },
    "stops": {
      "en": [
        "The Flood",
        "The Pot",
        "The Claim",
        "Read the Paper"
      ],
      "hi": [
        "बाढ़",
        "साझा मटका",
        "क्लेम",
        "काग़ज़ पढ़ो"
      ],
      "mr": [
        "पूर",
        "सामाईक मडकं",
        "क्लेम",
        "कागद वाचा"
      ]
    },
    "scenes": [
      "Heavy rain falls, and you, Aaji and Gullu stay dry under a big red umbrella.",
      "Flood water has come into Kaka's shop, and his goods are floating away.",
      "Many small houses drop coins into one big pot, and the tag says 2,00,000 rupees.",
      "A kind officer with a clipboard checks Kaka's shop, and a green shield with a tick shows it is covered."
    ],
    "story": {
      "en": [
        "It rained and rained. The water rose and rushed into Kaka's shop. His flour, sugar and notebooks were all spoiled. Kaka sat down, very sad. \"Fifty thousand rupees of goods, gone.\" You wished you could help. Gullu said, \"Don't worry, {name}. Kaka bought insurance. Remember the big red umbrella? Insurance is an umbrella for money troubles.\"",
        "\"How does it work?\" you asked. Gullu drew a picture. \"Imagine 100 shopkeepers. Each pays a small amount, say 2,000 rupees a year, into one big pot. That small payment is called a premium. 100 times 2,000 makes 2,00,000 rupees in the pot. In most years only one or two shops face a big loss. The pot pays them. Everyone shares the risk, so no one faces it alone.\"",
        "Kaka made a claim, which means he asked the insurance company for money. A kind officer came with a clipboard to check the damage and the papers. \"Kaka paid his premium on time and the shop was insured against floods,\" said the officer, \"so you will be paid.\" You learned that insurance pays only for what is written on the policy paper, nothing more, and only after checks.",
        "A few weeks later, the shop was full again with fresh stock. Kaka smiled. \"My premium was 2,000 rupees, and it helped me stand up again.\" You hugged the policy paper. \"Before you buy insurance,\" said Gullu, \"read the paper: what is covered, what is not, and how much the premium is. Buy only from a company registered with IRDAI, India's insurance regulator. And never trust a stranger on the phone who promises 'double money' policies. Insurance is for protection, not for getting rich.\""
      ],
      "hi": [
        "बारिश होती रही, होती रही। पानी चढ़ता गया और काका की दुकान में घुस गया। उनका आटा, चीनी और कॉपियाँ सब ख़राब हो गईं। काका उदास बैठ गए। \"पचास हज़ार रुपये का सामान गया।\" तुम्हारा मन हुआ कि कुछ मदद करो। गुल्लू बोला, \"घबराओ मत {name}। काका ने बीमा करवाया था। बीमा पैसों की मुसीबत में बड़ी लाल छतरी जैसा है।\"",
        "\"यह कैसे काम करता है?\" तुमने पूछा। गुल्लू ने तस्वीर बनाई। \"सोचो सौ दुकानदार हैं। हर कोई साल में थोड़ी-सी रक़म, मान लो दो हज़ार रुपये, एक बड़े मटके में डालता है। इस छोटी रक़म को प्रीमियम कहते हैं। सौ गुना दो हज़ार यानी मटके में 2,00,000 रुपये। ज़्यादातर सालों में सिर्फ़ एक-दो दुकानों को बड़ा नुक़सान होता है। मटका उनके नुक़सान की भरपाई करता है। सब मिलकर जोखिम बाँटते हैं, इसलिए कोई अकेला नहीं पड़ता।\"",
        "काका ने क्लेम किया, यानी बीमा कंपनी से पैसे माँगे। एक भले अफ़सर क्लिपबोर्ड लेकर नुक़सान और काग़ज़ देखने आए। \"काका ने प्रीमियम समय पर भरा था और दुकान का बाढ़ का बीमा था,\" अफ़सर ने कहा, \"इसलिए आपको पैसे मिलेंगे।\" तुमने सीखा कि बीमा सिर्फ़ उसी का पैसा देता है जो पॉलिसी के काग़ज़ में लिखा है, उससे ज़्यादा नहीं, और जाँच के बाद ही।",
        "कुछ हफ़्तों बाद दुकान फिर नए सामान से भर गई। काका मुस्कुराए। \"मेरा प्रीमियम दो हज़ार रुपये था, और उसी ने मुझे फिर खड़ा कर दिया।\" तुमने पॉलिसी का काग़ज़ सीने से लगा लिया। \"बीमा लेने से पहले,\" गुल्लू बोला, \"काग़ज़ पढ़ो: क्या कवर है, क्या नहीं, प्रीमियम कितना है। सिर्फ़ IRDAI में पंजीकृत कंपनी से लो, जो भारत में बीमा की नियामक संस्था है। और फ़ोन पर 'दुगना पैसा' का वादा करने वाले अजनबी पर कभी भरोसा मत करना। बीमा बचाव के लिए है, अमीर बनने के लिए नहीं।\""
      ],
      "mr": [
        "पाऊस पडतच राहिला. पाणी वाढत गेलं आणि काकांच्या दुकानात शिरलं. त्यांचं पीठ, साखर आणि वह्या सगळं खराब झालं. काका उदास होऊन बसले. \"पन्नास हजार रुपयांचा माल गेला.\" तुला काहीतरी मदत करावीशी वाटली. गल्लू म्हणाला, \"घाबरू नकोस {name}. काकांनी विमा काढला होता. विमा म्हणजे पैशांच्या संकटात मोठी लाल छत्रीच.\"",
        "\"हे कसं चालतं?\" तू विचारलंस. गल्लूने चित्र काढलं. \"समज शंभर दुकानदार आहेत. प्रत्येकजण वर्षाला थोडी रक्कम, समज दोन हजार रुपये, एका मोठ्या मडक्यात टाकतो. त्या छोट्या रकमेला प्रीमियम म्हणतात. शंभर गुणिले दोन हजार म्हणजे मडक्यात 2,00,000 रुपये. बहुतेक वर्षांत फक्त एक-दोन दुकानांना मोठं नुकसान होतं. मडकं त्यांचं नुकसान भरून काढतं. सगळे मिळून धोका वाटून घेतात, म्हणून कोणी एकटं पडत नाही.\"",
        "काकांनी क्लेम केला, म्हणजे विमा कंपनीकडे पैसे मागितले. एक चांगले अधिकारी क्लिपबोर्ड घेऊन नुकसान आणि कागद तपासायला आले. \"काकांनी प्रीमियम वेळेवर भरला होता आणि दुकानाचा पुराचा विमा होता,\" अधिकारी म्हणाले, \"म्हणून तुम्हाला पैसे मिळतील.\" तू शिकल[[ास|ीस]] की विमा फक्त पॉलिसीच्या कागदावर जे लिहिलं आहे त्याचेच पैसे देतो, त्यापेक्षा जास्त नाही, आणि तपासणीनंतरच.",
        "काही आठवड्यांनी दुकान पुन्हा नव्या मालाने भरलं. काका हसले. \"माझा प्रीमियम दोन हजार रुपये होता, आणि त्यानेच मला पुन्हा उभं केलं.\" तू पॉलिसीचा कागद छातीशी धरलास. \"विमा घेण्याआधी,\" गल्लू म्हणाला, \"कागद वाच: काय कव्हर आहे, काय नाही, प्रीमियम किती. फक्त IRDAI कडे नोंदणी असलेल्या कंपनीकडून घे, ती भारतातली विम्याची नियामक संस्था आहे. आणि फोनवर 'दुप्पट पैसे' असं आश्वासन देणाऱ्या अनोळखी माणसावर कधीच विश्वास ठेवू नकोस. विमा संरक्षणासाठी आहे, श्रीमंत होण्यासाठी नाही.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Insurance protects you from big money losses.",
          "Many people pay a small premium into a pot, and the pot pays those who face a loss.",
          "A claim is a request for money, and the policy paper tells what is covered.",
          "Buy only from a registered insurer, and read the paper first."
        ],
        "fill": {
          "bank": [
            "insurance",
            "premium",
            "claim",
            "policy",
            "pot",
            "covered"
          ],
          "items": [
            [
              "@@ protects you from big money losses.",
              "insurance"
            ],
            [
              "The small amount paid every year is called the @@.",
              "premium"
            ],
            [
              "Asking the company for money after a loss is making a @@.",
              "claim"
            ],
            [
              "The @@ paper says what is covered and what is not.",
              "policy"
            ],
            [
              "Many people pay into one big @@, which pays those who suffer a loss.",
              "pot"
            ]
          ]
        },
        "sortTitle": "Which insurance helps?",
        "sortOpts": [
          {
            "k": "health",
            "t": "Health"
          },
          {
            "k": "vehicle",
            "t": "Vehicle"
          },
          {
            "k": "crop",
            "t": "Crop"
          },
          {
            "k": "shop",
            "t": "Shop or home"
          }
        ],
        "sort": [
          {
            "icon": "plus",
            "label": "Surgery bill after a fall",
            "a": "health"
          },
          {
            "icon": "car",
            "label": "A scooter damaged in a road accident",
            "a": "vehicle"
          },
          {
            "icon": "wheat",
            "label": "Hailstorm spoils the farmer's wheat",
            "a": "crop"
          },
          {
            "icon": "house",
            "label": "Flood water enters the shop",
            "a": "shop"
          },
          {
            "icon": "house",
            "label": "A fire breaks out in the house",
            "a": "shop"
          }
        ],
        "tf": [
          {
            "q": "Insurance works because many people share the risk.",
            "a": true
          },
          {
            "q": "A claim means the insurance company sends you a bill.",
            "a": false
          },
          {
            "q": "It is smart to read the policy paper before buying.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "50 families each pay 100 rupees into a shared pool. How much is in the pool?",
            "opts": [
              "500",
              "5,000",
              "50,000"
            ],
            "a": 1
          },
          {
            "q": "Kaka pays 2,000 rupees every year for his insurance. What is that payment called?",
            "opts": [
              "A claim",
              "A premium",
              "A loan"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to read any insurance paper before I agree, to buy only from registered companies, and to remember that insurance protects me, it does not make me rich."
      },
      "hi": {
        "remember": [
          "बीमा बड़े आर्थिक नुक़सान से बचाता है।",
          "बहुत लोग थोड़ा प्रीमियम एक मटके में डालते हैं और मटका नुक़सान उठाने वालों को पैसे देता है।",
          "क्लेम पैसे माँगने की अर्ज़ी है, और पॉलिसी का काग़ज़ बताता है कि क्या कवर है।",
          "सिर्फ़ पंजीकृत कंपनी से बीमा लो और पहले काग़ज़ पढ़ो।"
        ],
        "fill": {
          "bank": [
            "बीमा",
            "प्रीमियम",
            "क्लेम",
            "पॉलिसी",
            "मटका",
            "कवर"
          ],
          "items": [
            [
              "@@ बड़े आर्थिक नुक़सान से बचाता है।",
              "बीमा"
            ],
            [
              "जो छोटी रक़म हर साल भरी जाती है, उसे @@ कहते हैं।",
              "प्रीमियम"
            ],
            [
              "नुक़सान के बाद कंपनी से पैसे माँगने को @@ करना कहते हैं।",
              "क्लेम"
            ],
            [
              "@@ का काग़ज़ बताता है कि क्या कवर है और क्या नहीं।",
              "पॉलिसी"
            ],
            [
              "बहुत लोग एक बड़े @@ में पैसे डालते हैं, जो नुक़सान उठाने वालों को मिलता है।",
              "मटका"
            ]
          ]
        },
        "sortTitle": "कौन-सा बीमा काम आएगा?",
        "sortOpts": [
          {
            "k": "health",
            "t": "स्वास्थ्य"
          },
          {
            "k": "vehicle",
            "t": "वाहन"
          },
          {
            "k": "crop",
            "t": "फ़सल"
          },
          {
            "k": "shop",
            "t": "दुकान या घर"
          }
        ],
        "sort": [
          {
            "icon": "plus",
            "label": "गिरने के बाद ऑपरेशन का बिल",
            "a": "health"
          },
          {
            "icon": "car",
            "label": "सड़क हादसे में स्कूटर टूट गया",
            "a": "vehicle"
          },
          {
            "icon": "wheat",
            "label": "ओलों से किसान का गेहूँ ख़राब हो गया",
            "a": "crop"
          },
          {
            "icon": "house",
            "label": "बाढ़ का पानी दुकान में घुस गया",
            "a": "shop"
          },
          {
            "icon": "house",
            "label": "घर में आग लग गई",
            "a": "shop"
          }
        ],
        "tf": [
          {
            "q": "बीमा इसलिए काम करता है क्योंकि बहुत लोग जोखिम बाँटते हैं।",
            "a": true
          },
          {
            "q": "क्लेम का मतलब है कि बीमा कंपनी तुम्हें बिल भेजती है।",
            "a": false
          },
          {
            "q": "बीमा लेने से पहले पॉलिसी का काग़ज़ पढ़ना समझदारी है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "पचास परिवार हर एक सौ रुपये एक साझा कोष में डालते हैं। कोष में कुल कितने रुपये होंगे?",
            "opts": [
              "500",
              "5,000",
              "50,000"
            ],
            "a": 1
          },
          {
            "q": "काका बीमे के लिए हर साल दो हज़ार रुपये भरते हैं। इस रक़म को क्या कहते हैं?",
            "opts": [
              "क्लेम",
              "प्रीमियम",
              "कर्ज़"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि कोई भी बीमा लेने से पहले उसका काग़ज़ पढ़ूँग[[ा|ी]], सिर्फ़ पंजीकृत कंपनी से लूँग[[ा|ी]], और याद रखूँग[[ा|ी]] कि बीमा मुझे बचाता है, अमीर नहीं बनाता।"
      },
      "mr": {
        "remember": [
          "विमा मोठ्या आर्थिक नुकसानापासून वाचवतो.",
          "खूप लोक थोडा प्रीमियम एका मडक्यात टाकतात आणि मडकं नुकसान झालेल्यांना पैसे देतं.",
          "क्लेम म्हणजे पैसे मागण्याचा अर्ज, आणि पॉलिसीचा कागद सांगतो काय कव्हर आहे.",
          "फक्त नोंदणीकृत कंपनीकडून विमा घे आणि आधी कागद वाच."
        ],
        "fill": {
          "bank": [
            "विमा",
            "प्रीमियम",
            "क्लेम",
            "पॉलिसी",
            "मडकं",
            "कव्हर"
          ],
          "items": [
            [
              "@@ मोठ्या आर्थिक नुकसानापासून वाचवतो.",
              "विमा"
            ],
            [
              "दरवर्षी भरली जाणारी छोटी रक्कम म्हणजे @@.",
              "प्रीमियम"
            ],
            [
              "नुकसानानंतर कंपनीकडे पैसे मागणं म्हणजे @@ करणं.",
              "क्लेम"
            ],
            [
              "@@ चा कागद सांगतो काय कव्हर आहे आणि काय नाही.",
              "पॉलिसी"
            ],
            [
              "या गोष्टीत सगळ्यांचे पैसे जमा होतात त्या सामाईक भांड्याला @@ म्हटलं आहे.",
              "मडकं"
            ]
          ]
        },
        "sortTitle": "कोणता विमा उपयोगी पडेल?",
        "sortOpts": [
          {
            "k": "health",
            "t": "आरोग्य"
          },
          {
            "k": "vehicle",
            "t": "वाहन"
          },
          {
            "k": "crop",
            "t": "पीक"
          },
          {
            "k": "shop",
            "t": "दुकान किंवा घर"
          }
        ],
        "sort": [
          {
            "icon": "plus",
            "label": "पडल्यानंतर शस्त्रक्रियेचं बिल",
            "a": "health"
          },
          {
            "icon": "car",
            "label": "रस्त्यावरच्या अपघातात स्कूटर तुटली",
            "a": "vehicle"
          },
          {
            "icon": "wheat",
            "label": "गारांमुळे शेतकऱ्याचा गहू खराब झाला",
            "a": "crop"
          },
          {
            "icon": "house",
            "label": "पुराचं पाणी दुकानात शिरलं",
            "a": "shop"
          },
          {
            "icon": "house",
            "label": "घराला आग लागली",
            "a": "shop"
          }
        ],
        "tf": [
          {
            "q": "खूप लोक धोका वाटून घेतात म्हणून विमा चालतो.",
            "a": true
          },
          {
            "q": "क्लेम म्हणजे विमा कंपनी तुला बिल पाठवते.",
            "a": false
          },
          {
            "q": "विमा घेण्याआधी पॉलिसीचा कागद वाचणं शहाणपणाचं आहे.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "पन्नास कुटुंबं प्रत्येकी शंभर रुपये एका सामाईक निधीत टाकतात. निधीत एकूण किती रुपये होतील?",
            "opts": [
              "500",
              "5,000",
              "50,000"
            ],
            "a": 1
          },
          {
            "q": "काका विम्यासाठी दरवर्षी दोन हजार रुपये भरतात. त्या रकमेला काय म्हणतात?",
            "opts": [
              "क्लेम",
              "प्रीमियम",
              "कर्ज"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की कोणताही विमा घेण्याआधी त्याचा कागद वाचीन, फक्त नोंदणीकृत कंपनीकडून घेईन, आणि लक्षात ठेवीन की विमा मला वाचवतो, श्रीमंत करत नाही."
      }
    }
  },
  {
    "slug": "shared-well",
    "status": "live",
    "color": "#d0f4de",
    "title": {
      "en": "{name} and the Shared Well",
      "hi": "{name} और साझा कुआँ",
      "mr": "{name} आणि गावची विहीर"
    },
    "cardTitle": {
      "en": "The Shared Well",
      "hi": "साझा कुआँ",
      "mr": "गावची विहीर"
    },
    "subtitle": {
      "en": "Where do taxes go?",
      "hi": "कर का पैसा कहाँ जाता है?",
      "mr": "कराचा पैसा कुठे जातो?"
    },
    "topic": {
      "en": "Taxes",
      "hi": "कर",
      "mr": "कर"
    },
    "stops": {
      "en": [
        "The Big Pot",
        "Roads, School and Clinic",
        "From Bill to Well",
        "The School Gate"
      ],
      "hi": [
        "बड़ा मटका",
        "सड़क, स्कूल और क्लीनिक",
        "बिल से कुएँ तक",
        "स्कूल का फाटक"
      ],
      "mr": [
        "मोठं मडकं",
        "रस्ता, शाळा आणि दवाखाना",
        "बिलापासून विहिरीपर्यंत",
        "शाळेचं फाटक"
      ]
    },
    "scenes": [
      "Aaji and you drop coins into a big clay pot under the open sky while coins fall from above.",
      "You stand on a road beside a school and a clinic, all built from the shared pot.",
      "A bill sends an arrow to the clay pot and another arrow to a well, drawn on a board while you think.",
      "You and a friend cheer at the gate of the freshly painted school beside a new road."
    ],
    "story": {
      "en": [
        "One summer the village well went dry, and the whole village gathered under the old tree. \"Digging a new well costs a lot,\" said the elders. \"No single family can pay for it. But if everyone puts a little money into one big pot, we can.\" Aaji dropped in a coin. You dropped in a coin. Soon the pot was full. \"This is how a shared fund works,\" Gullu whispered.",
        "With the pot's money, the village dug a new well, mended the muddy road and even built a small clinic next to the school. \"Who paid for all this?\" you asked. \"Everyone, a little each,\" said Gullu. \"In a country, this shared pot is made of taxes. People pay taxes on what they earn and what they buy. The government uses them for roads, schools, clinics, water, police and more. Things that everybody uses are paid for by everybody.\"",
        "You remembered the shop bill with its extra 5 rupees of GST. You drew arrows on the blackboard: bill, then shared pot, then well and school. \"So when I buy a notebook, a tiny part of my money goes into the pot?\" you asked. \"Yes,\" said Gullu. \"Grown-ups also pay income tax on what they earn, but only when their income is above a limit. Tax is not a gift to someone. It is our share of the things we use together.\"",
        "Months later, you stood with your friends at the gate of the freshly painted school. A bright new road ran past it, and clean water flowed from the well. \"Taxes are not magic,\" said Gullu. \"Someone has to decide how to spend them well, and citizens can ask questions and read how the money is used. When you grow up and earn, you will pay your share too, and you will know why.\""
      ],
      "hi": [
        "एक गर्मी में गाँव का कुआँ सूख गया और पूरा गाँव पुराने पेड़ के नीचे जमा हुआ। \"नया कुआँ खोदने में बहुत ख़र्च आता है,\" बुज़ुर्गों ने कहा। \"कोई अकेला परिवार इसे नहीं उठा सकता। पर सब थोड़ा-थोड़ा पैसा एक बड़े मटके में डालें तो हो सकता है।\" दादी ने सिक्का डाला। तुमने भी सिक्का डाला। जल्दी ही मटका भर गया। \"साझा कोष ऐसे ही काम करता है,\" गुल्लू ने फुसफुसाकर कहा।",
        "मटके के पैसों से गाँव ने नया कुआँ खोदा, कीचड़ वाली सड़क बनवाई और स्कूल के पास एक छोटा क्लीनिक भी खड़ा किया। \"यह सब किसने चुकाया?\" तुमने पूछा। \"सबने, थोड़ा-थोड़ा,\" गुल्लू बोला। \"देश में यह साझा मटका करों से बनता है। लोग कमाई और ख़रीद पर कर देते हैं। सरकार उससे सड़कें, स्कूल, क्लीनिक, पानी, पुलिस और बहुत कुछ चलाती है। जिन चीज़ों का इस्तेमाल सब करते हैं, उनका ख़र्च सब मिलकर उठाते हैं।\"",
        "तुम्हें दुकान का वह बिल याद आया जिसमें GST के पाँच रुपये ज़्यादा थे। तुमने ब्लैकबोर्ड पर तीर बनाए: बिल, फिर साझा मटका, फिर कुआँ और स्कूल। \"तो कॉपी ख़रीदने पर मेरे पैसों का एक नन्हा हिस्सा मटके में जाता है?\" तुमने पूछा। \"हाँ,\" गुल्लू बोला। \"बड़े लोग कमाई पर आयकर भी देते हैं, पर तभी जब कमाई एक सीमा से ऊपर हो। कर किसी को दिया गया तोहफ़ा नहीं है। यह उन चीज़ों में हमारा हिस्सा है जिन्हें हम साथ इस्तेमाल करते हैं।\"",
        "कुछ महीने बाद तुम अपने दोस्तों के साथ नए रंगे स्कूल के फाटक पर खड़[[े|ी]] थ[[े|ीं]]। पास से एक चमकती नई सड़क गुज़रती थी और कुएँ से साफ़ पानी बह रहा था। \"कर कोई जादू नहीं है,\" गुल्लू बोला। \"किसी को तय करना होता है कि उसे अच्छे से कैसे ख़र्च करें, और नागरिक सवाल पूछ सकते हैं और पढ़ सकते हैं कि पैसा कैसे इस्तेमाल हुआ। बड़े होकर जब तुम कमाओ[[गे|गी]] तो अपना हिस्सा भी दो[[गे|गी]], और जानो[[गे|गी]] कि क्यों।\""
      ],
      "mr": [
        "एका उन्हाळ्यात गावची विहीर आटली आणि सगळं गाव जुन्या झाडाखाली जमलं. \"नवी विहीर खणायला खूप खर्च येतो,\" वडीलधारी म्हणाले. \"कोणतंही एक कुटुंब तो उचलू शकत नाही. पण सगळ्यांनी थोडे थोडे पैसे एका मोठ्या मडक्यात टाकले तर जमू शकतं.\" आजीने नाणं टाकलं. तू पण नाणं टाकलंस. लवकरच मडकं भरलं. \"सामायिक निधी असाच काम करतो,\" गल्लू कुजबुजला.",
        "मडक्यातल्या पैशांतून गावाने नवी विहीर खणली, चिखलाचा रस्ता बांधला आणि शाळेशेजारी एक छोटा दवाखानाही उभा केला. \"हे सगळं कोणी भरलं?\" तू विचारलंस. \"सगळ्यांनी, थोडं थोडं,\" गल्लू म्हणाला. \"देशात हे सामायिक मडकं करांपासून बनतं. लोक कमाईवर आणि खरेदीवर कर भरतात. सरकार त्यातून रस्ते, शाळा, दवाखाने, पाणी, पोलीस आणि बरंच काही चालवतं. ज्या गोष्टी सगळे वापरतात त्यांचा खर्च सगळे मिळून उचलतात.\"",
        "तुला दुकानातलं ते बिल आठवलं ज्यात GST चे जादा पाच रुपये होते. तू फळ्यावर बाण काढलेस: बिल, मग सामायिक मडकं, मग विहीर आणि शाळा. \"म्हणजे वही घेताना माझ्या पैशांचा एक इवलासा भाग मडक्यात जातो?\" तू विचारलंस. \"हो,\" गल्लू म्हणाला. \"मोठी माणसं कमाईवर आयकरही भरतात, पण फक्त तेव्हा जेव्हा कमाई एका मर्यादेपेक्षा जास्त असते. कर म्हणजे कोणाला दिलेली भेट नाही. आपण सगळे एकत्र वापरतो त्या गोष्टींतला हा आपला वाटा आहे.\"",
        "काही महिन्यांनी तू मित्रांसोबत नव्याने रंगवलेल्या शाळेच्या फाटकाशी उभ[[ा|ी]] होत[[ास|ीस]]. बाजूने एक चमकता नवा रस्ता जात होता आणि विहिरीतून स्वच्छ पाणी वाहत होतं. \"कर काही जादू नाही,\" गल्लू म्हणाला. \"कोणाला तरी ठरवावं लागतं की तो नीट कसा खर्च करायचा, आणि नागरिक प्रश्न विचारू शकतात आणि पैसा कसा वापरला गेला ते वाचू शकतात. मोठ[[ा|ी]] झाल्यावर जेव्हा तू कमावशील तेव्हा तू पण तुझा वाटा देशील, आणि तुला कळेल का ते.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Taxes are money that people pay into a shared pot for things everyone uses.",
          "The shared pot pays for roads, schools, clinics, water and more.",
          "GST on a bill is one kind of tax. It is part of the price and is written on the bill.",
          "Taxes are our share of things we use together, and citizens can ask how the money is used."
        ],
        "fill": {
          "bank": [
            "tax",
            "GST",
            "income",
            "roads",
            "share",
            "gift"
          ],
          "items": [
            [
              "Money that people pay into a shared pot for common needs is called @@.",
              "tax"
            ],
            [
              "The tax added to a shop bill is called @@.",
              "GST"
            ],
            [
              "Grown-ups pay @@ tax on what they earn, above a limit.",
              "income"
            ],
            [
              "Taxes help pay for @@, schools and clinics.",
              "roads"
            ],
            [
              "A tax is our @@ of the things we use together.",
              "share"
            ]
          ]
        },
        "sortTitle": "Shared money or your own?",
        "sortOpts": [
          {
            "k": "shared",
            "t": "Paid from shared money"
          },
          {
            "k": "own",
            "t": "You buy it yourself"
          }
        ],
        "sort": [
          {
            "icon": "well",
            "label": "The village well everyone drinks from",
            "a": "shared"
          },
          {
            "icon": "road",
            "label": "The road to school",
            "a": "shared"
          },
          {
            "icon": "clinic",
            "label": "The village clinic",
            "a": "shared"
          },
          {
            "icon": "football",
            "label": "A new football for your own team",
            "a": "own"
          },
          {
            "icon": "lolly",
            "label": "A lolly from the shop",
            "a": "own"
          }
        ],
        "tf": [
          {
            "q": "Taxes are paid only by shopkeepers.",
            "a": false
          },
          {
            "q": "Taxes help pay for things like roads, schools and clinics.",
            "a": true
          },
          {
            "q": "Citizens can ask how tax money is used.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A village needs 10,000 rupees for a new well. 100 families each pay the same amount. How much does each family pay?",
            "opts": [
              "100",
              "1,000",
              "10"
            ],
            "a": 0
          },
          {
            "q": "A notebook costs 100 rupees plus 5 rupees tax. How much of your payment goes into the shared pot?",
            "opts": [
              "5",
              "100",
              "105"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to ask for a bill, to remember that taxes build shared things, and to pay my fair share when I earn."
      },
      "hi": {
        "remember": [
          "कर वह पैसा है जो लोग उन चीज़ों के लिए साझा मटके में देते हैं जिन्हें सब इस्तेमाल करते हैं।",
          "साझा मटके से सड़कें, स्कूल, क्लीनिक, पानी और बहुत कुछ चलता है।",
          "बिल पर GST एक तरह का कर है। वह क़ीमत का हिस्सा है और बिल पर लिखा होता है।",
          "कर उन चीज़ों में हमारा हिस्सा है जिन्हें हम साथ इस्तेमाल करते हैं, और नागरिक पूछ सकते हैं कि पैसा कैसे इस्तेमाल हुआ।"
        ],
        "fill": {
          "bank": [
            "कर",
            "GST",
            "आयकर",
            "सड़कें",
            "हिस्सा",
            "तोहफ़ा"
          ],
          "items": [
            [
              "साझा ज़रूरतों के लिए लोग साझा मटके में जो पैसा देते हैं उसे @@ कहते हैं।",
              "कर"
            ],
            [
              "दुकान के बिल में जुड़े कर को @@ कहते हैं।",
              "GST"
            ],
            [
              "बड़े लोग एक सीमा से ऊपर की कमाई पर @@ देते हैं।",
              "आयकर"
            ],
            [
              "करों से @@, स्कूल और क्लीनिक का ख़र्च चलता है।",
              "सड़कें"
            ],
            [
              "कर उन चीज़ों में हमारा @@ है जिन्हें हम साथ इस्तेमाल करते हैं।",
              "हिस्सा"
            ]
          ]
        },
        "sortTitle": "साझा पैसा या अपना?",
        "sortOpts": [
          {
            "k": "shared",
            "t": "साझा पैसे से"
          },
          {
            "k": "own",
            "t": "अपने पैसे से ख़रीदी जाए"
          }
        ],
        "sort": [
          {
            "icon": "well",
            "label": "गाँव का कुआँ जिससे सब पानी पीते हैं",
            "a": "shared"
          },
          {
            "icon": "road",
            "label": "स्कूल जाने वाली सड़क",
            "a": "shared"
          },
          {
            "icon": "clinic",
            "label": "गाँव का क्लीनिक",
            "a": "shared"
          },
          {
            "icon": "football",
            "label": "अपनी टीम के लिए नया फ़ुटबॉल",
            "a": "own"
          },
          {
            "icon": "lolly",
            "label": "दुकान से एक लॉलीपॉप",
            "a": "own"
          }
        ],
        "tf": [
          {
            "q": "कर सिर्फ़ दुकानदार देते हैं।",
            "a": false
          },
          {
            "q": "कर से सड़क, स्कूल और क्लीनिक जैसी चीज़ों का ख़र्च चलता है।",
            "a": true
          },
          {
            "q": "नागरिक पूछ सकते हैं कि कर का पैसा कैसे इस्तेमाल होता है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "गाँव को नए कुएँ के लिए 10,000 रुपये चाहिए। 100 परिवार बराबर-बराबर देते हैं। हर परिवार कितना देगा?",
            "opts": [
              "100",
              "1,000",
              "10"
            ],
            "a": 0
          },
          {
            "q": "एक कॉपी 100 रुपये की है और उस पर 5 रुपये कर है। तुम्हारे भुगतान का कितना हिस्सा साझा मटके में जाता है?",
            "opts": [
              "5",
              "100",
              "105"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि बिल माँगूँग[[ा|ी]], याद रखूँग[[ा|ी]] कि कर से साझा चीज़ें बनती हैं, और कमाने पर अपना उचित हिस्सा दूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "कर म्हणजे लोक ज्या गोष्टी सगळे वापरतात त्यांसाठी सामायिक मडक्यात भरतात तो पैसा.",
          "सामायिक मडक्यातून रस्ते, शाळा, दवाखाने, पाणी आणि बरंच काही चालतं.",
          "बिलावरचा GST हा एक प्रकारचा कर आहे. तो किमतीचा भाग असतो आणि बिलावर लिहिलेला असतो.",
          "कर म्हणजे आपण एकत्र वापरतो त्या गोष्टींतला आपला वाटा, आणि नागरिक पैसा कसा वापरला ते विचारू शकतात."
        ],
        "fill": {
          "bank": [
            "कर",
            "GST",
            "आयकर",
            "रस्ते",
            "वाटा",
            "भेट"
          ],
          "items": [
            [
              "सामायिक गरजांसाठी लोक सामायिक मडक्यात जो पैसा भरतात त्याला @@ म्हणतात.",
              "कर"
            ],
            [
              "दुकानाच्या बिलात जोडलेल्या कराला @@ म्हणतात.",
              "GST"
            ],
            [
              "मोठी माणसं एका मर्यादेपेक्षा जास्त कमाईवर @@ भरतात.",
              "आयकर"
            ],
            [
              "करांतून @@, शाळा आणि दवाखान्यांचा खर्च चालतो.",
              "रस्ते"
            ],
            [
              "कर म्हणजे आपण एकत्र वापरतो त्या गोष्टींतला आपला @@.",
              "वाटा"
            ]
          ]
        },
        "sortTitle": "सामायिक पैसा की स्वतःचा?",
        "sortOpts": [
          {
            "k": "shared",
            "t": "सामायिक पैशातून"
          },
          {
            "k": "own",
            "t": "स्वतःच्या पैशांनी घ्यावं"
          }
        ],
        "sort": [
          {
            "icon": "well",
            "label": "सगळे पाणी पितात ती गावची विहीर",
            "a": "shared"
          },
          {
            "icon": "road",
            "label": "शाळेला जाणारा रस्ता",
            "a": "shared"
          },
          {
            "icon": "clinic",
            "label": "गावचा दवाखाना",
            "a": "shared"
          },
          {
            "icon": "football",
            "label": "तुमच्या स्वतःच्या टीमसाठी नवा फुटबॉल",
            "a": "own"
          },
          {
            "icon": "lolly",
            "label": "दुकानातला लॉलीपॉप",
            "a": "own"
          }
        ],
        "tf": [
          {
            "q": "कर फक्त दुकानदार भरतात.",
            "a": false
          },
          {
            "q": "कराच्या पैशांतून रस्ते, शाळा आणि दवाखाने यांसारख्या गोष्टींचा खर्च चालतो.",
            "a": true
          },
          {
            "q": "नागरिक कराचा पैसा कसा वापरला जातो ते विचारू शकतात.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "गावाला नव्या विहिरीसाठी 10,000 रुपये हवेत. 100 कुटुंबं सारखे पैसे देतात. प्रत्येक कुटुंब किती देईल?",
            "opts": [
              "100",
              "1,000",
              "10"
            ],
            "a": 0
          },
          {
            "q": "एका वहीची किंमत 100 रुपये आणि त्यावर 5 रुपये कर आहे. तुझ्या पैशांपैकी किती सामायिक मडक्यात जातात?",
            "opts": [
              "5",
              "100",
              "105"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की बिल मागेन, कर सामायिक गोष्टी उभारतो हे लक्षात ठेवीन, आणि कमवायला लागल्यावर माझा योग्य वाटा देईन."
      }
    }
  },
  {
    "slug": "first-salary",
    "status": "live",
    "color": "#fcf6bd",
    "title": {
      "en": "{name}'s First Salary",
      "hi": "{name} की पहली तनख़्वाह",
      "mr": "{name} चा पहिला पगार"
    },
    "cardTitle": {
      "en": "The First Salary",
      "hi": "पहली तनख़्वाह",
      "mr": "पहिला पगार"
    },
    "subtitle": {
      "en": "Salary, deductions and take-home",
      "hi": "तनख़्वाह, कटौती और हाथ में आई रक़म",
      "mr": "पगार, कपात आणि हातात येणारी रक्कम"
    },
    "topic": {
      "en": "Salary",
      "hi": "वेतन",
      "mr": "पगार"
    },
    "stops": {
      "en": [
        "The Offer",
        "The Payslip",
        "The SMS",
        "Three Envelopes"
      ],
      "hi": [
        "नौकरी का प्रस्ताव",
        "पे-स्लिप",
        "वह एसएमएस",
        "तीन लिफ़ाफ़े"
      ],
      "mr": [
        "नोकरीची ऑफर",
        "पे-स्लिप",
        "तो एसएमएस",
        "तीन पाकिटं"
      ]
    },
    "scenes": [
      "You stand in front of an office building holding a note that says 20,000 while envelopes float around.",
      "A payslip shows 20,000 minus 1,200 minus 800 equals 18,000 while you study it with Gullu.",
      "A phone shows an SMS with plus 18,000 and you cheer with your arms up.",
      "Three envelopes sit on a table: a passbook for saving, bread for needs, and a football for wants."
    ],
    "story": {
      "en": [
        "Imagine it is many years from now. You have studied hard, and today you got your very first job offer. The letter says: \"Salary: 20,000 rupees per month.\" You ran to show Gullu, who now lived on your bookshelf. \"Wonderful!\" he cheered. \"That 20,000 is your gross salary, the amount before anything is taken out. But wait until payday to see what lands in your bank.\"",
        "On payday, you got your payslip. It said: gross salary 20,000. Then two lines of deductions. 1,200 went to a provident fund, a savings for your future that the law helps you build. 800 went as tax. \"Let us do the maths,\" said Gullu. \"20,000 minus 1,200 minus 800 equals 18,000. That 18,000 is your take-home salary, what you really receive.\" You nodded. Provident fund money is yours, just saved for later.",
        "Your phone buzzed with an SMS from the bank: \"Credited: 18,000 rupees.\" You jumped with joy. The first money you ever earned for yourself! \"Now comes the real test,\" said Gullu. \"Money that arrives can leave quickly. The people who stay calm with money are the ones who decide, before it arrives, where each rupee goes.\"",
        "On the table, you placed three envelopes. One for saving, with a passbook. One for needs, with bread: rent, food and bills. One for wants, with a football: fun things. \"Save first, not last,\" said Gullu. \"Pay for needs next. Spend on wants from what is left.\" You put some money in each envelope and smiled. Your first salary was not just money. It was a plan."
      ],
      "hi": [
        "सोचो कि कई साल बीत चुके हैं। तुमने ख़ूब पढ़ाई की है और आज तुम्हें अपनी पहली नौकरी का प्रस्ताव मिला है। पत्र में लिखा है: \"वेतन: 20,000 रुपये प्रति माह।\" तुम दौड़कर गुल्लू को दिखाने गए, जो अब तुम्हारी किताबों की अलमारी में रहता है। \"वाह!\" वह चहका। \"यह 20,000 तुम्हारा सकल वेतन है, यानी कुछ भी कटने से पहले की रक़म। पर तनख़्वाह के दिन तक रुको, देखो बैंक में क्या आता है।\"",
        "तनख़्वाह के दिन तुम्हें पे-स्लिप मिली। उसमें लिखा था: सकल वेतन 20,000। फिर कटौती की दो पंक्तियाँ। 1,200 भविष्य निधि में गए, यानी तुम्हारे भविष्य की बचत जिसे बनाने में क़ानून तुम्हारी मदद करता है। 800 कर में गए। \"चलो हिसाब लगाएँ,\" गुल्लू बोला। \"20,000 में से 1,200 और 800 घटाओ तो 18,000 बचते हैं। यह 18,000 तुम्हारा हाथ में आने वाला वेतन है, जो तुम्हें सचमुच मिलता है।\" तुमने सिर हिलाया। भविष्य निधि का पैसा तुम्हारा ही है, बस आगे के लिए जमा है।",
        "तुम्हारे फ़ोन पर बैंक का एसएमएस आया: \"जमा: 18,000 रुपये।\" तुम ख़ुशी से उछल पड़[[े|ीं]]। पहली बार अपने लिए कमाया हुआ पैसा! \"अब असली परीक्षा आती है,\" गुल्लू बोला। \"जो पैसा आता है वह जल्दी जा भी सकता है। पैसे के साथ शांत वही रहते हैं जो उसके आने से पहले तय कर लेते हैं कि हर रुपया कहाँ जाएगा।\"",
        "तुमने मेज़ पर तीन लिफ़ाफ़े रखे। एक बचत का, पासबुक वाला। एक ज़रूरतों का, रोटी वाला: किराया, खाना और बिल। एक चाहतों का, फ़ुटबॉल वाला: मज़े की चीज़ें। \"बचत पहले करो, आख़िर में नहीं,\" गुल्लू बोला। \"फिर ज़रूरतों का ख़र्च दो। जो बचे उसमें से चाहतों पर ख़र्च करो।\" तुमने हर लिफ़ाफ़े में कुछ पैसे रखे और मुस्कुरा[[ए|ईं]]। तुम्हारी पहली तनख़्वाह सिर्फ़ पैसा नहीं थी। वह एक योजना थी।"
      ],
      "mr": [
        "कल्पना कर की अनेक वर्षं उलटून गेली आहेत. तू खूप अभ्यास केला आहेस आणि आज तुला तुझ्या पहिल्या नोकरीची ऑफर मिळाली. पत्रात लिहिलंय: \"पगार: दरमहा 20,000 रुपये.\" तू धावत जाऊन गल्लूला दाखवलंस, जो आता तुझ्या पुस्तकांच्या कपाटात राहतो. \"वा!\" तो ओरडला. \"हे 20,000 म्हणजे तुझा एकूण पगार, काहीही कापलं जाण्याआधीची रक्कम. पण पगाराच्या दिवशी बँकेत काय येतं ते बघ.\"",
        "पगाराच्या दिवशी तुला पे-स्लिप मिळाली. त्यात लिहिलं होतं: एकूण पगार 20,000. मग कपातीच्या दोन ओळी. 1,200 भविष्य निर्वाह निधीत गेले, म्हणजे तुझ्या भविष्यासाठीची बचत, जी बनवायला कायदा तुला मदत करतो. 800 कर म्हणून गेले. \"चल हिशोब करू,\" गल्लू म्हणाला. \"20,000 वजा 1,200 वजा 800 बरोबर 18,000. हे 18,000 म्हणजे तुझा हातात येणारा पगार, जो तुला खरोखर मिळतो.\" तू मान हलवलीस. भविष्य निर्वाह निधीचा पैसा तुझाच आहे, फक्त पुढच्या काळासाठी साठवलेला.",
        "तुझ्या फोनवर बँकेचा एसएमएस आला: \"जमा: 18,000 रुपये.\" तू आनंदाने उड्या मारल्यास. स्वतःसाठी कमावलेला पहिला पैसा! \"आता खरी परीक्षा आहे,\" गल्लू म्हणाला. \"जो पैसा येतो तो लवकर जाऊही शकतो. पैशांबाबत शांत राहतात ते लोक जे तो येण्याआधीच ठरवतात की प्रत्येक रुपया कुठे जाणार.\"",
        "तू टेबलावर तीन पाकिटं ठेवलीस. एक बचतीचं, पासबुकवालं. एक गरजांचं, भाकरीवालं: भाडं, जेवण आणि बिलं. एक इच्छांचं, फुटबॉलवालं: मौजमजेच्या गोष्टी. \"बचत आधी कर, शेवटी नाही,\" गल्लू म्हणाला. \"मग गरजांचा खर्च दे. जे उरेल त्यातून इच्छांवर खर्च कर.\" तू प्रत्येक पाकिटात थोडे पैसे ठेवलेस आणि हसल[[ास|ीस]]. तुझा पहिला पगार फक्त पैसा नव्हता. ती एक योजना होती."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Gross salary is the amount before anything is taken out.",
          "Deductions, such as provident fund and tax, are taken out before you are paid.",
          "Take-home salary is gross minus deductions. 20,000 minus 1,200 minus 800 equals 18,000.",
          "Decide before payday: save first, pay for needs next, and spend on wants from what is left."
        ],
        "fill": {
          "bank": [
            "gross",
            "deductions",
            "take-home",
            "18,000",
            "save",
            "wants"
          ],
          "items": [
            [
              "Salary before anything is taken out is the @@ salary.",
              "gross"
            ],
            [
              "Provident fund and tax are @@.",
              "deductions"
            ],
            [
              "What lands in your bank is your @@ salary.",
              "take-home"
            ],
            [
              "20,000 minus 1,200 minus 800 leaves @@ rupees.",
              "18,000"
            ],
            [
              "Decide first, then @@ first, before you spend.",
              "save"
            ]
          ]
        },
        "sortTitle": "Before or after deductions?",
        "sortOpts": [
          {
            "k": "gross",
            "t": "Gross (before)"
          },
          {
            "k": "net",
            "t": "Take-home (after)"
          }
        ],
        "sort": [
          {
            "icon": "note",
            "label": "The 20,000 written in the offer letter",
            "a": "gross"
          },
          {
            "icon": "bank",
            "label": "The 18,000 that lands in your bank",
            "a": "net"
          },
          {
            "icon": "payslip",
            "label": "Salary before the provident fund and tax are cut",
            "a": "gross"
          },
          {
            "icon": "coin",
            "label": "The amount you can really spend",
            "a": "net"
          },
          {
            "icon": "passbook",
            "label": "Salary after all deductions",
            "a": "net"
          }
        ],
        "tf": [
          {
            "q": "Take-home salary is always the same as gross salary.",
            "a": false
          },
          {
            "q": "Provident fund money is saved for your future.",
            "a": true
          },
          {
            "q": "It helps to decide where your money will go before payday.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "Gross salary is 30,000. Deductions are 2,000 and 1,000. What is the take-home salary?",
            "opts": [
              "27,000",
              "33,000",
              "29,000"
            ],
            "a": 0
          },
          {
            "q": "You decide to save one-fifth of your 18,000 take-home. How much do you save?",
            "opts": [
              "3,600",
              "1,800",
              "5,400"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to read my payslip, to decide where my money goes before it arrives, and to save first."
      },
      "hi": {
        "remember": [
          "सकल वेतन वह रक़म है जो कुछ भी कटने से पहले की होती है।",
          "भविष्य निधि और कर जैसी कटौतियाँ तनख़्वाह मिलने से पहले कट जाती हैं।",
          "हाथ में आने वाला वेतन सकल वेतन में से कटौती घटाकर बनता है। 20,000 में से 1,200 और 800 घटाओ तो 18,000।",
          "तनख़्वाह से पहले तय करो: पहले बचत, फिर ज़रूरतें, और जो बचे उसमें से चाहतें।"
        ],
        "fill": {
          "bank": [
            "सकल",
            "कटौती",
            "हाथ में आने वाला",
            "18,000",
            "बचत",
            "चाहतों"
          ],
          "items": [
            [
              "कुछ भी कटने से पहले का वेतन @@ वेतन कहलाता है।",
              "सकल"
            ],
            [
              "भविष्य निधि और कर @@ हैं।",
              "कटौती"
            ],
            [
              "जो रक़म तुम्हारे बैंक में आती है वह @@ वेतन है।",
              "हाथ में आने वाला"
            ],
            [
              "20,000 में से 1,200 और 800 घटाने पर @@ रुपये बचते हैं।",
              "18,000"
            ],
            [
              "ख़र्च करने से पहले तय करो और पहले @@ करो।",
              "बचत"
            ]
          ]
        },
        "sortTitle": "कटौती से पहले या बाद?",
        "sortOpts": [
          {
            "k": "gross",
            "t": "सकल (पहले)"
          },
          {
            "k": "net",
            "t": "हाथ में आया (बाद में)"
          }
        ],
        "sort": [
          {
            "icon": "note",
            "label": "प्रस्ताव-पत्र में लिखे 20,000",
            "a": "gross"
          },
          {
            "icon": "bank",
            "label": "बैंक में आए 18,000",
            "a": "net"
          },
          {
            "icon": "payslip",
            "label": "भविष्य निधि और कर कटने से पहले का वेतन",
            "a": "gross"
          },
          {
            "icon": "coin",
            "label": "वह रक़म जो सचमुच ख़र्च कर सकते हो",
            "a": "net"
          },
          {
            "icon": "passbook",
            "label": "सारी कटौती के बाद का वेतन",
            "a": "net"
          }
        ],
        "tf": [
          {
            "q": "हाथ में आने वाला वेतन हमेशा सकल वेतन के बराबर होता है।",
            "a": false
          },
          {
            "q": "भविष्य निधि का पैसा तुम्हारे भविष्य के लिए जमा होता है।",
            "a": true
          },
          {
            "q": "तनख़्वाह से पहले तय करना मददगार है कि पैसा कहाँ जाएगा।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "सकल वेतन 30,000 है। कटौतियाँ 2,000 और 1,000 हैं। हाथ में आने वाला वेतन कितना है?",
            "opts": [
              "27,000",
              "33,000",
              "29,000"
            ],
            "a": 0
          },
          {
            "q": "तुम 18,000 के हाथ में आए वेतन का पाँचवाँ हिस्सा बचाने का तय करते हो। कितना बचाओगे?",
            "opts": [
              "3,600",
              "1,800",
              "5,400"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अपनी पे-स्लिप पढ़ूँग[[ा|ी]], पैसे आने से पहले तय करूँग[[ा|ी]] कि वह कहाँ जाएगा, और सबसे पहले बचत करूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "एकूण पगार म्हणजे काहीही कापलं जाण्याआधीची रक्कम.",
          "भविष्य निर्वाह निधी आणि कर यांसारख्या कपाती पगार मिळण्याआधीच कापल्या जातात.",
          "हातात येणारा पगार म्हणजे एकूण पगारातून कपात वजा केलेली रक्कम. 20,000 वजा 1,200 वजा 800 बरोबर 18,000.",
          "पगाराआधी ठरव: आधी बचत, मग गरजा, आणि जे उरेल त्यातून इच्छा."
        ],
        "fill": {
          "bank": [
            "एकूण",
            "कपात",
            "हातात येणारा",
            "18,000",
            "बचत",
            "इच्छांवर"
          ],
          "items": [
            [
              "काहीही कापलं जाण्याआधीच्या पगाराला @@ पगार म्हणतात.",
              "एकूण"
            ],
            [
              "भविष्य निर्वाह निधी आणि कर या @@ आहेत.",
              "कपात"
            ],
            [
              "तुझ्या बँकेत जी रक्कम येते तो @@ पगार.",
              "हातात येणारा"
            ],
            [
              "20,000 वजा 1,200 वजा 800 केल्यावर @@ रुपये उरतात.",
              "18,000"
            ],
            [
              "खर्च करण्याआधी ठरव आणि आधी @@ कर.",
              "बचत"
            ]
          ]
        },
        "sortTitle": "कपातीआधी की नंतर?",
        "sortOpts": [
          {
            "k": "gross",
            "t": "एकूण (आधी)"
          },
          {
            "k": "net",
            "t": "हातात आलेला (नंतर)"
          }
        ],
        "sort": [
          {
            "icon": "note",
            "label": "ऑफर लेटरमध्ये लिहिलेले 20,000",
            "a": "gross"
          },
          {
            "icon": "bank",
            "label": "बँकेत आलेले 18,000",
            "a": "net"
          },
          {
            "icon": "payslip",
            "label": "भविष्य निर्वाह निधी आणि कर कापण्याआधीचा पगार",
            "a": "gross"
          },
          {
            "icon": "coin",
            "label": "जी रक्कम तू खरोखर खर्च करू शकतोस",
            "a": "net"
          },
          {
            "icon": "passbook",
            "label": "सर्व कपातींनंतरचा पगार",
            "a": "net"
          }
        ],
        "tf": [
          {
            "q": "हातात येणारा पगार नेहमी एकूण पगाराइतकाच असतो.",
            "a": false
          },
          {
            "q": "भविष्य निर्वाह निधीचा पैसा तुझ्या भविष्यासाठी साठवला जातो.",
            "a": true
          },
          {
            "q": "पगाराआधी पैसे कुठे जाणार ते ठरवणं उपयोगी असतं.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "एकूण पगार 30,000 आहे. कपाती 2,000 आणि 1,000 आहेत. हातात येणारा पगार किती?",
            "opts": [
              "27,000",
              "33,000",
              "29,000"
            ],
            "a": 0
          },
          {
            "q": "तू हातात आलेल्या 18,000 पैकी पाचवा भाग वाचवायचं ठरवलंस. किती वाचवशील?",
            "opts": [
              "3,600",
              "1,800",
              "5,400"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की माझी पे-स्लिप वाचेन, पैसे येण्याआधी ठरवेन की ते कुठे जाणार, आणि सर्वात आधी बचत करेन."
      }
    }
  },
  {
    "slug": "kite-company",
    "status": "live",
    "color": "#ffc6ff",
    "title": {
      "en": "{name} and the Kite Company",
      "hi": "{name} और पतंग कंपनी",
      "mr": "{name} आणि पतंग कंपनी"
    },
    "cardTitle": {
      "en": "The Kite Company",
      "hi": "पतंग कंपनी",
      "mr": "पतंग कंपनी"
    },
    "subtitle": {
      "en": "What is a share?",
      "hi": "शेयर क्या होता है?",
      "mr": "शेअर म्हणजे काय?"
    },
    "topic": {
      "en": "Shares",
      "hi": "शेयर",
      "mr": "शेअर"
    },
    "stops": {
      "en": [
        "Three Friends",
        "Ten Slices",
        "Wind and Rain",
        "Money to Leave Alone"
      ],
      "hi": [
        "तीन दोस्त",
        "दस टुकड़े",
        "हवा और बारिश",
        "छोड़कर रखा पैसा"
      ],
      "mr": [
        "तीन मित्र",
        "दहा तुकडे",
        "वारा आणि पाऊस",
        "सोडून ठेवलेले पैसे"
      ]
    },
    "scenes": [
      "You and two friends stand in front of a table full of paper kites, with 1,000 rupees written on the blackboard.",
      "A round chart cut into 10 slices, with one slice pulled out beside a certificate and a 100 rupee tag.",
      "On one side a sunny day with high kites and a tag of 120 going up, on the other a rainy day with fallen kites and a tag of 80 going down.",
      "You stand proudly beside a full emergency jar, with the share certificate framed on the wall."
    ],
    "story": {
      "en": [
        "Makar Sankranti was coming, and you and your two friends had a big idea: \"Let us start a kite company!\" You needed 1,000 rupees to buy paper, sticks and string. Each of you put in some money, and together you made a pile of 1,000 rupees. \"We are not just friends now,\" said Gullu. \"We are the owners of a little company!\"",
        "Gullu drew a round chart on the board. \"Let us cut the company into 10 equal slices,\" he said. \"1,000 divided by 10 makes 100 rupees for each slice. Each slice is called a share. If you own one share, you own one tenth of the company.\" You gave 100 rupees, and a friend handed you a paper certificate with a little kite on it. \"A share is a small piece of a company that you own,\" said Gullu.",
        "Festival week came with a strong, sunny wind. The kites sold out! People said the company was doing well, and each slice was now worth 120 rupees. Then came a rainy month with no wind, and nobody wanted kites. Each slice dropped to 80 rupees. You frowned. \"The value of a share goes up and down,\" said Gullu. \"Nobody can know ahead of time. It changes with how the company does and what people think of it.\"",
        "\"Should I put all my savings into kite shares?\" you asked. \"No!\" said Gullu firmly. \"First fill your emergency jar. Use only money you can leave alone for a long time, never money you need for food or fees, and never borrowed money. Learn before you invest, and never believe anyone who promises 'sure profit'. Shares can earn money, but you can also lose some or all of it. Only a grown-up can open an account to buy real shares, through a registered broker.\" You hung the certificate on the wall beside your jar. \"Slowly and carefully,\" you said."
      ],
      "hi": [
        "मकर संक्रांति आने वाली थी और तुम्हें व तुम्हारे दो दोस्तों को एक बड़ा विचार सूझा: \"चलो पतंग कंपनी शुरू करें!\" काग़ज़, तीलियों और मांझे के लिए एक हज़ार रुपये चाहिए थे। हर किसी ने कुछ पैसे मिलाए और मिलकर एक हज़ार रुपये की ढेरी बन गई। \"अब हम सिर्फ़ दोस्त नहीं,\" गुल्लू बोला, \"एक छोटी-सी कंपनी के मालिक हैं!\"",
        "गुल्लू ने बोर्ड पर एक गोल चार्ट बनाया। \"कंपनी को दस बराबर टुकड़ों में काटते हैं,\" उसने कहा। \"एक हज़ार भाग दस यानी हर टुकड़े के सौ रुपये। हर टुकड़े को शेयर कहते हैं। एक शेयर तुम्हारा हो तो कंपनी का दसवाँ हिस्सा तुम्हारा।\" तुमने सौ रुपये दिए और एक दोस्त ने तुम्हें छोटी-सी पतंग वाला काग़ज़ का प्रमाणपत्र थमाया। \"शेयर कंपनी का वह छोटा हिस्सा है जो तुम्हारा होता है,\" गुल्लू बोला।",
        "त्योहार का हफ़्ता तेज़, धूप वाली हवा लेकर आया। पतंगें हाथों-हाथ बिक गईं! लोग कहने लगे कि कंपनी अच्छा कर रही है और हर टुकड़े की क़ीमत अब 120 रुपये थी। फिर बारिश का एक महीना आया, हवा नहीं चली और पतंगें कोई नहीं ख़रीदता था। हर टुकड़ा 80 रुपये पर आ गया। तुमने माथे पर बल डाले। \"शेयर की क़ीमत ऊपर-नीचे होती रहती है,\" गुल्लू बोला। \"पहले से कोई नहीं जान सकता। क़ीमत इस पर बदलती है कि कंपनी कैसा कर रही है और लोग उसके बारे में क्या सोचते हैं।\"",
        "\"क्या मैं अपनी सारी बचत पतंग के शेयरों में लगा दूँ?\" तुमने पूछा। \"बिलकुल नहीं!\" गुल्लू ने दृढ़ता से कहा। \"पहले अपनी आपात बरनी भरो। सिर्फ़ वही पैसा लगाओ जिसे तुम लंबे समय तक छोड़कर रख सको, खाने या फ़ीस के पैसे कभी नहीं, और उधार का पैसा तो कभी नहीं। निवेश से पहले सीखो, और 'पक्का मुनाफ़ा' का वादा करने वाले पर कभी भरोसा मत करो। शेयर से कमाई हो सकती है, पर थोड़ा या सारा पैसा डूब भी सकता है। असली शेयर ख़रीदने का खाता सिर्फ़ कोई बड़ा खुलवा सकता है, पंजीकृत ब्रोकर के ज़रिए।\" तुमने प्रमाणपत्र को बरनी के पास दीवार पर टाँग दिया। \"धीरे-धीरे और सोच-समझकर,\" तुमने कहा।"
      ],
      "mr": [
        "मकर संक्रांत जवळ आली होती आणि तुला व तुझ्या दोन मित्रांना एक मोठी कल्पना सुचली: \"चला पतंग कंपनी सुरू करू!\" कागद, काड्या आणि मांजासाठी एक हजार रुपये हवे होते. प्रत्येकाने थोडे पैसे घातले आणि मिळून एक हजार रुपयांची रास झाली. \"आता आपण फक्त मित्र नाही,\" गल्लू म्हणाला, \"एका छोट्या कंपनीचे मालक आहोत!\"",
        "गल्लूने फळ्यावर एक गोल चार्ट काढला. \"कंपनीचे दहा समान तुकडे करू,\" तो म्हणाला. \"एक हजार भागिले दहा म्हणजे प्रत्येक तुकड्याचे शंभर रुपये. प्रत्येक तुकड्याला शेअर म्हणतात. एक शेअर तुझा असेल तर कंपनीचा दहावा भाग तुझा.\" तू शंभर रुपये दिलेस आणि एका मित्राने तुला छोट्या पतंगाचं कागदी प्रमाणपत्र दिलं. \"शेअर म्हणजे कंपनीचा तो छोटा भाग जो तुझा असतो,\" गल्लू म्हणाला.",
        "सणाचा आठवडा ऊन आणि जोराचा वारा घेऊन आला. पतंग हातोहात विकले गेले! लोक म्हणू लागले की कंपनी चांगली चालली आहे आणि प्रत्येक तुकड्याची किंमत आता 120 रुपये होती. मग पावसाचा एक महिना आला, वारा नव्हता आणि पतंग कोणी घेत नव्हतं. प्रत्येक तुकडा 80 रुपयांवर आला. तू कपाळाला आठ्या घातल्यास. \"शेअरची किंमत वर-खाली होत असते,\" गल्लू म्हणाला. \"आधीच कोणाला कळत नाही. किंमत कंपनी कशी चालते आणि लोक तिच्याबद्दल काय विचार करतात यावर बदलते.\"",
        "\"मी माझी सगळी बचत पतंगाच्या शेअरांत घालू का?\" तू विचारलंस. \"अजिबात नाही!\" गल्लू ठामपणे म्हणाला. \"आधी तुझी आणीबाणीची बरणी भर. फक्त असेच पैसे लाव जे बराच काळ सोडून ठेवता येतील, जेवणाचे किंवा फीचे पैसे कधीच नाही, आणि उसने घेतलेले पैसे तर कधीच नाही. गुंतवणुकीआधी शिक, आणि 'खात्रीशीर नफा' असं वचन देणाऱ्यावर कधीच विश्वास ठेवू नकोस. शेअरमधून कमाई होऊ शकते, पण थोडे किंवा सगळे पैसे बुडूही शकतात. खरे शेअर घेण्याचं खातं फक्त मोठी व्यक्तीच उघडू शकते, नोंदणीकृत ब्रोकरमार्फत.\" तू प्रमाणपत्र बरणीशेजारी भिंतीवर टांगलंस. \"हळूहळू आणि विचारपूर्वक,\" तू म्हणाल[[ास|ीस]]."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A share is a small slice of a company that you own.",
          "A company of 1,000 rupees cut into 10 slices makes each slice 100 rupees.",
          "A share's value can go up or down, and no one can promise a profit.",
          "Invest only money you can leave alone, after your emergency jar is full."
        ],
        "fill": {
          "bank": [
            "share",
            "100",
            "up",
            "down",
            "guarantee",
            "company"
          ],
          "items": [
            [
              "A small slice of a company that you own is called a @@.",
              "share"
            ],
            [
              "1,000 rupees ÷ 10 slices = @@ rupees for each slice.",
              "100"
            ],
            [
              "When the kites sell well, a share's value may go @@.",
              "up"
            ],
            [
              "When the kites do not sell, the value may go @@.",
              "down"
            ],
            [
              "No one can @@ that a share will make a profit.",
              "guarantee"
            ]
          ]
        },
        "sortTitle": "May go up or down?",
        "sortOpts": [
          {
            "k": "up",
            "t": "May go up"
          },
          {
            "k": "down",
            "t": "May go down"
          }
        ],
        "sort": [
          {
            "icon": "kite",
            "label": "Everyone wants the new kite design",
            "a": "up"
          },
          {
            "icon": "down",
            "label": "A rainy month with no wind to fly kites",
            "a": "down"
          },
          {
            "icon": "up",
            "label": "The company sells many more kites than last year",
            "a": "up"
          },
          {
            "icon": "pie",
            "label": "The workshop floods and no kites can be made",
            "a": "down"
          },
          {
            "icon": "cert",
            "label": "Customers complain about broken kites",
            "a": "down"
          }
        ],
        "tf": [
          {
            "q": "A share means you own a small part of a company.",
            "a": true
          },
          {
            "q": "A share's price always goes up.",
            "a": false
          },
          {
            "q": "You should use next month's food money to buy shares.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "A company is worth 5,000 rupees and has 50 shares. What is one share worth?",
            "opts": [
              "100",
              "50",
              "250"
            ],
            "a": 0
          },
          {
            "q": "You bought one share for 100 rupees and now it is worth 80 rupees. What happened?",
            "opts": [
              "The value went down by 20",
              "The value went up by 20",
              "Nothing changed"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to learn before I invest, to use only money I can leave alone, and never to believe \"sure profit\" promises."
      },
      "hi": {
        "remember": [
          "शेयर किसी कंपनी का वह छोटा हिस्सा है जो तुम्हारा होता है।",
          "1,000 रुपये की कंपनी के 10 टुकड़े करें तो हर टुकड़ा 100 रुपये का होता है।",
          "शेयर की क़ीमत ऊपर-नीचे हो सकती है और मुनाफ़े का वादा कोई नहीं कर सकता।",
          "सिर्फ़ वही पैसा लगाओ जिसे छोड़ सको, और पहले आपात बरनी भरो।"
        ],
        "fill": {
          "bank": [
            "शेयर",
            "100",
            "ऊपर",
            "नीचे",
            "गारंटी",
            "कंपनी"
          ],
          "items": [
            [
              "कंपनी के उस छोटे हिस्से को, जो तुम्हारा होता है, @@ कहते हैं।",
              "शेयर"
            ],
            [
              "1,000 रुपये ÷ 10 टुकड़े = हर टुकड़े के @@ रुपये।",
              "100"
            ],
            [
              "पतंगें अच्छी बिकें तो शेयर की क़ीमत @@ जा सकती है।",
              "ऊपर"
            ],
            [
              "पतंगें न बिकें तो क़ीमत @@ आ सकती है।",
              "नीचे"
            ],
            [
              "शेयर से मुनाफ़े की @@ कोई नहीं दे सकता।",
              "गारंटी"
            ]
          ]
        },
        "sortTitle": "ऊपर जाएगा या नीचे?",
        "sortOpts": [
          {
            "k": "up",
            "t": "ऊपर जा सकता है"
          },
          {
            "k": "down",
            "t": "नीचे आ सकता है"
          }
        ],
        "sort": [
          {
            "icon": "kite",
            "label": "सब नई पतंग का डिज़ाइन चाहते हैं",
            "a": "up"
          },
          {
            "icon": "down",
            "label": "बारिश का महीना, पतंग उड़ाने लायक़ हवा नहीं",
            "a": "down"
          },
          {
            "icon": "up",
            "label": "कंपनी पिछले साल से कहीं ज़्यादा पतंगें बेचती है",
            "a": "up"
          },
          {
            "icon": "pie",
            "label": "कारख़ाने में पानी भर गया, पतंगें नहीं बन सकतीं",
            "a": "down"
          },
          {
            "icon": "cert",
            "label": "ग्राहक टूटी पतंगों की शिकायत करते हैं",
            "a": "down"
          }
        ],
        "tf": [
          {
            "q": "शेयर का मतलब है कि तुम कंपनी के एक छोटे हिस्से के मालिक हो।",
            "a": true
          },
          {
            "q": "शेयर की क़ीमत हमेशा बढ़ती ही है।",
            "a": false
          },
          {
            "q": "अगले महीने के खाने के पैसों से शेयर ख़रीदने चाहिए।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "एक कंपनी 5,000 रुपये की है और उसके 50 शेयर हैं। एक शेयर की क़ीमत कितनी है?",
            "opts": [
              "100",
              "50",
              "250"
            ],
            "a": 0
          },
          {
            "q": "तुमने एक शेयर 100 रुपये में ख़रीदा और अब उसकी क़ीमत 80 रुपये है। क्या हुआ?",
            "opts": [
              "क़ीमत 20 घट गई",
              "क़ीमत 20 बढ़ गई",
              "कुछ नहीं बदला"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि निवेश से पहले सीखूँग[[ा|ी]], सिर्फ़ वही पैसा लगाऊँग[[ा|ी]] जिसे छोड़ सकूँ, और \"पक्का मुनाफ़ा\" के वादों पर कभी भरोसा नहीं करूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "शेअर म्हणजे कंपनीचा तो छोटा भाग जो तुझा असतो.",
          "1,000 रुपयांच्या कंपनीचे 10 तुकडे केले तर प्रत्येक तुकडा 100 रुपयांचा असतो.",
          "शेअरची किंमत वर-खाली होऊ शकते आणि नफ्याचं वचन कोणीही देऊ शकत नाही.",
          "फक्त तेच पैसे लाव जे सोडून ठेवता येतील, आणि आधी आणीबाणीची बरणी भर."
        ],
        "fill": {
          "bank": [
            "शेअर",
            "100",
            "वर",
            "खाली",
            "खात्री",
            "कंपनी"
          ],
          "items": [
            [
              "कंपनीच्या तुझ्या मालकीच्या छोट्या भागाला @@ म्हणतात.",
              "शेअर"
            ],
            [
              "1,000 रुपये ÷ 10 तुकडे = प्रत्येक तुकड्याचे @@ रुपये.",
              "100"
            ],
            [
              "पतंग चांगले विकले गेले तर शेअरची किंमत @@ जाऊ शकते.",
              "वर"
            ],
            [
              "पतंग विकले गेले नाहीत तर किंमत @@ येऊ शकते.",
              "खाली"
            ],
            [
              "शेअरमधून नफ्याची @@ कोणीही देऊ शकत नाही.",
              "खात्री"
            ]
          ]
        },
        "sortTitle": "वर जाईल की खाली?",
        "sortOpts": [
          {
            "k": "up",
            "t": "वर जाऊ शकतं"
          },
          {
            "k": "down",
            "t": "खाली येऊ शकतं"
          }
        ],
        "sort": [
          {
            "icon": "kite",
            "label": "सगळ्यांना नवीन पतंगाचं डिझाइन हवं आहे",
            "a": "up"
          },
          {
            "icon": "down",
            "label": "पावसाचा महिना, पतंग उडवायला वारा नाही",
            "a": "down"
          },
          {
            "icon": "up",
            "label": "कंपनी गेल्या वर्षीपेक्षा खूपच जास्त पतंग विकते",
            "a": "up"
          },
          {
            "icon": "pie",
            "label": "कारखान्यात पाणी भरलं, पतंग बनवता येत नाहीत",
            "a": "down"
          },
          {
            "icon": "cert",
            "label": "ग्राहक तुटक्या पतंगांबद्दल तक्रार करतात",
            "a": "down"
          }
        ],
        "tf": [
          {
            "q": "शेअर म्हणजे कंपनीच्या एका छोट्या भागाची मालकी.",
            "a": true
          },
          {
            "q": "शेअरची किंमत नेहमी वाढतच जाते.",
            "a": false
          },
          {
            "q": "पुढच्या महिन्याच्या जेवणाच्या पैशांतून शेअर घ्यावेत.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "एका कंपनीची किंमत 5,000 रुपये आहे आणि तिचे 50 शेअर आहेत. एका शेअरची किंमत किती?",
            "opts": [
              "100",
              "50",
              "250"
            ],
            "a": 0
          },
          {
            "q": "तू एक शेअर 100 रुपयांना घेतलास आणि आता त्याची किंमत 80 रुपये आहे. काय झालं?",
            "opts": [
              "किंमत 20 ने घटली",
              "किंमत 20 ने वाढली",
              "काही बदललं नाही"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की गुंतवणुकीआधी शिकेन, फक्त सोडून ठेवता येतील तेवढेच पैसे लावीन, आणि \"खात्रीशीर नफा\"च्या वचनांवर कधीच विश्वास ठेवणार नाही."
      }
    }
  },
  {
    "slug": "growing-staircase",
    "status": "live",
    "color": "#a9def9",
    "title": {
      "en": "{name} and the Growing Staircase",
      "hi": "{name} और बढ़ती सीढ़ी",
      "mr": "{name} आणि वाढता जिना"
    },
    "cardTitle": {
      "en": "The Growing Staircase",
      "hi": "बढ़ती सीढ़ी",
      "mr": "वाढता जिना"
    },
    "subtitle": {
      "en": "Simple and compound interest",
      "hi": "साधारण और चक्रवृद्धि ब्याज",
      "mr": "साधं आणि चक्रवाढ व्याज"
    },
    "topic": {
      "en": "Compound interest",
      "hi": "चक्रवृद्धि ब्याज",
      "mr": "चक्रवाढ व्याज"
    },
    "stops": {
      "en": [
        "The Deposit",
        "Year One",
        "Year Two",
        "Twenty Years"
      ],
      "hi": [
        "जमा",
        "पहला साल",
        "दूसरा साल",
        "बीस साल"
      ],
      "mr": [
        "ठेव",
        "पहिलं वर्ष",
        "दुसरं वर्ष",
        "वीस वर्षं"
      ]
    },
    "scenes": [
      "You hand Meena Didi 1,000 rupees at the bank counter while a board shows 1,000 and a tag says 10 percent.",
      "A table shows a tall stack of coins and a new coin glowing beside it, with a plus 100 tag and a calendar tick.",
      "Three steps of coins grow taller, with a plus 110 tag, as you throw up your arm in surprise.",
      "A short stack of 3,000 stands beside a much taller stack of 6,727 under a board showing 20."
    ],
    "story": {
      "en": [
        "Meena Didi smiled as you handed her 1,000 rupees for a deposit. \"Let us imagine this bank pays 10 rupees on every 100 rupees each year,\" she said. \"That is 10 percent. Real rates are usually lower, but 10 makes the maths easy.\" Gullu climbed onto the counter. \"Today you are standing on the bottom step of a staircase, {name}. Watch it grow.\"",
        "After one year, 10 percent of 1,000 is 100 rupees. \"1,000 plus 100 makes 1,100 rupees,\" said Gullu, writing on the blackboard. You ticked the first box on the calendar. \"This is simple interest if you take the 100 out every year: always 100, on the first 1,000 only. But if you leave the 100 in, something magical begins.\"",
        "In the second year, the bank paid interest on 1,100, not just 1,000. 10 percent of 1,100 is 110 rupees. \"1,100 plus 110 makes 1,210,\" said Gullu. \"See the extra 10? That is interest on your interest! This is called compound interest. Each step of the staircase is taller than the last.\" You jumped for joy.",
        "Gullu showed you what happens after twenty years. With simple interest, you would have 1,000 plus 20 times 100, which is 3,000 rupees. With compound interest, the same 1,000 would grow to about 6,727 rupees, more than double! \"Time is the secret,\" said Gullu. \"Start early, add regularly and leave it alone. But remember, loans can compound too, against you. That is why even a small debt can grow big.\""
      ],
      "hi": [
        "मीना दीदी मुस्कुराईं जब तुमने उन्हें जमा के लिए 1,000 रुपये दिए। \"मान लो यह बैंक हर साल हर सौ रुपये पर दस रुपये देता है,\" उन्होंने कहा। \"यानी दस प्रतिशत। असली दरें आम तौर पर कम होती हैं, पर दस से हिसाब आसान हो जाता है।\" गुल्लू काउंटर पर चढ़ गया। \"आज तुम सीढ़ी की सबसे नीचे वाली पायदान पर खड़[[े|ी]] हो, {name}। देखो यह कैसे बढ़ती है।\"",
        "एक साल बाद 1,000 का दस प्रतिशत यानी 100 रुपये हुआ। \"1,000 और 100 मिलकर 1,100 रुपये,\" गुल्लू ने ब्लैकबोर्ड पर लिखा। तुमने कैलेंडर का पहला ख़ाना टिक किया। \"यह साधारण ब्याज है अगर हर साल वे 100 निकाल लो: हमेशा 100, सिर्फ़ पहले 1,000 पर। पर अगर तुम उन 100 को वहीं रहने दो, तो एक जादू शुरू होता है।\"",
        "दूसरे साल बैंक ने सिर्फ़ 1,000 पर नहीं, 1,100 पर ब्याज दिया। 1,100 का दस प्रतिशत 110 रुपये है। \"1,100 और 110 मिलकर 1,210,\" गुल्लू बोला। \"वह अतिरिक्त 10 देखो? वह तुम्हारे ब्याज पर ब्याज है! इसे चक्रवृद्धि ब्याज कहते हैं। सीढ़ी की हर पायदान पिछली से ऊँची है।\" तुम ख़ुशी से उछल पड़[[े|ीं]]।",
        "गुल्लू ने तुम्हें दिखाया कि बीस साल बाद क्या होता है। साधारण ब्याज में तुम्हारे पास 1,000 और 20 गुना 100 यानी 3,000 रुपये होते। चक्रवृद्धि ब्याज में वही 1,000 बढ़कर लगभग 6,727 रुपये हो जाते, दुगुने से भी ज़्यादा! \"समय ही राज़ है,\" गुल्लू बोला। \"जल्दी शुरू करो, नियम से जोड़ो, और छुओ मत। पर याद रखो, कर्ज़ भी चक्रवृद्धि से बढ़ सकता है, तुम्हारे ख़िलाफ़। इसीलिए छोटा कर्ज़ भी बड़ा हो सकता है।\""
      ],
      "mr": [
        "मीना ताई हसल्या जेव्हा तू त्यांना ठेवीसाठी 1,000 रुपये दिलेस. \"समज ही बँक दर वर्षी प्रत्येक शंभर रुपयांवर दहा रुपये देते,\" त्या म्हणाल्या. \"म्हणजे दहा टक्के. खरे दर सहसा कमी असतात, पण दहामुळे हिशोब सोपा होतो.\" गल्लू काउंटरवर चढला. \"आज तू जिन्याच्या सगळ्यात खालच्या पायरीवर उभ[[ा|ी]] आहेस, {name}. बघ तो कसा वाढतो.\"",
        "एका वर्षानंतर 1,000 चे दहा टक्के म्हणजे 100 रुपये झाले. \"1,000 आणि 100 मिळून 1,100 रुपये,\" गल्लूने फळ्यावर लिहिलं. तू कॅलेंडरचा पहिला चौकोन टिक केलास. \"हे साधं व्याज आहे, जर दर वर्षी ते 100 काढून घेतलेस तर: नेहमी 100, फक्त पहिल्या 1,000 वर. पण जर तू ते 100 तिथेच राहू दिलेस, तर एक जादू सुरू होते.\"",
        "दुसऱ्या वर्षी बँकेने फक्त 1,000 वर नाही, 1,100 वर व्याज दिलं. 1,100 चे दहा टक्के 110 रुपये आहेत. \"1,100 आणि 110 मिळून 1,210,\" गल्लू म्हणाला. \"ते जादा 10 बघ? ते तुझ्या व्याजावरचं व्याज आहे! याला चक्रवाढ व्याज म्हणतात. जिन्याची प्रत्येक पायरी मागच्यापेक्षा उंच आहे.\" तू आनंदाने उड्या मारल्यास.",
        "गल्लूने तुला वीस वर्षांनंतर काय होतं ते दाखवलं. साध्या व्याजात तुझ्याकडे 1,000 आणि 20 गुणिले 100, म्हणजे 3,000 रुपये झाले असते. चक्रवाढ व्याजात तेच 1,000 वाढून सुमारे 6,727 रुपये झाले असते, दुपटीपेक्षाही जास्त! \"वेळ हेच रहस्य आहे,\" गल्लू म्हणाला. \"लवकर सुरुवात कर, नियमितपणे भर घाल, आणि हात लावू नकोस. पण लक्षात ठेव, कर्जही चक्रवाढीने वाढू शकतं, तुझ्या विरोधात. म्हणूनच छोटं कर्जही मोठं होऊ शकतं.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Simple interest is paid only on the money you first put in.",
          "Compound interest is paid on the money plus the interest already earned.",
          "1,000 at 10 percent: 1,100 after one year, 1,210 after two, and about 6,727 after twenty.",
          "Start early and leave it alone. Loans can compound too, so borrow carefully."
        ],
        "fill": {
          "bank": [
            "simple",
            "compound",
            "1,100",
            "1,210",
            "early",
            "interest"
          ],
          "items": [
            [
              "Interest on only the first amount is @@ interest.",
              "simple"
            ],
            [
              "Interest on the amount plus past interest is @@ interest.",
              "compound"
            ],
            [
              "After one year, 1,000 at 10 percent becomes @@ rupees.",
              "1,100"
            ],
            [
              "After two years it becomes @@ rupees.",
              "1,210"
            ],
            [
              "To make the staircase tall, start @@ and wait.",
              "early"
            ]
          ]
        },
        "sortTitle": "Simple or compound?",
        "sortOpts": [
          {
            "k": "simple",
            "t": "Simple"
          },
          {
            "k": "comp",
            "t": "Compound"
          }
        ],
        "sort": [
          {
            "icon": "ledger",
            "label": "Interest is always counted on the first 1,000 only",
            "a": "simple"
          },
          {
            "icon": "stairs",
            "label": "Interest is also counted on interest already earned",
            "a": "comp"
          },
          {
            "icon": "tree",
            "label": "The money grows faster the longer you wait",
            "a": "comp"
          },
          {
            "icon": "coin",
            "label": "You get the same 100 rupees every year",
            "a": "simple"
          },
          {
            "icon": "seed",
            "label": "Year 2 interest is 110, bigger than year 1",
            "a": "comp"
          }
        ],
        "tf": [
          {
            "q": "Compound interest is paid on interest already earned.",
            "a": true
          },
          {
            "q": "Simple interest grows faster than compound interest over many years.",
            "a": false
          },
          {
            "q": "Loans can also grow with compound interest.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "You put 2,000 rupees at 10 percent simple interest. How much interest do you get in one year?",
            "opts": [
              "200",
              "20",
              "2,200"
            ],
            "a": 0
          },
          {
            "q": "In year two, 1,100 rupees earns 10 percent compound interest. How much is the interest?",
            "opts": [
              "110",
              "100",
              "11"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to start saving early, to let my money grow without touching it, and to think carefully before I borrow."
      },
      "hi": {
        "remember": [
          "साधारण ब्याज सिर्फ़ उस पैसे पर मिलता है जो तुमने शुरू में जमा किया।",
          "चक्रवृद्धि ब्याज पैसे और अब तक मिले ब्याज, दोनों पर मिलता है।",
          "10 प्रतिशत पर 1,000: एक साल बाद 1,100, दो साल बाद 1,210 और बीस साल बाद लगभग 6,727।",
          "जल्दी शुरू करो और छुओ मत। कर्ज़ भी चक्रवृद्धि से बढ़ता है, इसलिए सोच-समझकर लो।"
        ],
        "fill": {
          "bank": [
            "साधारण",
            "चक्रवृद्धि",
            "1,100",
            "1,210",
            "जल्दी",
            "ब्याज"
          ],
          "items": [
            [
              "सिर्फ़ पहली रक़म पर मिलने वाला ब्याज @@ ब्याज कहलाता है।",
              "साधारण"
            ],
            [
              "रक़म और पिछले ब्याज पर मिलने वाला ब्याज @@ ब्याज कहलाता है।",
              "चक्रवृद्धि"
            ],
            [
              "10 प्रतिशत पर 1,000 रुपये एक साल बाद @@ रुपये हो जाते हैं।",
              "1,100"
            ],
            [
              "दो साल बाद वे @@ रुपये हो जाते हैं।",
              "1,210"
            ],
            [
              "सीढ़ी ऊँची करनी हो तो @@ शुरू करो और इंतज़ार करो।",
              "जल्दी"
            ]
          ]
        },
        "sortTitle": "साधारण या चक्रवृद्धि?",
        "sortOpts": [
          {
            "k": "simple",
            "t": "साधारण"
          },
          {
            "k": "comp",
            "t": "चक्रवृद्धि"
          }
        ],
        "sort": [
          {
            "icon": "ledger",
            "label": "ब्याज हमेशा सिर्फ़ पहले 1,000 पर गिना जाता है",
            "a": "simple"
          },
          {
            "icon": "stairs",
            "label": "मिले हुए ब्याज पर भी ब्याज गिना जाता है",
            "a": "comp"
          },
          {
            "icon": "tree",
            "label": "जितना इंतज़ार, पैसा उतना तेज़ बढ़ता है",
            "a": "comp"
          },
          {
            "icon": "coin",
            "label": "हर साल उतने ही 100 रुपये मिलते हैं",
            "a": "simple"
          },
          {
            "icon": "seed",
            "label": "दूसरे साल का ब्याज 110 है, पहले साल से ज़्यादा",
            "a": "comp"
          }
        ],
        "tf": [
          {
            "q": "चक्रवृद्धि ब्याज पहले से मिले ब्याज पर भी लगता है।",
            "a": true
          },
          {
            "q": "कई सालों में साधारण ब्याज चक्रवृद्धि ब्याज से तेज़ बढ़ता है।",
            "a": false
          },
          {
            "q": "कर्ज़ भी चक्रवृद्धि ब्याज से बढ़ सकता है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "2,000 रुपये 10 प्रतिशत साधारण ब्याज पर रखे जाएँ, तो एक साल में कितना ब्याज मिलेगा?",
            "opts": [
              "200",
              "20",
              "2,200"
            ],
            "a": 0
          },
          {
            "q": "दूसरे साल 1,100 रुपये पर 10 प्रतिशत चक्रवृद्धि ब्याज लगता है। ब्याज कितना हुआ?",
            "opts": [
              "110",
              "100",
              "11"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि जल्दी बचत शुरू करूँग[[ा|ी]], अपने पैसे को छुए बिना बढ़ने दूँग[[ा|ी]], और कर्ज़ लेने से पहले ध्यान से सोचूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "साधं व्याज फक्त सुरुवातीला भरलेल्या पैशांवरच मिळतं.",
          "चक्रवाढ व्याज पैसे आणि आतापर्यंत मिळालेलं व्याज, दोन्हींवर मिळतं.",
          "10 टक्क्यांवर 1,000: एका वर्षानंतर 1,100, दोन वर्षांनी 1,210 आणि वीस वर्षांनी सुमारे 6,727.",
          "लवकर सुरुवात कर आणि हात लावू नकोस. कर्जही चक्रवाढीने वाढतं, म्हणून विचारपूर्वक घे."
        ],
        "fill": {
          "bank": [
            "साधं",
            "चक्रवाढ",
            "1,100",
            "1,210",
            "लवकर",
            "व्याज"
          ],
          "items": [
            [
              "फक्त पहिल्या रकमेवरचं व्याज म्हणजे @@ व्याज.",
              "साधं"
            ],
            [
              "रक्कम आणि आधीच्या व्याजावरचं व्याज म्हणजे @@ व्याज.",
              "चक्रवाढ"
            ],
            [
              "10 टक्क्यांवर 1,000 रुपये एका वर्षानंतर @@ रुपये होतात.",
              "1,100"
            ],
            [
              "दोन वर्षांनी ते @@ रुपये होतात.",
              "1,210"
            ],
            [
              "जिना उंच करायचा असेल तर @@ सुरुवात कर आणि थांब.",
              "लवकर"
            ]
          ]
        },
        "sortTitle": "साधं की चक्रवाढ?",
        "sortOpts": [
          {
            "k": "simple",
            "t": "साधं"
          },
          {
            "k": "comp",
            "t": "चक्रवाढ"
          }
        ],
        "sort": [
          {
            "icon": "ledger",
            "label": "व्याज नेहमी फक्त पहिल्या 1,000 वरच मोजलं जातं",
            "a": "simple"
          },
          {
            "icon": "stairs",
            "label": "मिळालेल्या व्याजावरही व्याज मोजलं जातं",
            "a": "comp"
          },
          {
            "icon": "tree",
            "label": "जितकं जास्त थांबावं, पैसा तितका वेगाने वाढतो",
            "a": "comp"
          },
          {
            "icon": "coin",
            "label": "दरवर्षी तेच 100 रुपये मिळतात",
            "a": "simple"
          },
          {
            "icon": "seed",
            "label": "दुसऱ्या वर्षाचं व्याज 110 आहे, पहिल्या वर्षापेक्षा जास्त",
            "a": "comp"
          }
        ],
        "tf": [
          {
            "q": "चक्रवाढ व्याज आधीच मिळालेल्या व्याजावरही लागतं.",
            "a": true
          },
          {
            "q": "अनेक वर्षांत साधं व्याज चक्रवाढ व्याजापेक्षा वेगाने वाढतं.",
            "a": false
          },
          {
            "q": "कर्जही चक्रवाढ व्याजाने वाढू शकतं.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "2,000 रुपये 10 टक्के साध्या व्याजावर ठेवले, तर एका वर्षात किती व्याज मिळेल?",
            "opts": [
              "200",
              "20",
              "2,200"
            ],
            "a": 0
          },
          {
            "q": "दुसऱ्या वर्षी 1,100 रुपयांवर 10 टक्के चक्रवाढ व्याज लागतं. व्याज किती झालं?",
            "opts": [
              "110",
              "100",
              "11"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की लवकर बचत सुरू करीन, माझे पैसे हात न लावता वाढू देईन, आणि कर्ज घेण्याआधी नीट विचार करीन."
      }
    }
  },
  {
    "slug": "two-currencies",
    "status": "live",
    "color": "#a0c4ff",
    "title": {
      "en": "{name} and the Two Coins",
      "hi": "{name} और दो सिक्के",
      "mr": "{name} आणि दोन नाणी"
    },
    "cardTitle": {
      "en": "The Two Coins",
      "hi": "दो सिक्के",
      "mr": "दोन नाणी"
    },
    "subtitle": {
      "en": "What is an exchange rate?",
      "hi": "विनिमय दर क्या है?",
      "mr": "विनिमय दर म्हणजे काय?"
    },
    "topic": {
      "en": "Exchange rates",
      "hi": "विनिमय दर",
      "mr": "विनिमय दर"
    },
    "stops": {
      "en": [
        "A Foreign Note",
        "The Rate Board",
        "Do the Maths",
        "The Rate Moves"
      ],
      "hi": [
        "विदेशी नोट",
        "दर वाला बोर्ड",
        "हिसाब लगाओ",
        "दर बदलता है"
      ],
      "mr": [
        "परदेशी नोट",
        "दराचा फलक",
        "हिशोब कर",
        "दर बदलतो"
      ]
    },
    "scenes": [
      "You look amazed at a green dollar note while Meena Didi stands beside a small chest and Gullu watches.",
      "A green board shows one dollar equals 80 rupees, with a dollar coin and a rupee coin joined by swap arrows.",
      "The board shows 5 times 80 equals 400 while a pencil with a 400 rupee tag floats beside the dollar note.",
      "Two boards show 80 and 85 with an up arrow between them, and two toy footballs wear 800 and 850 rupee tags."
    ],
    "story": {
      "en": [
        "Meena Didi, who works at the bank, came back from a holiday abroad and gave you a green note with a dollar sign. \"A gift for you, {name}!\" she said. You turned it over. \"Can I buy things with this here?\" Gullu hopped onto your shoulder. \"Every country has its own money. India uses rupees, and the United States uses dollars. Here, shops want rupees, so a dollar must be exchanged first.\"",
        "At the bank, a board showed the exchange rate. \"Imagine that today 1 dollar is worth 80 rupees,\" said Meena Didi. \"The exchange rate is the price of one currency in another currency. It tells you how many rupees you get for each dollar. Real rates are different, and they change every day.\" Gullu wrote on the blackboard: $1 = ₹80.",
        "\"So how many rupees is my 5-dollar note?\" you asked. Gullu did the maths: 5 times 80 equals 400 rupees. \"Enough for a fancy pencil set and some snacks!\" Meena Didi added, \"Banks and authorised money changers may charge a small fee, so always ask how many rupees you will get in total before you exchange, and never exchange money with a stranger.\"",
        "A month later, the rate board said 1 dollar = 85 rupees. A toy that costs 10 dollars was 800 rupees last month. Now it was 850! \"Exchange rates change every day,\" said Gullu. \"When one dollar is worth more rupees, things that come from abroad cost more rupees. When it is worth fewer rupees, they cost less.\" You smiled. Even money has a price, and prices move."
      ],
      "hi": [
        "मीना दीदी, जो बैंक में काम करती हैं, विदेश की छुट्टियों से लौटीं और तुम्हें डॉलर के निशान वाला हरा नोट दिया। \"तुम्हारे लिए तोहफ़ा, {name}!\" उन्होंने कहा। तुमने उसे पलटकर देखा। \"क्या मैं इससे यहाँ चीज़ें ख़रीद सकत[[ा|ी]] हूँ?\" गुल्लू तुम्हारे कंधे पर कूद आया। \"हर देश का अपना पैसा होता है। भारत में रुपये चलते हैं और अमेरिका में डॉलर। यहाँ दुकानें रुपये माँगती हैं, इसलिए डॉलर को पहले बदलवाना पड़ेगा।\"",
        "बैंक में एक बोर्ड पर विनिमय दर लिखी थी। \"मान लो आज 1 डॉलर की क़ीमत 80 रुपये है,\" मीना दीदी ने कहा। \"विनिमय दर एक मुद्रा की क़ीमत है दूसरी मुद्रा में। यह बताती है कि हर डॉलर पर कितने रुपये मिलेंगे। असली दरें अलग होती हैं और रोज़ बदलती हैं।\" गुल्लू ने ब्लैकबोर्ड पर लिखा: $1 = ₹80।",
        "\"तो मेरे 5 डॉलर के नोट के कितने रुपये हुए?\" तुमने पूछा। गुल्लू ने हिसाब लगाया: 5 गुना 80 बराबर 400 रुपये। \"एक बढ़िया पेंसिल सेट और कुछ नाश्ते के लिए काफ़ी!\" मीना दीदी ने जोड़ा, \"बैंक और अधिकृत मनी चेंजर थोड़ी फ़ीस ले सकते हैं, इसलिए बदलवाने से पहले हमेशा पूछो कि कुल कितने रुपये मिलेंगे, और किसी अजनबी से पैसे कभी मत बदलवाओ।\"",
        "एक महीने बाद बोर्ड पर लिखा था: 1 डॉलर = 85 रुपये। जो खिलौना 10 डॉलर का था, वह पिछले महीने 800 रुपये का था। अब वह 850 रुपये का हो गया! \"विनिमय दरें रोज़ बदलती हैं,\" गुल्लू बोला। \"जब एक डॉलर की क़ीमत ज़्यादा रुपये हो, तो विदेश से आई चीज़ें ज़्यादा रुपयों की पड़ती हैं। जब कम रुपये हो, तो सस्ती पड़ती हैं।\" तुम मुस्कुरा[[ए|ईं]]। पैसे का भी दाम होता है, और दाम हिलते रहते हैं।"
      ],
      "mr": [
        "मीना ताई, ज्या बँकेत काम करतात, परदेशातल्या सुट्टीवरून परत आल्या आणि त्यांनी तुला डॉलरचं चिन्ह असलेली हिरवी नोट दिली. \"तुझ्यासाठी भेट, {name}!\" त्या म्हणाल्या. तू ती उलटीपालटी करून पाहिलीस. \"मी याने इथे वस्तू घेऊ शकत[[ो|े]] का?\" गल्लू तुझ्या खांद्यावर उडी मारून बसला. \"प्रत्येक देशाचा स्वतःचा पैसा असतो. भारतात रुपये चालतात आणि अमेरिकेत डॉलर. इथे दुकानं रुपये मागतात, म्हणून डॉलर आधी बदलून घ्यावा लागेल.\"",
        "बँकेत एका फलकावर विनिमय दर लिहिला होता. \"समज आज 1 डॉलरची किंमत 80 रुपये आहे,\" मीना ताई म्हणाल्या. \"विनिमय दर म्हणजे एका चलनाची दुसऱ्या चलनात किंमत. प्रत्येक डॉलरला किती रुपये मिळतील ते तो सांगतो. खरे दर वेगळे असतात आणि रोज बदलतात.\" गल्लूने फळ्यावर लिहिलं: $1 = ₹80.",
        "\"मग माझ्या 5 डॉलरच्या नोटेचे किती रुपये झाले?\" तू विचारलंस. गल्लूने हिशोब केला: 5 गुणिले 80 बरोबर 400 रुपये. \"छान पेन्सिल सेट आणि थोड्या खाऊसाठी पुरेसे!\" मीना ताईंनी जोडलं, \"बँका आणि अधिकृत मनी चेंजर थोडी फी घेऊ शकतात, म्हणून बदलण्याआधी नेहमी विचार की एकूण किती रुपये मिळतील, आणि कोणत्याही अनोळखी माणसाकडे पैसे कधी बदलू नकोस.\"",
        "एका महिन्यानंतर फलकावर लिहिलं होतं: 1 डॉलर = 85 रुपये. जे खेळणं 10 डॉलरचं होतं ते मागच्या महिन्यात 800 रुपयांचं होतं. आता ते 850 रुपयांचं झालं! \"विनिमय दर रोज बदलतात,\" गल्लू म्हणाला. \"एका डॉलरची किंमत जास्त रुपये झाली की परदेशातून आलेल्या वस्तू जास्त रुपयांच्या पडतात. कमी रुपये झाली की स्वस्त पडतात.\" तू हसल[[ास|ीस]]. पैशालाही किंमत असते, आणि किमती हलत राहतात."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Every country has its own money, called its currency. Foreign money must be exchanged.",
          "The exchange rate is the price of one currency in another. Imagine $1 = 80 rupees. Real rates differ.",
          "Rupees = dollars times the rate. $5 times 80 = 400 rupees.",
          "Rates change every day. Ask the total and any fee, and exchange only at a bank or authorised money changer."
        ],
        "fill": {
          "bank": [
            "currency",
            "rate",
            "exchange",
            "dollars",
            "fee",
            "400"
          ],
          "items": [
            [
              "The money of a country is called its @@.",
              "currency"
            ],
            [
              "The price of one currency in another is the exchange @@.",
              "rate"
            ],
            [
              "To use foreign money here, you must @@ it for rupees.",
              "exchange"
            ],
            [
              "Rupees equal @@ times the rate.",
              "dollars"
            ],
            [
              "Banks may charge a small @@, so ask the total first.",
              "fee"
            ]
          ]
        },
        "sortTitle": "More rupees or fewer rupees?",
        "sortOpts": [
          {
            "k": "more",
            "t": "Costs more rupees"
          },
          {
            "k": "fewer",
            "t": "Costs fewer rupees"
          }
        ],
        "sort": [
          {
            "icon": "up",
            "label": "The rate rises from 80 to 85 and you buy a $10 toy",
            "a": "more"
          },
          {
            "icon": "down",
            "label": "The rate falls from 80 to 75 and you buy a $10 toy",
            "a": "fewer"
          },
          {
            "icon": "up",
            "label": "The rate rises from 80 to 90 and you buy a $5 pen",
            "a": "more"
          },
          {
            "icon": "down",
            "label": "The rate falls from 80 to 70 and you buy a $20 bag",
            "a": "fewer"
          },
          {
            "icon": "up",
            "label": "The rate stays at 80 but the toy price rises from $10 to $12",
            "a": "more"
          }
        ],
        "tf": [
          {
            "q": "Every country uses rupees.",
            "a": false
          },
          {
            "q": "The exchange rate can change from day to day.",
            "a": true
          },
          {
            "q": "A bank or authorised money changer is safer than a stranger for exchanging money.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "$1 = 80 rupees. How many rupees is $5?",
            "opts": [
              "400",
              "85",
              "16"
            ],
            "a": 0
          },
          {
            "q": "A toy costs $10 and $1 = 85 rupees. How many rupees is the toy?",
            "opts": [
              "850",
              "800",
              "95"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to ask for the exchange rate and any fee, to exchange money only at a bank or authorised money changer, and to remember that rates change every day."
      },
      "hi": {
        "remember": [
          "हर देश का अपना पैसा होता है, जिसे उसकी मुद्रा कहते हैं। विदेशी पैसा बदलवाना पड़ता है।",
          "विनिमय दर एक मुद्रा की क़ीमत है दूसरी में। मान लो $1 = 80 रुपये। असली दरें अलग होती हैं।",
          "रुपये = डॉलर गुणा दर। $5 गुना 80 = 400 रुपये।",
          "दरें रोज़ बदलती हैं। कुल रक़म और फ़ीस पूछो, और सिर्फ़ बैंक या अधिकृत मनी चेंजर से बदलवाओ।"
        ],
        "fill": {
          "bank": [
            "मुद्रा",
            "दर",
            "बदलवाना",
            "डॉलर",
            "फ़ीस",
            "400"
          ],
          "items": [
            [
              "किसी देश के पैसे को उसकी @@ कहते हैं।",
              "मुद्रा"
            ],
            [
              "एक मुद्रा की क़ीमत दूसरी मुद्रा में विनिमय @@ कहलाती है।",
              "दर"
            ],
            [
              "विदेशी पैसा यहाँ चलाने के लिए उसे रुपयों में @@ पड़ता है।",
              "बदलवाना"
            ],
            [
              "रुपये बराबर @@ गुणा दर।",
              "डॉलर"
            ],
            [
              "बैंक थोड़ी @@ ले सकते हैं, इसलिए पहले कुल रक़म पूछो।",
              "फ़ीस"
            ]
          ]
        },
        "sortTitle": "ज़्यादा रुपये या कम रुपये?",
        "sortOpts": [
          {
            "k": "more",
            "t": "ज़्यादा रुपये लगेंगे"
          },
          {
            "k": "fewer",
            "t": "कम रुपये लगेंगे"
          }
        ],
        "sort": [
          {
            "icon": "up",
            "label": "दर 80 से बढ़कर 85 हुई और तुम 10 डॉलर का खिलौना ख़रीदते हो",
            "a": "more"
          },
          {
            "icon": "down",
            "label": "दर 80 से घटकर 75 हुई और तुम 10 डॉलर का खिलौना ख़रीदते हो",
            "a": "fewer"
          },
          {
            "icon": "up",
            "label": "दर 80 से बढ़कर 90 हुई और तुम 5 डॉलर का पेन ख़रीदते हो",
            "a": "more"
          },
          {
            "icon": "down",
            "label": "दर 80 से घटकर 70 हुई और तुम 20 डॉलर का बैग ख़रीदते हो",
            "a": "fewer"
          },
          {
            "icon": "up",
            "label": "दर 80 ही रही पर खिलौने का दाम 10 डॉलर से बढ़कर 12 डॉलर हो गया",
            "a": "more"
          }
        ],
        "tf": [
          {
            "q": "हर देश में रुपये चलते हैं।",
            "a": false
          },
          {
            "q": "विनिमय दर एक दिन से दूसरे दिन बदल सकती है।",
            "a": true
          },
          {
            "q": "पैसे बदलवाने के लिए अजनबी से बैंक या अधिकृत मनी चेंजर ज़्यादा सुरक्षित है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "$1 = 80 रुपये। $5 के कितने रुपये होंगे?",
            "opts": [
              "400",
              "85",
              "16"
            ],
            "a": 0
          },
          {
            "q": "एक खिलौना 10 डॉलर का है और $1 = 85 रुपये। खिलौने के कितने रुपये होंगे?",
            "opts": [
              "850",
              "800",
              "95"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि विनिमय दर और फ़ीस पूछूँग[[ा|ी]], पैसे सिर्फ़ बैंक या अधिकृत मनी चेंजर से बदलवाऊँग[[ा|ी]], और याद रखूँग[[ा|ी]] कि दरें रोज़ बदलती हैं।"
      },
      "mr": {
        "remember": [
          "प्रत्येक देशाचा स्वतःचा पैसा असतो, ज्याला त्याचं चलन म्हणतात. परदेशी पैसा बदलून घ्यावा लागतो.",
          "विनिमय दर म्हणजे एका चलनाची दुसऱ्या चलनातली किंमत. समज $1 = 80 रुपये. खरे दर वेगळे असतात.",
          "रुपये = डॉलर गुणिले दर. $5 गुणिले 80 = 400 रुपये.",
          "दर रोज बदलतात. एकूण रक्कम आणि फी विचार, आणि फक्त बँक किंवा अधिकृत मनी चेंजरकडेच बदल."
        ],
        "fill": {
          "bank": [
            "चलन",
            "दर",
            "बदलून",
            "डॉलर",
            "फी",
            "400"
          ],
          "items": [
            [
              "एखाद्या देशाच्या पैशाला त्याचं @@ म्हणतात.",
              "चलन"
            ],
            [
              "एका चलनाची दुसऱ्या चलनातली किंमत म्हणजे विनिमय @@.",
              "दर"
            ],
            [
              "परदेशी पैसा इथे वापरायला तो रुपयांत @@ घ्यावा लागतो.",
              "बदलून"
            ],
            [
              "रुपये बरोबर @@ गुणिले दर.",
              "डॉलर"
            ],
            [
              "बँका थोडी @@ घेऊ शकतात, म्हणून आधी एकूण रक्कम विचार.",
              "फी"
            ]
          ]
        },
        "sortTitle": "जास्त रुपये की कमी रुपये?",
        "sortOpts": [
          {
            "k": "more",
            "t": "जास्त रुपये लागतील"
          },
          {
            "k": "fewer",
            "t": "कमी रुपये लागतील"
          }
        ],
        "sort": [
          {
            "icon": "up",
            "label": "दर 80 वरून 85 झाला आणि तू 10 डॉलरचं खेळणं घेतोस",
            "a": "more"
          },
          {
            "icon": "down",
            "label": "दर 80 वरून 75 झाला आणि तू 10 डॉलरचं खेळणं घेतोस",
            "a": "fewer"
          },
          {
            "icon": "up",
            "label": "दर 80 वरून 90 झाला आणि तू 5 डॉलरचा पेन घेतोस",
            "a": "more"
          },
          {
            "icon": "down",
            "label": "दर 80 वरून 70 झाला आणि तू 20 डॉलरची बॅग घेतोस",
            "a": "fewer"
          },
          {
            "icon": "up",
            "label": "दर 80 च राहिला पण खेळण्याची किंमत 10 डॉलरवरून 12 डॉलर झाली",
            "a": "more"
          }
        ],
        "tf": [
          {
            "q": "प्रत्येक देशात रुपये चालतात.",
            "a": false
          },
          {
            "q": "विनिमय दर एका दिवसापासून दुसऱ्या दिवसापर्यंत बदलू शकतो.",
            "a": true
          },
          {
            "q": "पैसे बदलण्यासाठी अनोळखी माणसापेक्षा बँक किंवा अधिकृत मनी चेंजर जास्त सुरक्षित आहे.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "$1 = 80 रुपये. $5 चे किती रुपये होतील?",
            "opts": [
              "400",
              "85",
              "16"
            ],
            "a": 0
          },
          {
            "q": "एक खेळणं 10 डॉलरचं आहे आणि $1 = 85 रुपये. खेळण्याचे किती रुपये होतील?",
            "opts": [
              "850",
              "800",
              "95"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की विनिमय दर आणि फी विचारेन, पैसे फक्त बँक किंवा अधिकृत मनी चेंजरकडेच बदलेन, आणि लक्षात ठेवेन की दर रोज बदलतात."
      }
    }
  },
  {
    "slug": "mela-choice",
    "status": "live",
    "color": "#ffe066",
    "title": {
      "en": "{name} and the Mela Choice",
      "hi": "{name} और मेले की पसंद",
      "mr": "{name} आणि जत्रेतली निवड"
    },
    "cardTitle": {
      "en": "The Mela Choice",
      "hi": "मेले की पसंद",
      "mr": "जत्रेतली निवड"
    },
    "subtitle": {
      "en": "Every choice has a cost",
      "hi": "हर चुनाव की एक क़ीमत होती है",
      "mr": "प्रत्येक निवडीची एक किंमत असते"
    },
    "topic": {
      "en": "Opportunity cost",
      "hi": "अवसर लागत",
      "mr": "संधीची किंमत"
    },
    "stops": {
      "en": [
        "The Mela",
        "Two Wishes",
        "The Hidden Cost",
        "Choose Wisely"
      ],
      "hi": [
        "मेला",
        "दो इच्छाएँ",
        "छिपी क़ीमत",
        "समझदारी से चुनो"
      ],
      "mr": [
        "जत्रा",
        "दोन इच्छा",
        "लपलेली किंमत",
        "शहाणपणाने निवड"
      ]
    },
    "scenes": [
      "At the mela you hold one 100 rupee note. A ferris wheel is on one side and a sweet stall on the other, and a question mark floats above you.",
      "Two thought bubbles show you on the ferris wheel and you eating jalebi, but the note can pay for only one of them.",
      "On the board a ride costs 100 rupees and a plate of jalebi costs 100 rupees, and the one you give up is crossed out.",
      "You ride high on the ferris wheel with a big smile while Gullu waits below with the coin jar for another day."
    ],
    "story": {
      "en": [
        "The village mela had come to town! There were swings, a giant ferris wheel and a stall frying hot jalebis. Aaji gave you one crisp 100 rupee note. \"This is all you get today, {name},\" she said. You ran straight to the fair. A ferris wheel ride cost 100 rupees. A plate of jalebis also cost 100 rupees. You stood in the middle, holding the note tight. You wanted both!",
        "Gullu hopped onto your shoulder. \"Let us think, {name}. When you pick one thing, you give up the other. What you give up is called the opportunity cost.\" You imagined each choice. If you ride, you cannot eat jalebi. If you eat jalebi, you cannot ride. A rupee can be spent only once. \"So the real cost of the ride is not just 100 rupees,\" said Gullu. \"It is also the jalebi you did not get.\"",
        "That evening, you and Gullu drew two columns on the board. In one, the ride: a view of the whole village, but over in ten minutes. In the other, the jalebi: sweet and yummy, also over in ten minutes. You asked yourself which one you would still smile about tomorrow. It was not about right or wrong. It was about what you valued more. Gullu added, \"Opportunity cost is not only about money. Your time works the same way. An hour of cricket is an hour you cannot read.\"",
        "You chose the ride. From the top of the ferris wheel the whole village looked like a toy. You did not feel sad about the jalebi. You knew what you had given up, and you had chosen with open eyes. \"Next time,\" you told Gullu, \"I will save a little first, so that I can afford both.\" Gullu nodded. \"A wise chooser asks one question before spending: what am I giving up?\""
      ],
      "hi": [
        "गाँव में मेला लगा था! झूले थे, एक बड़ा-सा चरखी वाला झूला था और गरम जलेबियाँ तलने वाली एक दुकान थी। दादी ने तुम्हें सौ रुपये का एक कड़कड़ाता नोट दिया। \"आज बस यही मिलेगा, {name},\" उन्होंने कहा। तुम सीधे मेले की ओर दौड़ पड़[[े|ीं]]। झूले की एक सवारी सौ रुपये की थी। जलेबी की एक प्लेट भी सौ रुपये की थी। तुम बीच में खड़[[े|ी]] थ[[े|ीं]] और नोट को कसकर पकड़े हुए थ[[े|ीं]]। तुम्हें दोनों चाहिए थे!",
        "गुल्लू उछलकर तुम्हारे कंधे पर आ बैठा। \"आओ सोचें, {name}। जब तुम एक चीज़ चुनते हो, तो दूसरी छोड़नी पड़ती है। जो छोड़ना पड़ता है, उसे अवसर लागत कहते हैं।\" तुमने हर चुनाव की कल्पना की। झूला चुना तो जलेबी नहीं मिलेगी। जलेबी चुनी तो झूला नहीं मिलेगा। एक रुपया सिर्फ़ एक बार ख़र्च हो सकता है। \"तो झूले की असली क़ीमत सिर्फ़ सौ रुपये नहीं है,\" गुल्लू बोला। \"वह जलेबी भी है जो तुम्हें नहीं मिली।\"",
        "उस शाम तुमने और गुल्लू ने बोर्ड पर दो कॉलम बनाए। एक में झूला: पूरे गाँव का नज़ारा, पर दस मिनट में ख़त्म। दूसरे में जलेबी: मीठी और स्वादिष्ट, वह भी दस मिनट में ख़त्म। तुमने ख़ुद से पूछा कि कल तक किसकी याद से मुस्कान आएगी। बात सही या ग़लत की नहीं थी। बात यह थी कि तुम्हारे लिए ज़्यादा क़ीमती क्या है। गुल्लू ने जोड़ा, \"अवसर लागत सिर्फ़ पैसे की नहीं होती। समय भी ऐसे ही काम करता है। क्रिकेट का एक घंटा वह घंटा है जिसमें तुम पढ़ नहीं सकते।\"",
        "तुमने झूला चुना। चरखी के सबसे ऊपर से पूरा गाँव खिलौने जैसा दिखा। जलेबी के लिए तुम्हें उदासी नहीं हुई। तुम जानत[[े|ी]] थ[[े|ीं]] कि तुमने क्या छोड़ा है, और तुमने आँखें खोलकर चुना था। \"अगली बार,\" तुमने गुल्लू से कहा, \"मैं पहले थोड़े पैसे बचाऊँगा ताकि दोनों ले सकूँ।\" गुल्लू ने सिर हिलाया। \"समझदार चुनने वाला ख़र्च करने से पहले एक सवाल पूछता है: मैं क्या छोड़ रहा हूँ?\""
      ],
      "mr": [
        "गावात जत्रा भरली होती! झोके होते, एक मोठा पाळणा होता आणि गरम जिलब्या तळणारं एक दुकान होतं. आजीने तुला शंभर रुपयांची एक कोरी करकरीत नोट दिली. \"आज एवढंच मिळेल, {name},\" ती म्हणाली. तू सरळ जत्रेकडे धाव[[लास|लीस]]. पाळण्याच्या एका फेरीला शंभर रुपये लागत होते. जिलबीच्या एका प्लेटलाही शंभर रुपये लागत होते. तू मधोमध उभ[[ा|ी]] राहिल[[ास|ीस]] आणि नोट घट्ट धरली. तुला दोन्ही हवं होतं!",
        "गल्लू उडी मारून तुझ्या खांद्यावर बसला. \"चल विचार करू, {name}. तू एक गोष्ट निवडलीस की दुसरी सोडावी लागते. जे सोडावं लागतं त्याला संधीची किंमत म्हणतात.\" तू प्रत्येक निवडीची कल्पना केलीस. पाळण्यात बसलास तर जिलबी मिळणार नाही. जिलबी खाल्लीस तर पाळण्यात बसता येणार नाही. एक रुपया फक्त एकदाच खर्च होतो. \"म्हणजे पाळण्याची खरी किंमत फक्त शंभर रुपये नाही,\" गल्लू म्हणाला. \"ती न मिळालेली जिलबीही आहे.\"",
        "त्या संध्याकाळी तू आणि गल्लूने फळ्यावर दोन रकाने काढले. एकात पाळणा: संपूर्ण गावाचं दृश्य, पण दहा मिनिटांत संपणारं. दुसऱ्यात जिलबी: गोड आणि चविष्ट, तीही दहा मिनिटांत संपणारी. उद्यापर्यंत कशाची आठवण आली की तुला हसू येईल, असं तू स्वतःला विचारलंस. हे बरोबर किंवा चूक असं नव्हतं. तुझ्यासाठी जास्त मोलाचं काय आहे, हा प्रश्न होता. गल्लूने भर घातली, \"संधीची किंमत फक्त पैशाची नसते. वेळही असाच काम करतो. क्रिकेटचा एक तास म्हणजे तो तास ज्यात तू वाचू शकत नाहीस.\"",
        "तू पाळणा निवडलास. पाळण्याच्या सर्वात वरून सगळं गाव खेळण्यासारखं दिसलं. जिलबीसाठी तुला वाईट वाटलं नाही. तू काय सोडलं आहेस हे तुला माहीत होतं आणि तू डोळे उघडे ठेवून निवड केली होतीस. \"पुढच्या वेळी,\" तू गल्लूला म्हणालास, \"मी आधी थोडे पैसे साठवेन म्हणजे दोन्ही घेता येईल.\" गल्लूने मान डोलावली. \"शहाणा निवडणारा खर्च करण्याआधी एकच प्रश्न विचारतो: मी काय सोडतोय?\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Every choice has a cost: when you pick one thing, you give up another.",
          "The thing you give up is called the opportunity cost.",
          "Money and time can each be used only once.",
          "Before spending, ask: what am I giving up?"
        ],
        "fill": {
          "bank": [
            "give up",
            "opportunity cost",
            "once",
            "time",
            "value",
            "choice"
          ],
          "items": [
            [
              "When you pick one thing, you @@ another thing.",
              "give up"
            ],
            [
              "What you give up when you choose is the @@.",
              "opportunity cost"
            ],
            [
              "A rupee can be spent only @@.",
              "once"
            ],
            [
              "An hour of play cannot also be used for homework, so @@ has a cost too.",
              "time"
            ],
            [
              "A wise choice is the one you @@ more.",
              "value"
            ]
          ]
        },
        "sortTitle": "Does it use up money or time?",
        "sortOpts": [
          {
            "k": "money",
            "t": "Uses money"
          },
          {
            "k": "time",
            "t": "Uses time"
          }
        ],
        "sort": [
          {
            "icon": "coin",
            "label": "Buying a 50 rupee toy",
            "a": "money"
          },
          {
            "icon": "clock",
            "label": "Watching TV for two hours",
            "a": "time"
          },
          {
            "icon": "jalebi",
            "label": "Paying for a plate of jalebi",
            "a": "money"
          },
          {
            "icon": "notebook",
            "label": "Studying for one hour",
            "a": "time"
          },
          {
            "icon": "note",
            "label": "Paying for a ferris wheel ride",
            "a": "money"
          }
        ],
        "tf": [
          {
            "q": "If you spend your 100 rupees on a ride, you can still spend the same 100 rupees on jalebi.",
            "a": false
          },
          {
            "q": "Opportunity cost is what you give up when you make a choice.",
            "a": true
          },
          {
            "q": "Time can have an opportunity cost too.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "You have 50 rupees. A comic costs 50 and a football costs 50. You buy the comic. What is your opportunity cost?",
            "opts": [
              "The comic",
              "The football you did not buy",
              "There is none"
            ],
            "a": 1
          },
          {
            "q": "Which question helps you choose wisely?",
            "opts": [
              "What is everyone else buying?",
              "What am I giving up?",
              "What is the cheapest thing?"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to ask \"what am I giving up?\" before I spend my money or my time."
      },
      "hi": {
        "remember": [
          "हर चुनाव की एक क़ीमत होती है: एक चीज़ चुनने पर दूसरी छोड़नी पड़ती है।",
          "जो चीज़ छोड़नी पड़ती है, उसे अवसर लागत कहते हैं।",
          "पैसा और समय, दोनों सिर्फ़ एक बार ख़र्च हो सकते हैं।",
          "ख़र्च करने से पहले पूछो: मैं क्या छोड़ रहा हूँ?"
        ],
        "fill": {
          "bank": [
            "छोड़नी",
            "अवसर लागत",
            "एक बार",
            "समय",
            "क़ीमती",
            "चुनाव"
          ],
          "items": [
            [
              "एक चीज़ चुनने पर दूसरी चीज़ @@ पड़ती है।",
              "छोड़नी"
            ],
            [
              "चुनाव करते समय जो छोड़ना पड़ता है, वह @@ है।",
              "अवसर लागत"
            ],
            [
              "एक रुपया सिर्फ़ @@ ख़र्च हो सकता है।",
              "एक बार"
            ],
            [
              "खेल का घंटा होमवर्क में नहीं लग सकता, इसलिए @@ की भी क़ीमत होती है।",
              "समय"
            ],
            [
              "समझदारी का चुनाव वह है जो तुम्हारे लिए ज़्यादा @@ हो।",
              "क़ीमती"
            ]
          ]
        },
        "sortTitle": "इसमें पैसा लगता है या समय?",
        "sortOpts": [
          {
            "k": "money",
            "t": "पैसा लगता है"
          },
          {
            "k": "time",
            "t": "समय लगता है"
          }
        ],
        "sort": [
          {
            "icon": "coin",
            "label": "पचास रुपये का खिलौना ख़रीदना",
            "a": "money"
          },
          {
            "icon": "clock",
            "label": "दो घंटे टीवी देखना",
            "a": "time"
          },
          {
            "icon": "jalebi",
            "label": "जलेबी की प्लेट के पैसे देना",
            "a": "money"
          },
          {
            "icon": "notebook",
            "label": "एक घंटा पढ़ाई करना",
            "a": "time"
          },
          {
            "icon": "note",
            "label": "झूले की सवारी के पैसे देना",
            "a": "money"
          }
        ],
        "tf": [
          {
            "q": "सौ रुपये झूले में ख़र्च करने के बाद वही सौ रुपये जलेबी में भी ख़र्च हो सकते हैं।",
            "a": false
          },
          {
            "q": "चुनाव करते समय जो छोड़ना पड़ता है, वही अवसर लागत है।",
            "a": true
          },
          {
            "q": "समय की भी अवसर लागत होती है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "तुम्हारे पास पचास रुपये हैं। एक कॉमिक पचास की है और एक फ़ुटबॉल भी पचास की। तुमने कॉमिक ख़रीदी। तुम्हारी अवसर लागत क्या है?",
            "opts": [
              "कॉमिक",
              "वह फ़ुटबॉल जो तुमने नहीं ख़रीदी",
              "कोई नहीं"
            ],
            "a": 1
          },
          {
            "q": "कौन-सा सवाल समझदारी से चुनने में मदद करता है?",
            "opts": [
              "बाक़ी सब क्या ख़रीद रहे हैं?",
              "मैं क्या छोड़ रहा हूँ?",
              "सबसे सस्ता क्या है?"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि पैसा या समय ख़र्च करने से पहले पूछूँग[[ा|ी]]: \"मैं क्या छोड़ रह[[ा|ी]] हूँ?\""
      },
      "mr": {
        "remember": [
          "प्रत्येक निवडीची एक किंमत असते: एक गोष्ट निवडली की दुसरी सोडावी लागते.",
          "जे सोडावं लागतं त्याला संधीची किंमत म्हणतात.",
          "पैसा आणि वेळ, दोन्ही फक्त एकदाच खर्च होतात.",
          "खर्च करण्याआधी विचार: मी काय सोडतोय?"
        ],
        "fill": {
          "bank": [
            "सोडावी",
            "संधीची किंमत",
            "एकदाच",
            "वेळ",
            "मोलाचं",
            "निवड"
          ],
          "items": [
            [
              "एक गोष्ट निवडली की दुसरी गोष्ट @@ लागते.",
              "सोडावी"
            ],
            [
              "निवड करताना जे सोडावं लागतं ती @@ आहे.",
              "संधीची किंमत"
            ],
            [
              "एक रुपया फक्त @@ खर्च होतो.",
              "एकदाच"
            ],
            [
              "खेळाचा तास अभ्यासात वापरता येत नाही, म्हणून @@ यालाही किंमत असते.",
              "वेळ"
            ],
            [
              "शहाणी निवड म्हणजे जी तुझ्यासाठी जास्त @@ असते ती.",
              "मोलाचं"
            ]
          ]
        },
        "sortTitle": "यात पैसा लागतो की वेळ?",
        "sortOpts": [
          {
            "k": "money",
            "t": "पैसा लागतो"
          },
          {
            "k": "time",
            "t": "वेळ लागतो"
          }
        ],
        "sort": [
          {
            "icon": "coin",
            "label": "पन्नास रुपयांचं खेळणं विकत घेणं",
            "a": "money"
          },
          {
            "icon": "clock",
            "label": "दोन तास टीव्ही पाहणं",
            "a": "time"
          },
          {
            "icon": "jalebi",
            "label": "जिलबीच्या प्लेटचे पैसे देणं",
            "a": "money"
          },
          {
            "icon": "notebook",
            "label": "एक तास अभ्यास करणं",
            "a": "time"
          },
          {
            "icon": "note",
            "label": "पाळण्याच्या फेरीचे पैसे देणं",
            "a": "money"
          }
        ],
        "tf": [
          {
            "q": "शंभर रुपये पाळण्यात खर्च केल्यावर तेच शंभर रुपये जिलबीतही खर्च करता येतात.",
            "a": false
          },
          {
            "q": "निवड करताना जे सोडावं लागतं तीच संधीची किंमत.",
            "a": true
          },
          {
            "q": "वेळेचीही संधीची किंमत असते.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "तुझ्याकडे पन्नास रुपये आहेत. एक कॉमिक पन्नासचं आहे आणि एक फुटबॉलही पन्नासचा. तू कॉमिक घेतलंस. तुझी संधीची किंमत काय?",
            "opts": [
              "कॉमिक",
              "तू न घेतलेला फुटबॉल",
              "काहीच नाही"
            ],
            "a": 1
          },
          {
            "q": "कोणता प्रश्न शहाणपणाने निवडायला मदत करतो?",
            "opts": [
              "बाकीचे सगळे काय घेतायत?",
              "मी काय सोडतोय?",
              "सगळ्यात स्वस्त काय आहे?"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की पैसा किंवा वेळ खर्च करण्याआधी विचारेन: \"मी काय सोडतोय?\""
      }
    }
  },
  {
    "slug": "mango-market",
    "status": "live",
    "color": "#ffd166",
    "title": {
      "en": "{name} and the Mango Market",
      "hi": "{name} और आम की मंडी",
      "mr": "{name} आणि आंब्याची मंडी"
    },
    "cardTitle": {
      "en": "The Mango Market",
      "hi": "आम की मंडी",
      "mr": "आंब्याची मंडी"
    },
    "subtitle": {
      "en": "Why do prices go up and down?",
      "hi": "दाम ऊपर-नीचे क्यों होते हैं?",
      "mr": "भाव वर-खाली का होतात?"
    },
    "topic": {
      "en": "Supply and demand",
      "hi": "माँग और आपूर्ति",
      "mr": "मागणी आणि पुरवठा"
    },
    "stops": {
      "en": [
        "Mango Season",
        "Too Many Mangoes",
        "Too Few Mangoes",
        "The Price Seesaw"
      ],
      "hi": [
        "आम का मौसम",
        "बहुत सारे आम",
        "कम आम",
        "दाम का झूला"
      ],
      "mr": [
        "आंब्याचा हंगाम",
        "खूप आंबे",
        "थोडे आंबे",
        "भावाचा झोका"
      ]
    },
    "scenes": [
      "Baskets of golden mangoes fill the market stall. A price tag shows 72 rupees and you look amazed.",
      "A heap of mangoes sits on one side of a seesaw and only a few shoppers on the other, so the price tag drops.",
      "A storm cloud and wind shake the mango tree, one basket is nearly empty, and the price tag climbs to 180 rupees.",
      "A seesaw with mangoes on one end and shoppers on the other sits level while you and Gullu smile."
    ],
    "story": {
      "en": [
        "It was the middle of summer, and the mango trees were heavy with fruit. At the market, Kaka sold a dozen mangoes for 120 rupees. \"Why do prices change, Kaka?\" you asked. \"Come back next week and watch,\" he winked. By then, trucks full of mangoes had arrived from every village. The market was piled high. Kaka now sold the same dozen for just 72 rupees! Gullu rolled up. \"When there are a lot of mangoes for sale, that is high supply. Many sellers want to sell, so prices fall.\"",
        "Next you saw a big storm blow through the orchards. Mangoes fell from the trees and many were spoiled. At the market, the baskets were nearly empty. Kaka now asked 180 rupees for a dozen, and nobody argued. \"Supply fell,\" said Gullu. \"The number of people who want mangoes is the same, but there are far fewer mangoes. When something becomes scarce, the price rises. Demand means how many people want to buy something.\"",
        "Then came the big festival. Aaji needed mangoes for the sweets, and so did every other family in the village. \"This time the storm did not come,\" Gullu said, \"but demand shot up, so the price rose again.\" You saw that it was like a seesaw. When supply goes up, the price goes down. When supply falls or demand rises, the price goes up. Neither side wins forever. Kaka watched both sides all day long.",
        "Kaka explained one more secret. \"If I charge too much, nobody buys and my mangoes rot. If I charge too little, I lose money. So, each day, the market finds a price where buyers and sellers are both willing.\" Gullu added, \"So a price is like a message. A high price says, this is scarce or in demand. A low price says, there is plenty.\" You learned to buy fruit in its own season, when it is cheap, and to be patient when everyone is rushing. That evening, mango pulp tasted twice as sweet."
      ],
      "hi": [
        "गर्मी का बीच का समय था और आम के पेड़ फलों से लदे थे। मंडी में काका बारह आम एक सौ बीस रुपये में बेच रहे थे। \"काका, दाम बदलते क्यों हैं?\" तुमने पूछा। \"अगले हफ़्ते आकर देख लेना,\" उन्होंने आँख मारी। तब तक हर गाँव से आमों के ट्रक आ चुके थे। मंडी में आमों का ढेर लगा था। अब काका वही बारह आम सिर्फ़ बहत्तर रुपये में बेच रहे थे! गुल्लू लुढ़कता हुआ आया। \"जब बिकने के लिए बहुत सारे आम हों, तो आपूर्ति ज़्यादा होती है। बहुत से बेचने वाले होते हैं, इसलिए दाम गिर जाते हैं।\"",
        "फिर तुमने देखा कि बाग़ों में एक बड़ा तूफ़ान आया। पेड़ों से आम गिर गए और बहुत से ख़राब हो गए। मंडी में टोकरियाँ लगभग ख़ाली थीं। अब काका बारह आम के एक सौ अस्सी रुपये माँग रहे थे और कोई बहस नहीं कर रहा था। \"आपूर्ति घट गई,\" गुल्लू बोला। \"आम चाहने वाले उतने ही हैं, पर आम बहुत कम हैं। जब कोई चीज़ कम हो जाती है, तो उसका दाम चढ़ जाता है। माँग यानी कितने लोग कोई चीज़ ख़रीदना चाहते हैं।\"",
        "फिर बड़ा त्योहार आया। दादी को मिठाई के लिए आम चाहिए थे, और गाँव के हर घर को भी। \"इस बार तूफ़ान नहीं आया,\" गुल्लू बोला, \"पर माँग बहुत बढ़ गई, इसलिए दाम फिर चढ़ गए।\" तुमने देखा कि यह झूले जैसा है। आपूर्ति बढ़ती है तो दाम गिरता है। आपूर्ति घटती है या माँग बढ़ती है तो दाम चढ़ता है। कोई भी पलड़ा हमेशा नहीं जीतता। काका दिन भर दोनों तरफ़ नज़र रखते थे।",
        "काका ने एक और राज़ बताया। \"अगर मैं बहुत ज़्यादा दाम लूँ, तो कोई नहीं ख़रीदेगा और मेरे आम सड़ जाएँगे। बहुत कम लूँ, तो मुझे घाटा होगा। इसलिए बाज़ार हर दिन ऐसा दाम ढूँढ लेता है जिस पर ख़रीदने और बेचने वाले, दोनों राज़ी हों।\" गुल्लू ने जोड़ा, \"तो दाम एक संदेश की तरह है। ऊँचा दाम कहता है, यह चीज़ कम है या सबको चाहिए। कम दाम कहता है, यह बहुत है।\" तुमने सीखा कि फल को उसके मौसम में ख़रीदो, जब वह सस्ता होता है, और जब सब भाग रहे हों तब सब्र रखो। उस शाम आम का रस दुगना मीठा लगा।"
      ],
      "mr": [
        "उन्हाळ्याचे मध्यावर दिवस होते आणि आंब्याची झाडं फळांनी लगडली होती. मंडीत काका बारा आंबे एकशे वीस रुपयांना विकत होते. \"काका, भाव का बदलतात?\" तू विचारलंस. \"पुढच्या आठवड्यात येऊन बघ,\" त्यांनी डोळा मिचकावला. तोपर्यंत प्रत्येक गावातून आंब्यांचे ट्रक आले होते. मंडीत आंब्यांचा ढीग लागला होता. आता काका तेच बारा आंबे फक्त बहात्तर रुपयांना विकत होते! गल्लू गडगडत आला. \"विकायला खूप आंबे असले की पुरवठा जास्त असतो. विकणारे खूप असतात, म्हणून भाव उतरतात.\"",
        "मग तू पाहिलंस की बागांमध्ये मोठं वादळ आलं. झाडांवरून आंबे पडले आणि बरेच खराब झाले. मंडीत टोपल्या जवळजवळ रिकाम्या होत्या. आता काका बारा आंब्यांचे एकशे ऐंशी रुपये मागत होते आणि कोणी वाद घालत नव्हतं. \"पुरवठा घटला,\" गल्लू म्हणाला. \"आंबे हवे असणारे तितकेच आहेत, पण आंबे खूपच कमी आहेत. एखादी गोष्ट दुर्मिळ झाली की तिचा भाव चढतो. मागणी म्हणजे किती लोकांना एखादी गोष्ट विकत घ्यायची आहे ते.\"",
        "मग मोठा सण आला. आजीला गोडासाठी आंबे हवे होते आणि गावातल्या प्रत्येक घराला सुद्धा. \"या वेळी वादळ आलं नाही,\" गल्लू म्हणाला, \"पण मागणी खूप वाढली, म्हणून भाव पुन्हा चढले.\" तुला दिसलं की हे झोक्यासारखं आहे. पुरवठा वाढला की भाव उतरतो. पुरवठा घटला किंवा मागणी वाढली की भाव चढतो. कोणतं पारडं कायम जिंकत नाही. काका दिवसभर दोन्ही बाजूंवर लक्ष ठेवून असायचे.",
        "काकांनी आणखी एक गुपित सांगितलं. \"मी भाव खूप ठेवला तर कोणी घेत नाही आणि माझे आंबे सडतात. खूप कमी ठेवला तर मला तोटा होतो. म्हणून बाजार रोज असा भाव शोधतो ज्यावर घेणारे आणि विकणारे दोघेही तयार असतात.\" गल्लूने भर घातली, \"म्हणजे भाव एखाद्या निरोपासारखा आहे. चढा भाव सांगतो, ही गोष्ट कमी आहे किंवा सगळ्यांना हवी आहे. कमी भाव सांगतो, ही भरपूर आहे.\" तू शिकलास की फळ त्याच्या हंगामात विकत घ्यावं, जेव्हा ते स्वस्त असतं, आणि सगळे घाई करतात तेव्हा धीर धरावा. त्या संध्याकाळी आंब्याचा रस दुप्पट गोड लागला."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Supply is how much is available for sale. Demand is how many people want to buy it.",
          "Plenty of supply and fewer buyers make the price fall.",
          "Little supply or many eager buyers make the price rise.",
          "A market keeps adjusting the price until buyers and sellers both agree."
        ],
        "fill": {
          "bank": [
            "supply",
            "demand",
            "fall",
            "rise",
            "season",
            "price"
          ],
          "items": [
            [
              "How much of something is for sale is called @@.",
              "supply"
            ],
            [
              "How many people want to buy something is called @@.",
              "demand"
            ],
            [
              "When there are many mangoes and few buyers, the price will @@.",
              "fall"
            ],
            [
              "After a storm ruins most mangoes, the price will @@.",
              "rise"
            ],
            [
              "Buying fruit in its @@ usually costs less.",
              "season"
            ]
          ]
        },
        "sortTitle": "Will the price go up or down?",
        "sortOpts": [
          {
            "k": "up",
            "t": "Price goes up"
          },
          {
            "k": "down",
            "t": "Price goes down"
          }
        ],
        "sort": [
          {
            "icon": "mango",
            "label": "Trucks bring twice as many mangoes to the market",
            "a": "down"
          },
          {
            "icon": "umbrella",
            "label": "Heavy rain starts and everyone wants an umbrella",
            "a": "up"
          },
          {
            "icon": "wheat",
            "label": "A bumper harvest fills the market with wheat",
            "a": "down"
          },
          {
            "icon": "onion",
            "label": "A flood ruins most of the onion crop",
            "a": "up"
          },
          {
            "icon": "jalebi",
            "label": "A festival is tomorrow and everyone wants sweets",
            "a": "up"
          }
        ],
        "tf": [
          {
            "q": "When supply goes up and demand stays the same, the price usually falls.",
            "a": true
          },
          {
            "q": "A shopkeeper can charge any price and still sell everything.",
            "a": false
          },
          {
            "q": "A festival can raise demand for sweets.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A storm destroys half the tomato crop. What will most likely happen to the tomato price?",
            "opts": [
              "It will fall",
              "It will rise",
              "It will stay the same"
            ],
            "a": 1
          },
          {
            "q": "You want mangoes at the lowest price. When should you buy?",
            "opts": [
              "During the festival rush",
              "In the middle of mango season",
              "Right after a storm"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to think about supply and demand before I call a price unfair, and to buy fruit and vegetables in their season when I can."
      },
      "hi": {
        "remember": [
          "आपूर्ति यानी बिकने के लिए कितना माल है। माँग यानी कितने लोग उसे ख़रीदना चाहते हैं।",
          "माल ज़्यादा और ख़रीदार कम हों तो दाम गिरता है।",
          "माल कम हो या ख़रीदार बहुत चाहने वाले हों तो दाम चढ़ता है।",
          "बाज़ार दाम को तब तक बदलता रहता है जब तक ख़रीदने और बेचने वाले दोनों राज़ी न हो जाएँ।"
        ],
        "fill": {
          "bank": [
            "आपूर्ति",
            "माँग",
            "गिरेगा",
            "चढ़ेगा",
            "मौसम",
            "दाम"
          ],
          "items": [
            [
              "कोई चीज़ बिकने के लिए कितनी है, इसे @@ कहते हैं।",
              "आपूर्ति"
            ],
            [
              "कितने लोग कोई चीज़ ख़रीदना चाहते हैं, इसे @@ कहते हैं।",
              "माँग"
            ],
            [
              "आम बहुत हों और ख़रीदार कम, तो दाम @@।",
              "गिरेगा"
            ],
            [
              "तूफ़ान से ज़्यादातर आम ख़राब हो जाएँ तो दाम @@।",
              "चढ़ेगा"
            ],
            [
              "फल को उसके @@ में ख़रीदना आम तौर पर सस्ता पड़ता है।",
              "मौसम"
            ]
          ]
        },
        "sortTitle": "दाम चढ़ेगा या गिरेगा?",
        "sortOpts": [
          {
            "k": "up",
            "t": "दाम चढ़ेगा"
          },
          {
            "k": "down",
            "t": "दाम गिरेगा"
          }
        ],
        "sort": [
          {
            "icon": "mango",
            "label": "ट्रक मंडी में दुगने आम ले आए",
            "a": "down"
          },
          {
            "icon": "umbrella",
            "label": "तेज़ बारिश शुरू हुई और सबको छाता चाहिए",
            "a": "up"
          },
          {
            "icon": "wheat",
            "label": "बंपर फ़सल से मंडी गेहूँ से भर गई",
            "a": "down"
          },
          {
            "icon": "onion",
            "label": "बाढ़ से ज़्यादातर प्याज़ की फ़सल बर्बाद हो गई",
            "a": "up"
          },
          {
            "icon": "jalebi",
            "label": "कल त्योहार है और सबको मिठाई चाहिए",
            "a": "up"
          }
        ],
        "tf": [
          {
            "q": "आपूर्ति बढ़े और माँग उतनी ही रहे तो दाम आम तौर पर गिरता है।",
            "a": true
          },
          {
            "q": "दुकानदार कोई भी दाम रख सकता है और फिर भी सब कुछ बिक जाएगा।",
            "a": false
          },
          {
            "q": "त्योहार मिठाई की माँग बढ़ा सकता है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "तूफ़ान से आधी टमाटर की फ़सल बर्बाद हो गई। टमाटर के दाम का क्या होने की सबसे ज़्यादा संभावना है?",
            "opts": [
              "गिरेगा",
              "चढ़ेगा",
              "वही रहेगा"
            ],
            "a": 1
          },
          {
            "q": "तुम आम सबसे कम दाम पर लेना चाहते हो। कब ख़रीदना चाहिए?",
            "opts": [
              "त्योहार की भीड़ में",
              "आम के मौसम के बीच में",
              "तूफ़ान के ठीक बाद"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि किसी दाम को ग़लत कहने से पहले माँग और आपूर्ति के बारे में सोचूँग[[ा|ी]], और जब हो सके तब फल-सब्ज़ियाँ उनके मौसम में ख़रीदूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "पुरवठा म्हणजे विक्रीसाठी किती माल आहे. मागणी म्हणजे किती लोकांना तो घ्यायचा आहे.",
          "माल भरपूर आणि खरेदीदार कमी असले की भाव उतरतो.",
          "माल कमी असला किंवा खरेदीदार खूप उत्सुक असले की भाव चढतो.",
          "खरेदीदार आणि विक्रेते दोघे राजी होईपर्यंत बाजार भाव बदलत राहतो."
        ],
        "fill": {
          "bank": [
            "पुरवठा",
            "मागणी",
            "उतरेल",
            "चढेल",
            "हंगाम",
            "भाव"
          ],
          "items": [
            [
              "एखादी गोष्ट विक्रीसाठी किती आहे याला @@ म्हणतात.",
              "पुरवठा"
            ],
            [
              "किती लोकांना एखादी गोष्ट विकत घ्यायची आहे याला @@ म्हणतात.",
              "मागणी"
            ],
            [
              "आंबे खूप आणि खरेदीदार कमी असतील तर भाव @@.",
              "उतरेल"
            ],
            [
              "वादळाने बहुतेक आंबे खराब झाले तर भाव @@.",
              "चढेल"
            ],
            [
              "फळ त्याच्या @@ मध्ये घेणं सहसा स्वस्त पडतं.",
              "हंगाम"
            ]
          ]
        },
        "sortTitle": "भाव चढेल की उतरेल?",
        "sortOpts": [
          {
            "k": "up",
            "t": "भाव चढेल"
          },
          {
            "k": "down",
            "t": "भाव उतरेल"
          }
        ],
        "sort": [
          {
            "icon": "mango",
            "label": "ट्रकनी मंडीत दुप्पट आंबे आणले",
            "a": "down"
          },
          {
            "icon": "umbrella",
            "label": "जोरदार पाऊस सुरू झाला आणि सगळ्यांना छत्री हवी",
            "a": "up"
          },
          {
            "icon": "wheat",
            "label": "बंपर पिकामुळे मंडी गव्हाने भरली",
            "a": "down"
          },
          {
            "icon": "onion",
            "label": "पुरामुळे बहुतेक कांद्याचं पीक वाया गेलं",
            "a": "up"
          },
          {
            "icon": "jalebi",
            "label": "उद्या सण आहे आणि सगळ्यांना मिठाई हवी",
            "a": "up"
          }
        ],
        "tf": [
          {
            "q": "पुरवठा वाढला आणि मागणी तितकीच राहिली तर भाव सहसा उतरतो.",
            "a": true
          },
          {
            "q": "दुकानदार कोणताही भाव लावू शकतो आणि तरीही सगळं विकलं जाईल.",
            "a": false
          },
          {
            "q": "सणामुळे मिठाईची मागणी वाढू शकते.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "वादळामुळे निम्मं टोमॅटोचं पीक वाया गेलं. टोमॅटोच्या भावाचं काय होण्याची शक्यता सर्वात जास्त आहे?",
            "opts": [
              "उतरेल",
              "चढेल",
              "तसाच राहील"
            ],
            "a": 1
          },
          {
            "q": "तुला आंबे सगळ्यात कमी भावात हवे आहेत. केव्हा घ्यावेत?",
            "opts": [
              "सणाच्या गर्दीत",
              "आंब्याच्या हंगामाच्या मध्यात",
              "वादळानंतर लगेच"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की एखादा भाव अन्यायी म्हणण्याआधी मागणी आणि पुरवठा यांचा विचार करेन, आणि जमेल तेव्हा फळं-भाज्या त्यांच्या हंगामात विकत घेईन."
      }
    }
  },
  {
    "slug": "locked-box",
    "status": "live",
    "color": "#bde0fe",
    "title": {
      "en": "{name} and the Locked Box",
      "hi": "{name} और बंद ताला-डिब्बा",
      "mr": "{name} आणि कुलूपबंद डबा"
    },
    "cardTitle": {
      "en": "The Locked Box",
      "hi": "बंद ताला-डिब्बा",
      "mr": "कुलूपबंद डबा"
    },
    "subtitle": {
      "en": "What is a fixed deposit?",
      "hi": "फ़िक्स्ड डिपॉज़िट क्या है?",
      "mr": "फिक्स्ड डिपॉझिट म्हणजे काय?"
    },
    "topic": {
      "en": "Fixed deposits",
      "hi": "फ़िक्स्ड डिपॉज़िट",
      "mr": "फिक्स्ड डिपॉझिट"
    },
    "stops": {
      "en": [
        "The Envelope",
        "The Promise",
        "Opening Early",
        "Due Day"
      ],
      "hi": [
        "लिफ़ाफ़ा",
        "वादा",
        "समय से पहले खोलना",
        "पूरा होने का दिन"
      ],
      "mr": [
        "लिफाफा",
        "वचन",
        "वेळेआधी उघडणं",
        "मुदतीचा दिवस"
      ]
    },
    "scenes": [
      "Aaji hands an envelope with 10,000 rupees to Meena Didi at the bank counter while a lock and a calendar float in a thought bubble.",
      "On the board 10,000 rupees at 7 in 100 earns 700 rupees, while a small jar beside it shows only 300.",
      "A locked box with a ticking clock and a calendar, and a red warning sign where a hand tries to pull the lid open early.",
      "On the due date Aaji receives a stack of coins and a certificate while you cheer and Gullu dances."
    ],
    "story": {
      "en": [
        "Aaji had sold her wheat harvest and was left with 10,000 rupees that she did not need for a whole year. She kept it in a savings account, where it earned only a little interest. \"Is there a way to earn more?\" she asked Meena Didi at the bank. \"Yes,\" said Meena Didi. \"A fixed deposit. You promise to leave your money with the bank for a fixed time, say one year, and the bank promises a fixed rate of interest. It is like a locked box with a timer.\" Gullu perked up his ears.",
        "You did the sum on the board. \"Suppose the bank pays 7 rupees on every 100 rupees for the year,\" you said. \"On 10,000 rupees, that is 100 times 7, which is 700 rupees.\" In the savings account at about 3 in 100, the same money earns only 300. \"The extra 400 rupees is the reward for locking it away,\" said Gullu. Meena Didi smiled. \"Rates keep changing, so always ask what the rate is today and write down the date it ends. That date is called maturity.\"",
        "Gullu raised a paw. \"But what if Aaji needs the money before the date?\" Meena Didi nodded. \"You can break a fixed deposit early, but the bank may pay less interest or charge a penalty. So only lock money you will not need soon.\" You thought about the rainy day jar and nodded. \"Emergency money stays easy to reach. Only spare money goes into the locked box.\" Meena Didi added, \"There is also a recurring deposit, where you put in a fixed amount every month, like 500 rupees, so a small habit grows into a bigger sum.\"",
        "A year later, Aaji went to the bank on the very day the deposit ended. Meena Didi counted out 10,700 rupees: Aaji's 10,000 and the 700 that her patience had earned. You and Gullu cheered. Before leaving, Meena Didi gave you three questions: What is the rate? How long is the lock? What happens if I take the money early? \"Ask them every time,\" said Gullu. \"And choose a real bank, so your money is safe, with deposits insured up to 5,00,000 rupees per person in each bank, at the time of writing.\""
      ],
      "hi": [
        "दादी ने अपनी गेहूँ की फ़सल बेची थी और उनके पास दस हज़ार रुपये बच गए थे जिनकी उन्हें पूरे साल ज़रूरत नहीं थी। वे उन्हें बचत खाते में रखती थीं, जहाँ बहुत थोड़ा ब्याज मिलता था। \"क्या इससे ज़्यादा कमाने का कोई तरीक़ा है?\" उन्होंने बैंक में मीना दीदी से पूछा। \"हाँ,\" मीना दीदी बोलीं। \"फ़िक्स्ड डिपॉज़िट। आप वादा करती हैं कि पैसे एक तय समय, जैसे एक साल, बैंक में रहने देंगी, और बैंक तय दर से ब्याज देने का वादा करता है। यह घड़ी वाले बंद डिब्बे जैसा है।\" गुल्लू ने कान खड़े कर लिए।",
        "तुमने बोर्ड पर हिसाब लगाया। \"मान लो बैंक साल भर में हर सौ रुपये पर सात रुपये देता है,\" तुमने कहा। \"दस हज़ार पर यह सौ गुना सात यानी सात सौ रुपये हुए।\" बचत खाते में, जहाँ लगभग सौ पर तीन मिलते हैं, उतने ही पैसे पर सिर्फ़ तीन सौ मिलते हैं। \"ये चार सौ रुपये ज़्यादा इसलिए मिलते हैं कि तुमने पैसे बंद करके रखे,\" गुल्लू बोला। मीना दीदी मुस्कुराईं। \"दरें बदलती रहती हैं, इसलिए हमेशा पूछो कि आज की दर क्या है और ख़त्म होने की तारीख़ लिख लो। उस तारीख़ को परिपक्वता यानी मैच्योरिटी कहते हैं।\"",
        "गुल्लू ने पंजा उठाया। \"पर अगर दादी को तारीख़ से पहले पैसे चाहिए हों तो?\" मीना दीदी ने सिर हिलाया। \"फ़िक्स्ड डिपॉज़िट पहले तोड़ा जा सकता है, पर बैंक कम ब्याज दे सकता है या जुर्माना ले सकता है। इसलिए सिर्फ़ वही पैसे बंद करो जिनकी जल्दी ज़रूरत नहीं पड़ेगी।\" तुमने बरसात वाले जार के बारे में सोचा और सिर हिलाया। \"आपातकाल के पैसे ऐसी जगह रहें जहाँ आसानी से मिल जाएँ। सिर्फ़ फ़ालतू पैसे बंद डिब्बे में जाएँ।\" मीना दीदी ने जोड़ा, \"आवर्ती जमा यानी रिकरिंग डिपॉज़िट भी होता है, जिसमें हर महीने तय रक़म, जैसे पाँच सौ रुपये, जमा करते हैं ताकि छोटी आदत बड़ी रक़म बन जाए।\"",
        "एक साल बाद दादी ठीक उसी दिन बैंक गईं जिस दिन डिपॉज़िट पूरा हुआ। मीना दीदी ने दस हज़ार सात सौ रुपये गिनकर दिए: दादी के दस हज़ार और सात सौ जो उनके सब्र ने कमाए। तुमने और गुल्लू ने ख़ुशी से तालियाँ बजाईं। लौटने से पहले मीना दीदी ने तुम्हें तीन सवाल दिए: दर क्या है? बंद रखने का समय कितना है? पैसे पहले निकाले तो क्या होगा? \"हर बार पूछना,\" गुल्लू बोला। \"और असली बैंक चुनना ताकि पैसे सुरक्षित रहें। लिखते समय हर बैंक में हर व्यक्ति के पाँच लाख रुपये तक के जमा पर बीमा होता है।\""
      ],
      "mr": [
        "आजीने तिचं गव्हाचं पीक विकलं होतं आणि तिच्याकडे दहा हजार रुपये उरले होते ज्यांची तिला पूर्ण वर्षभर गरज नव्हती. ती ते बचत खात्यात ठेवायची, तिथे खूप थोडं व्याज मिळायचं. \"यापेक्षा जास्त कमावण्याचा काही मार्ग आहे का?\" तिने बँकेत मीना ताईंना विचारलं. \"हो,\" मीना ताई म्हणाल्या. \"फिक्स्ड डिपॉझिट. तुम्ही वचन देता की पैसे ठरलेल्या वेळेसाठी, उदाहरणार्थ एक वर्ष, बँकेत राहू देणार, आणि बँक ठरलेल्या दराने व्याज देण्याचं वचन देते. हा घड्याळ लावलेल्या कुलूपबंद डब्यासारखा आहे.\" गल्लूने कान टवकारले.",
        "तू फळ्यावर हिशोब केलास. \"समज बँक वर्षभरात प्रत्येक शंभर रुपयांवर सात रुपये देते,\" तू म्हणालास. \"दहा हजारांवर ते शंभर गुणिले सात म्हणजे सातशे रुपये होतात.\" बचत खात्यात, जिथे साधारण शंभरावर तीन मिळतात, तेवढ्याच पैशांवर फक्त तीनशे मिळतात. \"हे जास्तीचे चारशे रुपये मिळतात कारण तू पैसे बंद करून ठेवलेस,\" गल्लू म्हणाला. मीना ताई हसल्या. \"दर बदलत राहतात, म्हणून नेहमी आजचा दर काय ते विचारा आणि संपण्याची तारीख लिहून ठेवा. त्या तारखेला मुदतपूर्ती म्हणजे मॅच्युरिटी म्हणतात.\"",
        "गल्लूने पंजा वर केला. \"पण तारखेआधी आजीला पैसे लागले तर?\" मीना ताईंनी मान डोलावली. \"फिक्स्ड डिपॉझिट आधी मोडता येतं, पण बँक कमी व्याज देऊ शकते किंवा दंड लावू शकते. म्हणून फक्त तेच पैसे बंद करा ज्यांची लवकर गरज पडणार नाही.\" तू पावसाळ्याच्या बरणीचा विचार केलास आणि मान हलवलीस. \"आणीबाणीचे पैसे सहज मिळतील अशा ठिकाणी ठेवायचे. फक्त वरचे पैसे कुलूपबंद डब्यात.\" मीना ताईंनी भर घातली, \"रिकरिंग डिपॉझिटही असतं, ज्यात दर महिन्याला ठरलेली रक्कम, म्हणजे पाचशे रुपये, भरता, म्हणजे लहान सवय मोठी रक्कम बनते.\"",
        "वर्षभराने आजी अगदी डिपॉझिट संपण्याच्या दिवशीच बँकेत गेली. मीना ताईंनी दहा हजार सातशे रुपये मोजून दिले: आजीचे दहा हजार आणि तिच्या संयमाने कमावलेले सातशे. तू आणि गल्लूने आनंदाने टाळ्या वाजवल्या. निघण्याआधी मीना ताईंनी तुला तीन प्रश्न दिले: दर काय आहे? कुलूप किती काळ आहे? पैसे आधी काढले तर काय होईल? \"दर वेळी विचारा,\" गल्लू म्हणाला. \"आणि खरी बँक निवडा म्हणजे पैसे सुरक्षित राहतील. लिहिताना प्रत्येक बँकेत प्रत्येक व्यक्तीच्या पाच लाख रुपयांपर्यंतच्या ठेवींना विमा असतो.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A fixed deposit locks your money with a bank for a fixed time at a fixed rate.",
          "Money taken out early may earn less interest or cost a penalty.",
          "Lock only spare money. Keep emergency money easy to reach.",
          "Always ask: what is the rate, how long is the lock, and what if I break it early?"
        ],
        "fill": {
          "bank": [
            "fixed deposit",
            "maturity",
            "penalty",
            "interest",
            "emergency",
            "term"
          ],
          "items": [
            [
              "Money kept in a bank for a fixed time at a fixed rate is a @@.",
              "fixed deposit"
            ],
            [
              "The day the deposit ends is called @@.",
              "maturity"
            ],
            [
              "Taking the money out early may cost a @@.",
              "penalty"
            ],
            [
              "10,000 rupees at 7 in 100 for one year earns 700 rupees of @@.",
              "interest"
            ],
            [
              "Keep your @@ money where you can reach it any time.",
              "emergency"
            ]
          ]
        },
        "sortTitle": "Easy to reach, or can it be locked?",
        "sortOpts": [
          {
            "k": "reach",
            "t": "Keep easy to reach"
          },
          {
            "k": "lock",
            "t": "Can be locked"
          }
        ],
        "sort": [
          {
            "icon": "clinic",
            "label": "Money for a sudden medical bill",
            "a": "reach"
          },
          {
            "icon": "house",
            "label": "Savings for a house repair planned two years from now",
            "a": "lock"
          },
          {
            "icon": "jar",
            "label": "Pocket money you will spend this week",
            "a": "reach"
          },
          {
            "icon": "school",
            "label": "School fees due next April, saved in advance",
            "a": "lock"
          },
          {
            "icon": "umbrella",
            "label": "Your rainy day money",
            "a": "reach"
          }
        ],
        "tf": [
          {
            "q": "Breaking a fixed deposit early may reduce your interest or cost a penalty.",
            "a": true
          },
          {
            "q": "Emergency money should be locked away for five years.",
            "a": false
          },
          {
            "q": "A recurring deposit lets you save a fixed amount every month.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "Aaji puts 10,000 rupees in a fixed deposit at 7 in 100 for one year. How much interest does she earn?",
            "opts": [
              "70",
              "700",
              "7,000"
            ],
            "a": 1
          },
          {
            "q": "Aaji may need money for medicines next month. What should she do with that money?",
            "opts": [
              "Lock it for five years",
              "Keep it where she can reach it",
              "Give it to a stranger who promises double"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to lock away only money I will not need soon, to ask about the rate and the rules, and to keep my emergency money within reach."
      },
      "hi": {
        "remember": [
          "फ़िक्स्ड डिपॉज़िट में पैसे तय समय के लिए तय दर पर बैंक में बंद रहते हैं।",
          "समय से पहले निकालने पर कम ब्याज मिल सकता है या जुर्माना लग सकता है।",
          "सिर्फ़ फ़ालतू पैसे बंद करो। आपातकाल के पैसे आसानी से मिलने वाली जगह रखो।",
          "हमेशा पूछो: दर क्या है, कितने समय का बंधन है, और पहले तोड़ा तो क्या होगा?"
        ],
        "fill": {
          "bank": [
            "फ़िक्स्ड डिपॉज़िट",
            "मैच्योरिटी",
            "जुर्माना",
            "ब्याज",
            "आपातकाल",
            "अवधि"
          ],
          "items": [
            [
              "तय समय के लिए तय दर पर बैंक में रखे पैसे @@ कहलाते हैं।",
              "फ़िक्स्ड डिपॉज़िट"
            ],
            [
              "डिपॉज़िट पूरा होने के दिन को @@ कहते हैं।",
              "मैच्योरिटी"
            ],
            [
              "पैसे समय से पहले निकालने पर @@ लग सकता है।",
              "जुर्माना"
            ],
            [
              "दस हज़ार रुपये पर साल भर में सौ पर सात की दर से सात सौ रुपये @@ मिलता है।",
              "ब्याज"
            ],
            [
              "अपने @@ के पैसे ऐसी जगह रखो जहाँ कभी भी मिल सकें।",
              "आपातकाल"
            ]
          ]
        },
        "sortTitle": "आसानी से मिलने वाली जगह या बंद किया जा सकता है?",
        "sortOpts": [
          {
            "k": "reach",
            "t": "आसानी से मिलें"
          },
          {
            "k": "lock",
            "t": "बंद किए जा सकते हैं"
          }
        ],
        "sort": [
          {
            "icon": "clinic",
            "label": "अचानक इलाज के ख़र्च के लिए पैसे",
            "a": "reach"
          },
          {
            "icon": "house",
            "label": "दो साल बाद घर की मरम्मत के लिए बचत",
            "a": "lock"
          },
          {
            "icon": "jar",
            "label": "इसी हफ़्ते ख़र्च होने वाला जेबख़र्च",
            "a": "reach"
          },
          {
            "icon": "school",
            "label": "अगले अप्रैल में देने वाली स्कूल फ़ीस के लिए पहले से बचाए पैसे",
            "a": "lock"
          },
          {
            "icon": "umbrella",
            "label": "बरसात के दिन के लिए रखे पैसे",
            "a": "reach"
          }
        ],
        "tf": [
          {
            "q": "फ़िक्स्ड डिपॉज़िट पहले तोड़ने पर ब्याज कम मिल सकता है या जुर्माना लग सकता है।",
            "a": true
          },
          {
            "q": "आपातकाल के पैसे पाँच साल के लिए बंद कर देने चाहिए।",
            "a": false
          },
          {
            "q": "रिकरिंग डिपॉज़िट में हर महीने तय रक़म बचाई जाती है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "दादी दस हज़ार रुपये एक साल के लिए सौ पर सात की दर से फ़िक्स्ड डिपॉज़िट में रखती हैं। उन्हें कितना ब्याज मिलेगा?",
            "opts": [
              "सत्तर",
              "सात सौ",
              "सात हज़ार"
            ],
            "a": 1
          },
          {
            "q": "दादी को अगले महीने दवाइयों के लिए पैसे चाहिए हो सकते हैं। उन पैसों का क्या करना चाहिए?",
            "opts": [
              "पाँच साल के लिए बंद कर दें",
              "ऐसी जगह रखें जहाँ आसानी से मिल जाएँ",
              "किसी अजनबी को दें जो दुगना करने का वादा करे"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि सिर्फ़ वही पैसे बंद करूँग[[ा|ी]] जिनकी मुझे जल्दी ज़रूरत नहीं होगी, दर और नियम पूछूँग[[ा|ी]], और आपातकाल के पैसे पहुँच में रखूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "फिक्स्ड डिपॉझिटमध्ये पैसे ठरलेल्या वेळेसाठी ठरलेल्या दराने बँकेत बंद राहतात.",
          "वेळेआधी काढले तर कमी व्याज मिळू शकतं किंवा दंड लागू शकतो.",
          "फक्त वरचे पैसे बंद कर. आणीबाणीचे पैसे सहज मिळतील असे ठेव.",
          "नेहमी विचार: दर काय, किती काळ बंद, आणि आधी मोडलं तर काय?"
        ],
        "fill": {
          "bank": [
            "फिक्स्ड डिपॉझिट",
            "मॅच्युरिटी",
            "दंड",
            "व्याज",
            "आणीबाणी",
            "मुदत"
          ],
          "items": [
            [
              "ठरलेल्या वेळेसाठी ठरलेल्या दराने बँकेत ठेवलेल्या पैशांना @@ म्हणतात.",
              "फिक्स्ड डिपॉझिट"
            ],
            [
              "डिपॉझिट संपण्याच्या दिवसाला @@ म्हणतात.",
              "मॅच्युरिटी"
            ],
            [
              "पैसे वेळेआधी काढले तर @@ लागू शकतो.",
              "दंड"
            ],
            [
              "दहा हजार रुपयांवर वर्षभरात शंभरावर सात दराने सातशे रुपये @@ मिळतं.",
              "व्याज"
            ],
            [
              "तुझ्या @@ च्या पैशांना कधीही मिळतील अशा जागी ठेव.",
              "आणीबाणी"
            ]
          ]
        },
        "sortTitle": "सहज मिळावेत की बंद करता येतील?",
        "sortOpts": [
          {
            "k": "reach",
            "t": "सहज मिळावेत"
          },
          {
            "k": "lock",
            "t": "बंद करता येतील"
          }
        ],
        "sort": [
          {
            "icon": "clinic",
            "label": "अचानक आलेल्या दवाखान्याच्या बिलासाठी पैसे",
            "a": "reach"
          },
          {
            "icon": "house",
            "label": "दोन वर्षांनी घराच्या दुरुस्तीसाठीची बचत",
            "a": "lock"
          },
          {
            "icon": "jar",
            "label": "याच आठवड्यात खर्च होणारा खाऊचा पैसा",
            "a": "reach"
          },
          {
            "icon": "school",
            "label": "पुढच्या एप्रिलमध्ये द्यायच्या शाळेच्या फीसाठी आधीच साठवलेले पैसे",
            "a": "lock"
          },
          {
            "icon": "umbrella",
            "label": "पावसाळ्याच्या दिवसासाठी ठेवलेले पैसे",
            "a": "reach"
          }
        ],
        "tf": [
          {
            "q": "फिक्स्ड डिपॉझिट आधी मोडलं तर व्याज कमी मिळू शकतं किंवा दंड लागू शकतो.",
            "a": true
          },
          {
            "q": "आणीबाणीचे पैसे पाच वर्षांसाठी बंद करायला हवेत.",
            "a": false
          },
          {
            "q": "रिकरिंग डिपॉझिटमध्ये दर महिन्याला ठरलेली रक्कम साठवली जाते.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "आजी दहा हजार रुपये एक वर्षासाठी शंभरावर सात दराने फिक्स्ड डिपॉझिटमध्ये ठेवते. तिला किती व्याज मिळेल?",
            "opts": [
              "सत्तर",
              "सातशे",
              "सात हजार"
            ],
            "a": 1
          },
          {
            "q": "आजीला पुढच्या महिन्यात औषधांसाठी पैसे लागू शकतात. त्या पैशांचं काय करावं?",
            "opts": [
              "पाच वर्षांसाठी बंद करावेत",
              "सहज मिळतील अशा जागी ठेवावेत",
              "दुप्पट करण्याचं वचन देणाऱ्या अनोळखी माणसाला द्यावेत"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की ज्या पैशांची मला लवकर गरज नाही तेवढेच बंद करेन, दर आणि नियम विचारेन, आणि आणीबाणीचे पैसे हाताशी ठेवेन."
      }
    }
  },
  {
    "slug": "trust-score",
    "status": "live",
    "color": "#ffd6a5",
    "title": {
      "en": "{name} and the Trust Score",
      "hi": "{name} और भरोसे का स्कोर",
      "mr": "{name} आणि भरोशाचा स्कोअर"
    },
    "cardTitle": {
      "en": "The Trust Score",
      "hi": "भरोसे का स्कोर",
      "mr": "भरोशाचा स्कोअर"
    },
    "subtitle": {
      "en": "What is a credit score?",
      "hi": "क्रेडिट स्कोर क्या है?",
      "mr": "क्रेडिट स्कोअर म्हणजे काय?"
    },
    "topic": {
      "en": "Credit score",
      "hi": "क्रेडिट स्कोर",
      "mr": "क्रेडिट स्कोअर"
    },
    "stops": {
      "en": [
        "The Loan Ask",
        "The Number",
        "Climb or Slip",
        "Good Habits"
      ],
      "hi": [
        "कर्ज की माँग",
        "वह संख्या",
        "चढ़ना या फिसलना",
        "अच्छी आदतें"
      ],
      "mr": [
        "कर्जाची मागणी",
        "तो आकडा",
        "चढणं की घसरणं",
        "चांगल्या सवयी"
      ]
    },
    "scenes": [
      "Kaka stands at the bank counter asking for a loan for a flour mill machine while Meena Didi looks at a report.",
      "A big dial like a speedometer showing a score between low and high, with a small tick near the high end.",
      "Two paths: on one a calendar with ticks makes the dial climb, on the other a pile of unpaid bills makes it slip.",
      "You, Gullu and Kaka tick off a checklist of good habits while a small shield glows beside the dial."
    ],
    "story": {
      "en": [
        "Kaka wanted to buy a new machine for his flour mill, and he needed a loan. At the bank, Meena Didi looked at a paper and said, \"Your credit score is 780.\" Kaka blinked. \"What is that?\" Gullu leaned in. \"It is a number between 300 and 900 that shows how well you have repaid loans in the past,\" said Meena Didi. \"Think of it as a trust score. The higher it is, the more the bank trusts that you will pay back.\"",
        "\"So 780 is good?\" you asked. \"Very good,\" said Meena Didi. \"Above 750 is usually seen as strong. Below 650, banks may say no, or ask for a higher interest rate.\" You worked it out: a better score can save real money, because the bank charges less interest to people it trusts. \"The score is made from your history,\" said Gullu. \"No history, no score, and that is why a first loan can be harder.\"",
        "Meena Didi drew two paths on the board. \"Path one: pay every instalment and card bill on or before the due date. Keep the amount you owe on your credit card well below the limit. Your score climbs.\" She drew the second path. \"Path two: miss dues, pay late, or apply to five banks at once. Every application leaves a mark, and the score slips.\" Gullu gulped. \"Even one missed payment?\" \"A late payment can stay on your report for years,\" she said.",
        "Kaka made a checklist with you: pay on time, borrow only what you can repay, do not apply for many loans together, and check your report once a year, which is free, to spot mistakes. \"And never share your OTP or PAN with anyone who calls,\" you added. Meena Didi nodded. \"Your score is built slowly, one on-time payment at a time. Be patient and it will become your best friend at the bank.\" Kaka got his loan at a lower rate, and Gullu danced."
      ],
      "hi": [
        "काका अपनी आटा चक्की के लिए नई मशीन ख़रीदना चाहते थे और उन्हें कर्ज़ चाहिए था। बैंक में मीना दीदी ने एक काग़ज़ देखा और बोलीं, \"आपका क्रेडिट स्कोर सात सौ अस्सी है।\" काका ने पलकें झपकाईं। \"यह क्या होता है?\" गुल्लू आगे झुका। \"यह तीन सौ से नौ सौ के बीच की एक संख्या है जो दिखाती है कि आपने पहले कर्ज़ कितनी अच्छी तरह चुकाए,\" मीना दीदी ने कहा। \"इसे भरोसे का स्कोर समझो। जितना ऊँचा, उतना ज़्यादा भरोसा कि आप पैसे लौटाएँगे।\"",
        "\"तो सात सौ अस्सी अच्छा है?\" तुमने पूछा। \"बहुत अच्छा,\" मीना दीदी बोलीं। \"सात सौ पचास से ऊपर को आमतौर पर मज़बूत माना जाता है। छह सौ पचास से नीचे बैंक मना कर सकते हैं या ज़्यादा ब्याज माँग सकते हैं।\" तुमने हिसाब लगाया: बेहतर स्कोर से असली पैसे बच सकते हैं, क्योंकि बैंक भरोसेमंद लोगों से कम ब्याज लेता है। \"स्कोर तुम्हारे इतिहास से बनता है,\" गुल्लू बोला। \"इतिहास नहीं, तो स्कोर नहीं, इसीलिए पहला कर्ज़ मुश्किल हो सकता है।\"",
        "मीना दीदी ने बोर्ड पर दो रास्ते बनाए। \"पहला रास्ता: हर किस्त और कार्ड का बिल नियत तारीख़ तक या उससे पहले भरो। क्रेडिट कार्ड पर बकाया रक़म सीमा से काफ़ी कम रखो। स्कोर ऊपर चढ़ता है।\" उन्होंने दूसरा रास्ता बनाया। \"दूसरा रास्ता: किस्तें चूकना, देर से भरना, या एक साथ पाँच बैंकों में आवेदन करना। हर आवेदन निशान छोड़ता है और स्कोर फिसलता है।\" गुल्लू ने थूक निगला। \"एक किस्त चूकने पर भी?\" \"देर से भुगतान कई साल तक रिपोर्ट में रह सकता है,\" उन्होंने कहा।",
        "काका ने तुम्हारे साथ एक सूची बनाई: समय पर भुगतान करो, उतना ही उधार लो जितना चुका सको, एक साथ कई कर्ज़ों के लिए आवेदन मत करो, और साल में एक बार अपनी रिपोर्ट देखो, जो मुफ़्त है, ताकि ग़लतियाँ पकड़ सको। \"और फ़ोन करके माँगने वाले किसी को अपना ओटीपी या पैन कभी मत बताना,\" तुमने जोड़ा। मीना दीदी ने सिर हिलाया। \"स्कोर धीरे-धीरे बनता है, एक-एक समय पर भुगतान से। धैर्य रखो तो यह बैंक में तुम्हारा सबसे अच्छा दोस्त बन जाएगा।\" काका को कम दर पर कर्ज़ मिल गया और गुल्लू नाचने लगा।"
      ],
      "mr": [
        "काकांना त्यांच्या पिठाच्या गिरणीसाठी नवीन यंत्र घ्यायचं होतं आणि त्यांना कर्ज हवं होतं. बँकेत मीना ताईंनी एक कागद पाहिला आणि म्हणाल्या, \"तुमचा क्रेडिट स्कोअर सातशे ऐंशी आहे.\" काकांनी पापण्या फडफडवल्या. \"हे काय असतं?\" गल्लू पुढे झुकला. \"तीनशे ते नऊशेमधला एक आकडा, जो दाखवतो की तुम्ही आधीची कर्जं किती चांगल्या प्रकारे फेडली,\" मीना ताई म्हणाल्या. \"याला भरोशाचा स्कोअर समज. जितका जास्त, तितका बँकेचा विश्वास की तुम्ही पैसे परत कराल.\"",
        "\"मग सातशे ऐंशी चांगला आहे का?\" तू विचारलंस. \"खूप चांगला,\" मीना ताई म्हणाल्या. \"सातशे पन्नासच्या वर साधारणपणे मजबूत मानला जातो. सहाशे पन्नासच्या खाली बँका नकार देऊ शकतात किंवा जास्त व्याज मागू शकतात.\" तू हिशोब केलास: चांगल्या स्कोअरमुळे खरे पैसे वाचू शकतात, कारण बँक विश्वासू लोकांकडून कमी व्याज घेते. \"स्कोअर तुझ्या इतिहासातून बनतो,\" गल्लू म्हणाला. \"इतिहास नाही तर स्कोअर नाही, म्हणूनच पहिलं कर्ज कठीण असू शकतं.\"",
        "मीना ताईंनी फळ्यावर दोन रस्ते काढले. \"पहिला रस्ता: प्रत्येक हप्ता आणि कार्डाचं बिल देय तारखेला किंवा आधी भरा. क्रेडिट कार्डावरची थकबाकी मर्यादेपेक्षा खूप कमी ठेवा. स्कोअर वर चढतो.\" त्यांनी दुसरा रस्ता काढला. \"दुसरा रस्ता: हप्ते चुकवणं, उशिरा भरणं किंवा एकाच वेळी पाच बँकांत अर्ज करणं. प्रत्येक अर्ज खूण सोडतो आणि स्कोअर घसरतो.\" गल्लूने आवंढा गिळला. \"एकच हप्ता चुकला तरी?\" \"उशिरा भरलेला हप्ता अनेक वर्षं अहवालात राहू शकतो,\" त्या म्हणाल्या.",
        "काकांनी तुझ्यासोबत यादी केली: वेळेवर भरा, फेडता येईल तेवढंच उधार घ्या, एकाच वेळी अनेक कर्जांसाठी अर्ज करू नका, आणि वर्षातून एकदा आपला अहवाल तपासा, जो मोफत असतो, म्हणजे चुका सापडतील. \"आणि फोन करून मागणाऱ्या कोणालाही तुमचा ओटीपी किंवा पॅन कधीही सांगू नका,\" तू भर घातलीस. मीना ताईंनी मान डोलावली. \"स्कोअर हळूहळू बनतो, एकेका वेळेवर भरलेल्या हप्त्याने. संयम ठेवलात तर तो बँकेत तुमचा सर्वात चांगला मित्र होईल.\" काकांना कमी दराने कर्ज मिळालं आणि गल्लू नाचला."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A credit score is a number from 300 to 900 that shows how well you repay loans.",
          "A higher score helps you get loans and lower interest rates.",
          "Paying on time and keeping card use low raises the score. Late payments and many applications lower it.",
          "Check your report once a year for free, and never share your OTP or PAN."
        ],
        "fill": {
          "bank": [
            "credit score",
            "on time",
            "interest",
            "report",
            "OTP",
            "history"
          ],
          "items": [
            [
              "A number from 300 to 900 that shows how well you repay loans is a @@.",
              "credit score"
            ],
            [
              "The best way to raise your score is to pay @@ every month.",
              "on time"
            ],
            [
              "A higher score can get you a lower rate of @@.",
              "interest"
            ],
            [
              "You should check your credit @@ once a year to spot mistakes.",
              "report"
            ],
            [
              "Never share your @@ with a caller who asks for it.",
              "OTP"
            ]
          ]
        },
        "sortTitle": "Raises the score or lowers it?",
        "sortOpts": [
          {
            "k": "up",
            "t": "Raises the score"
          },
          {
            "k": "down",
            "t": "Lowers the score"
          }
        ],
        "sort": [
          {
            "icon": "calendar",
            "label": "Paying every instalment on or before the due date",
            "a": "up"
          },
          {
            "icon": "bill",
            "label": "Missing a card bill for two months",
            "a": "down"
          },
          {
            "icon": "paper",
            "label": "Applying to five banks for loans in one week",
            "a": "down"
          },
          {
            "icon": "card",
            "label": "Using only a small part of your card limit",
            "a": "up"
          },
          {
            "icon": "magnifier",
            "label": "Checking your report yearly and fixing mistakes",
            "a": "up"
          }
        ],
        "tf": [
          {
            "q": "A higher credit score can help you get a lower interest rate.",
            "a": true
          },
          {
            "q": "Applying to many banks at once helps your score.",
            "a": false
          },
          {
            "q": "Checking your own credit report once a year is a good habit.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "Kaka pays every instalment on the due date for three years. What will most likely happen to his score?",
            "opts": [
              "It will climb",
              "It will drop",
              "It will stay at zero"
            ],
            "a": 0
          },
          {
            "q": "A caller says he will raise your score if you tell him your OTP. What should you do?",
            "opts": [
              "Tell him quickly",
              "Hang up and share nothing",
              "Send him your PAN too"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to pay what I owe on time, to borrow only what I can repay, and to keep my OTP and PAN to myself."
      },
      "hi": {
        "remember": [
          "क्रेडिट स्कोर तीन सौ से नौ सौ के बीच की संख्या है जो बताती है कि आप कर्ज़ कितनी अच्छी तरह चुकाते हैं।",
          "ऊँचा स्कोर कर्ज़ और कम ब्याज दर दिलाने में मदद करता है।",
          "समय पर भुगतान और कार्ड का कम इस्तेमाल स्कोर बढ़ाता है। देर से भुगतान और बहुत सारे आवेदन उसे घटाते हैं।",
          "साल में एक बार रिपोर्ट मुफ़्त देखो, और ओटीपी या पैन किसी को मत बताओ।"
        ],
        "fill": {
          "bank": [
            "क्रेडिट स्कोर",
            "समय पर",
            "ब्याज",
            "रिपोर्ट",
            "ओटीपी",
            "इतिहास"
          ],
          "items": [
            [
              "तीन सौ से नौ सौ के बीच की संख्या जो बताती है कि आप कर्ज़ कैसे चुकाते हैं, @@ कहलाती है।",
              "क्रेडिट स्कोर"
            ],
            [
              "स्कोर बढ़ाने का सबसे अच्छा तरीक़ा हर महीने @@ भुगतान करना है।",
              "समय पर"
            ],
            [
              "ऊँचे स्कोर से कम दर का @@ मिल सकता है।",
              "ब्याज"
            ],
            [
              "ग़लतियाँ पकड़ने के लिए साल में एक बार अपनी क्रेडिट @@ देखो।",
              "रिपोर्ट"
            ],
            [
              "माँगने वाले फ़ोन करने वाले को अपना @@ कभी मत बताओ।",
              "ओटीपी"
            ]
          ]
        },
        "sortTitle": "स्कोर बढ़ाता है या घटाता है?",
        "sortOpts": [
          {
            "k": "up",
            "t": "स्कोर बढ़ाता है"
          },
          {
            "k": "down",
            "t": "स्कोर घटाता है"
          }
        ],
        "sort": [
          {
            "icon": "calendar",
            "label": "हर किस्त नियत तारीख़ तक या उससे पहले भरना",
            "a": "up"
          },
          {
            "icon": "bill",
            "label": "दो महीने तक कार्ड का बिल न भरना",
            "a": "down"
          },
          {
            "icon": "paper",
            "label": "एक हफ़्ते में पाँच बैंकों में कर्ज़ के लिए आवेदन करना",
            "a": "down"
          },
          {
            "icon": "card",
            "label": "कार्ड की सीमा का सिर्फ़ छोटा हिस्सा इस्तेमाल करना",
            "a": "up"
          },
          {
            "icon": "magnifier",
            "label": "हर साल रिपोर्ट देखकर ग़लतियाँ ठीक कराना",
            "a": "up"
          }
        ],
        "tf": [
          {
            "q": "ऊँचा क्रेडिट स्कोर कम ब्याज दर दिलाने में मदद कर सकता है।",
            "a": true
          },
          {
            "q": "एक साथ कई बैंकों में आवेदन करने से स्कोर बढ़ता है।",
            "a": false
          },
          {
            "q": "साल में एक बार अपनी क्रेडिट रिपोर्ट देखना अच्छी आदत है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "काका तीन साल तक हर किस्त नियत तारीख़ पर भरते हैं। उनके स्कोर का सबसे संभावित क्या होगा?",
            "opts": [
              "बढ़ेगा",
              "गिरेगा",
              "शून्य रहेगा"
            ],
            "a": 0
          },
          {
            "q": "कोई फ़ोन करने वाला कहता है कि ओटीपी बताओ तो वह तुम्हारा स्कोर बढ़ा देगा। तुम्हें क्या करना चाहिए?",
            "opts": [
              "जल्दी से बता दो",
              "फ़ोन काट दो और कुछ मत बताओ",
              "अपना पैन भी भेज दो"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि जो देना है वह समय पर चुकाऊँग[[ा|ी]], उतना ही उधार लूँग[[ा|ी]] जितना चुका सकूँ, और अपना ओटीपी और पैन अपने पास रखूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "क्रेडिट स्कोअर हा तीनशे ते नऊशेमधला आकडा आहे जो दाखवतो की तू कर्जं किती चांगली फेडतोस.",
          "जास्त स्कोअरमुळे कर्ज आणि कमी व्याजदर मिळायला मदत होते.",
          "वेळेवर भरणं आणि कार्डाचा कमी वापर स्कोअर वाढवतो. उशिरा भरणं आणि खूप अर्ज तो कमी करतात.",
          "वर्षातून एकदा अहवाल मोफत तपास, आणि ओटीपी किंवा पॅन कोणालाही सांगू नकोस."
        ],
        "fill": {
          "bank": [
            "क्रेडिट स्कोअर",
            "वेळेवर",
            "व्याज",
            "अहवाल",
            "ओटीपी",
            "इतिहास"
          ],
          "items": [
            [
              "तीनशे ते नऊशेमधला आकडा जो दाखवतो की तू कर्ज कसं फेडतोस त्याला @@ म्हणतात.",
              "क्रेडिट स्कोअर"
            ],
            [
              "स्कोअर वाढवण्याचा सर्वोत्तम मार्ग म्हणजे दर महिन्याला @@ भरणं.",
              "वेळेवर"
            ],
            [
              "जास्त स्कोअरमुळे कमी दराचं @@ मिळू शकतं.",
              "व्याज"
            ],
            [
              "चुका शोधण्यासाठी वर्षातून एकदा तुझा क्रेडिट @@ तपास.",
              "अहवाल"
            ],
            [
              "मागणाऱ्या फोन करणाऱ्याला तुझा @@ कधीही सांगू नकोस.",
              "ओटीपी"
            ]
          ]
        },
        "sortTitle": "स्कोअर वाढवतं की कमी करतं?",
        "sortOpts": [
          {
            "k": "up",
            "t": "स्कोअर वाढवतं"
          },
          {
            "k": "down",
            "t": "स्कोअर कमी करतं"
          }
        ],
        "sort": [
          {
            "icon": "calendar",
            "label": "प्रत्येक हप्ता देय तारखेला किंवा आधी भरणं",
            "a": "up"
          },
          {
            "icon": "bill",
            "label": "दोन महिने कार्डाचं बिल न भरणं",
            "a": "down"
          },
          {
            "icon": "paper",
            "label": "एका आठवड्यात पाच बँकांत कर्जासाठी अर्ज करणं",
            "a": "down"
          },
          {
            "icon": "card",
            "label": "कार्डाच्या मर्यादेचा फक्त छोटा भाग वापरणं",
            "a": "up"
          },
          {
            "icon": "magnifier",
            "label": "दर वर्षी अहवाल तपासून चुका दुरुस्त करणं",
            "a": "up"
          }
        ],
        "tf": [
          {
            "q": "जास्त क्रेडिट स्कोअरमुळे कमी व्याजदर मिळायला मदत होऊ शकते.",
            "a": true
          },
          {
            "q": "एकाच वेळी अनेक बँकांत अर्ज केल्याने स्कोअर वाढतो.",
            "a": false
          },
          {
            "q": "वर्षातून एकदा आपला क्रेडिट अहवाल तपासणं ही चांगली सवय आहे.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "काका तीन वर्षं प्रत्येक हप्ता देय तारखेला भरतात. त्यांच्या स्कोअरचं काय होण्याची शक्यता जास्त आहे?",
            "opts": [
              "तो वाढेल",
              "तो घसरेल",
              "तो शून्य राहील"
            ],
            "a": 0
          },
          {
            "q": "एक फोन करणारा म्हणतो की ओटीपी सांगितलास तर तो तुझा स्कोअर वाढवेल. तू काय करावंस?",
            "opts": [
              "पटकन सांगून टाकावा",
              "फोन कट करावा आणि काहीही सांगू नये",
              "पॅनही पाठवावा"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की जे देणं आहे ते वेळेवर फेडेन, फेडता येईल तेवढंच उधार घेईन, आणि माझा ओटीपी आणि पॅन माझ्याकडेच ठेवेन."
      }
    }
  },
  {
    "slug": "egg-baskets",
    "status": "live",
    "color": "#fde4a8",
    "title": {
      "en": "{name} and the Egg Baskets",
      "hi": "{name} और अंडों की टोकरियाँ",
      "mr": "{name} आणि अंड्यांच्या टोपल्या"
    },
    "cardTitle": {
      "en": "The Egg Baskets",
      "hi": "अंडों की टोकरियाँ",
      "mr": "अंड्यांच्या टोपल्या"
    },
    "subtitle": {
      "en": "Why not put all your money in one place?",
      "hi": "सारे पैसे एक ही जगह क्यों नहीं?",
      "mr": "सगळे पैसे एकाच ठिकाणी का नको?"
    },
    "topic": {
      "en": "Risk and diversification",
      "hi": "जोखिम और विविधता",
      "mr": "जोखीम आणि विविधता"
    },
    "stops": {
      "en": [
        "One Basket",
        "Crash",
        "Three Baskets",
        "Risk and Reward"
      ],
      "hi": [
        "एक टोकरी",
        "धड़ाम",
        "तीन टोकरियाँ",
        "जोखिम और इनाम"
      ],
      "mr": [
        "एक टोपली",
        "धडाम",
        "तीन टोपल्या",
        "जोखीम आणि फायदा"
      ]
    },
    "scenes": [
      "You carry one big basket full of eggs towards the market while Gullu trots beside you.",
      "Gullu trips on a stone, the basket tips over and all the eggs lie broken on the road.",
      "The next day you carry three small baskets with four eggs in each, and one basket tips while two stay safe.",
      "Meena Didi shows three jars labelled by pictures: a safe jar, a steady jar and a growing plant, while you nod."
    ],
    "story": {
      "en": [
        "It was market day, and Aaji had given you 12 eggs to carry. To save time, you put all of them in one big basket. \"One trip, easy,\" you said. Gullu trotted along beside you, wagging his tail. The road to the market was bumpy, but you held the basket tight and felt very clever.",
        "Then Gullu saw a butterfly and darted across your path. You tripped on a stone, and the basket flew out of your hands. All 12 eggs landed on the road with a splat. \"Everything is gone,\" you cried. Meena Didi, passing by on her scooter, stopped. \"That is the problem with one basket,\" she said. \"When it falls, you lose everything.\"",
        "The next day, you tried again with three small baskets holding 4 eggs each. Gullu darted across your path once more and one basket tipped over, but the other two stayed safe. \"I lost 4 eggs, but I still have 8,\" you said with a sigh of relief. \"That is called diversification,\" said Meena Didi. \"It means spreading your money across different places so one bad thing cannot take it all.\"",
        "Meena Didi used three jars to explain. \"A safe jar for savings you may need soon. A steady jar like a fixed deposit. A growing jar like a mutual fund, which can grow more but can also fall.\" Gullu scratched his ear. \"So why not put everything in the growing jar?\" \"Because higher possible reward comes with higher risk,\" she said. \"And never put all your money in one shop, one friend or one person's big promise.\" You nodded. \"Many baskets, small risks.\""
      ],
      "hi": [
        "बाज़ार का दिन था और दादी ने तुम्हें बारह अंडे ले जाने को दिए थे। समय बचाने के लिए तुमने सब एक ही बड़ी टोकरी में रख लिए। \"एक ही चक्कर, आसान,\" तुमने कहा। गुल्लू दुम हिलाता हुआ तुम्हारे साथ दौड़ रहा था। बाज़ार का रास्ता ऊबड़-खाबड़ था, पर तुमने टोकरी कसकर पकड़ी और ख़ुद को बहुत होशियार समझा।",
        "तभी गुल्लू ने तितली देखी और तुम्हारे रास्ते में कूद पड़ा। तुम एक पत्थर से टकराकर गिरे और टोकरी हाथ से छूट गई। बारहों अंडे छपाक से सड़क पर गिर गए। \"सब ख़त्म हो गया,\" तुम रो पड़े। मीना दीदी स्कूटर से गुज़र रही थीं, वे रुक गईं। \"एक टोकरी की यही दिक़्क़त है,\" उन्होंने कहा। \"वह गिरी तो सब कुछ चला जाता है।\"",
        "अगले दिन तुमने फिर कोशिश की, इस बार तीन छोटी टोकरियों में चार-चार अंडे। गुल्लू फिर रास्ते में कूदा और एक टोकरी गिर गई, पर दो सुरक्षित रहीं। \"चार अंडे गए, पर आठ बचे हैं,\" तुमने राहत की साँस लेकर कहा। \"इसे विविधता यानी डायवर्सिफ़िकेशन कहते हैं,\" मीना दीदी बोलीं। \"मतलब पैसे अलग-अलग जगह बाँटना ताकि एक बुरी घटना सब कुछ न छीन ले।\"",
        "मीना दीदी ने तीन जारों से समझाया। \"एक सुरक्षित जार उन बचत के लिए जिनकी जल्दी ज़रूरत पड़ सकती है। एक स्थिर जार, जैसे फ़िक्स्ड डिपॉज़िट। एक बढ़ने वाला जार, जैसे म्यूचुअल फ़ंड, जो ज़्यादा बढ़ सकता है पर गिर भी सकता है।\" गुल्लू ने कान खुजाया। \"तो सब कुछ बढ़ने वाले जार में क्यों नहीं?\" \"क्योंकि ज़्यादा इनाम की संभावना के साथ ज़्यादा जोखिम आता है,\" उन्होंने कहा। \"और अपने सारे पैसे कभी एक दुकान, एक दोस्त या किसी एक के बड़े वादे में मत डालो।\" तुमने सिर हिलाया। \"कई टोकरियाँ, छोटे जोखिम।\""
      ],
      "mr": [
        "बाजाराचा दिवस होता आणि आजीने तुला बारा अंडी न्यायला दिली होती. वेळ वाचवण्यासाठी तू सगळी एकाच मोठ्या टोपलीत ठेवली. \"एकच फेरी, सोपं,\" तू म्हणालास. गल्लू शेपटी हलवत तुझ्या शेजारी पळत होता. बाजाराचा रस्ता खडबडीत होता, पण तू टोपली घट्ट धरली आणि स्वतःला खूप हुशार समजलंस.",
        "तेवढ्यात गल्लूने फुलपाखरू पाहिलं आणि तुझ्या वाटेत आडवा धावला. तू दगडाला अडखळलास आणि टोपली हातातून उडाली. बाराही अंडी रस्त्यावर चपाक करून पडली. \"सगळं गेलं,\" तू रडलास. मीना ताई स्कूटरवरून जात होत्या, त्या थांबल्या. \"एका टोपलीची हीच अडचण आहे,\" त्या म्हणाल्या. \"ती पडली की सगळं जातं.\"",
        "दुसऱ्या दिवशी तू पुन्हा प्रयत्न केलास, यावेळी तीन छोट्या टोपल्यांत चार चार अंडी. गल्लू पुन्हा वाटेत आडवा धावला आणि एक टोपली पडली, पण दोन सुरक्षित राहिल्या. \"चार अंडी गेली, पण आठ वाचली,\" तू सुटकेचा निःश्वास टाकत म्हणालास. \"याला विविधता म्हणजे डायव्हर्सिफिकेशन म्हणतात,\" मीना ताई म्हणाल्या. \"म्हणजे पैसे वेगवेगळ्या ठिकाणी वाटणं, म्हणजे एक वाईट गोष्ट सगळं हिरावून घेणार नाही.\"",
        "मीना ताईंनी तीन बरण्यांनी समजावलं. \"एक सुरक्षित बरणी लवकर लागू शकणाऱ्या बचतीसाठी. एक स्थिर बरणी, जसं फिक्स्ड डिपॉझिट. एक वाढणारी बरणी, जसा म्युच्युअल फंड, जो जास्त वाढू शकतो पण घसरूही शकतो.\" गल्लूने कान खाजवला. \"मग सगळं वाढणाऱ्या बरणीत का नको?\" \"कारण जास्त फायद्याच्या शक्यतेसोबत जास्त जोखीम येते,\" त्या म्हणाल्या. \"आणि आपले सगळे पैसे कधीही एका दुकानात, एका मित्रात किंवा एका माणसाच्या मोठ्या वचनात घालू नका.\" तू मान डोलावलीस. \"अनेक टोपल्या, छोट्या जोखमी.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Diversification means spreading your money across different places.",
          "If one place does badly, the others protect the rest of your money.",
          "Higher possible reward usually comes with higher risk.",
          "Never put all your money in one shop, one friend or one person's promise."
        ],
        "fill": {
          "bank": [
            "diversification",
            "risk",
            "reward",
            "spread",
            "basket",
            "promise"
          ],
          "items": [
            [
              "Spreading your money across different places is called @@.",
              "diversification"
            ],
            [
              "The chance of losing money is called @@.",
              "risk"
            ],
            [
              "A higher possible @@ usually comes with higher risk.",
              "reward"
            ],
            [
              "Do not put all your eggs in one @@.",
              "basket"
            ],
            [
              "Never trust a big @@ of doubled money.",
              "promise"
            ]
          ]
        },
        "sortTitle": "One basket or many baskets?",
        "sortOpts": [
          {
            "k": "one",
            "t": "All in one place"
          },
          {
            "k": "many",
            "t": "Spread out"
          }
        ],
        "sort": [
          {
            "icon": "sack",
            "label": "Putting all your savings in one friend's business",
            "a": "one"
          },
          {
            "icon": "jar",
            "label": "Keeping some money as safe savings",
            "a": "many"
          },
          {
            "icon": "bank",
            "label": "Putting some money in a fixed deposit",
            "a": "many"
          },
          {
            "icon": "fakecall",
            "label": "Giving everything to a caller who promises double",
            "a": "one"
          },
          {
            "icon": "seed",
            "label": "Putting a small part in a mutual fund for the long term",
            "a": "many"
          }
        ],
        "tf": [
          {
            "q": "Spreading money across different places lowers the chance of losing everything.",
            "a": true
          },
          {
            "q": "Higher possible reward usually means lower risk.",
            "a": false
          },
          {
            "q": "It is wise to put all your savings in one person's promise.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "You have 12 eggs. Which is the safest way to carry them?",
            "opts": [
              "All in one basket",
              "Three baskets of four",
              "Throw them in the air"
            ],
            "a": 1
          },
          {
            "q": "A scheme promises to double your money in a month. What does the egg basket lesson tell you?",
            "opts": [
              "Put everything in it",
              "Be careful, big promises carry big risk",
              "Tell everyone to join"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to spread my money wisely, to respect risk, and never to put everything in one basket."
      },
      "hi": {
        "remember": [
          "विविधता यानी पैसे अलग-अलग जगह बाँटना।",
          "एक जगह नुकसान हो तो बाक़ी जगहें बाक़ी पैसों को बचाती हैं।",
          "ज़्यादा इनाम की संभावना के साथ आमतौर पर ज़्यादा जोखिम आता है।",
          "अपने सारे पैसे कभी एक दुकान, एक दोस्त या किसी एक के वादे में मत डालो।"
        ],
        "fill": {
          "bank": [
            "विविधता",
            "जोखिम",
            "इनाम",
            "बाँटना",
            "टोकरी",
            "वादे"
          ],
          "items": [
            [
              "पैसों को अलग-अलग जगह बाँटने को @@ कहते हैं।",
              "विविधता"
            ],
            [
              "पैसे खोने की संभावना को @@ कहते हैं।",
              "जोखिम"
            ],
            [
              "ज़्यादा संभावित @@ के साथ आमतौर पर ज़्यादा जोखिम आता है।",
              "इनाम"
            ],
            [
              "सारे अंडे एक ही @@ में मत रखो।",
              "टोकरी"
            ],
            [
              "पैसे दुगने करने के बड़े @@ पर कभी भरोसा मत करो।",
              "वादे"
            ]
          ]
        },
        "sortTitle": "एक टोकरी या कई टोकरियाँ?",
        "sortOpts": [
          {
            "k": "one",
            "t": "सब एक ही जगह"
          },
          {
            "k": "many",
            "t": "बँटे हुए"
          }
        ],
        "sort": [
          {
            "icon": "sack",
            "label": "सारी बचत एक दोस्त के धंधे में लगाना",
            "a": "one"
          },
          {
            "icon": "jar",
            "label": "कुछ पैसे सुरक्षित बचत में रखना",
            "a": "many"
          },
          {
            "icon": "bank",
            "label": "कुछ पैसे फ़िक्स्ड डिपॉज़िट में रखना",
            "a": "many"
          },
          {
            "icon": "fakecall",
            "label": "दुगना करने का वादा करने वाले फ़ोन करने वाले को सब दे देना",
            "a": "one"
          },
          {
            "icon": "seed",
            "label": "लंबे समय के लिए छोटा हिस्सा म्यूचुअल फ़ंड में लगाना",
            "a": "many"
          }
        ],
        "tf": [
          {
            "q": "पैसों को अलग-अलग जगह बाँटने से सब कुछ खोने की संभावना कम होती है।",
            "a": true
          },
          {
            "q": "ज़्यादा संभावित इनाम का मतलब आमतौर पर कम जोखिम होता है।",
            "a": false
          },
          {
            "q": "सारी बचत किसी एक के वादे पर लगा देना समझदारी है।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तुम्हारे पास बारह अंडे हैं। उन्हें ले जाने का सबसे सुरक्षित तरीक़ा कौन सा है?",
            "opts": [
              "सब एक ही टोकरी में",
              "चार-चार की तीन टोकरियाँ",
              "हवा में उछाल दो"
            ],
            "a": 1
          },
          {
            "q": "एक योजना महीने भर में पैसे दुगने करने का वादा करती है। अंडों की टोकरी का सबक़ क्या कहता है?",
            "opts": [
              "उसमें सब लगा दो",
              "सावधान रहो, बड़े वादों में बड़ा जोखिम होता है",
              "सबको जुड़ने को कहो"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अपने पैसे समझदारी से बाँटूँग[[ा|ी]], जोखिम का सम्मान करूँग[[ा|ी]], और कभी सब कुछ एक टोकरी में नहीं रखूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "विविधता म्हणजे पैसे वेगवेगळ्या ठिकाणी वाटणं.",
          "एका ठिकाणी नुकसान झालं तर बाकीची ठिकाणं उरलेल्या पैशांचं रक्षण करतात.",
          "जास्त फायद्याच्या शक्यतेसोबत साधारणपणे जास्त जोखीम येते.",
          "आपले सगळे पैसे कधीही एका दुकानात, एका मित्रात किंवा एका माणसाच्या वचनात घालू नका."
        ],
        "fill": {
          "bank": [
            "विविधता",
            "जोखीम",
            "फायदा",
            "वाटणं",
            "टोपली",
            "वचनावर"
          ],
          "items": [
            [
              "पैसे वेगवेगळ्या ठिकाणी वाटण्याला @@ म्हणतात.",
              "विविधता"
            ],
            [
              "पैसे गमावण्याच्या शक्यतेला @@ म्हणतात.",
              "जोखीम"
            ],
            [
              "जास्त संभाव्य @@ सोबत साधारणपणे जास्त जोखीम येते.",
              "फायदा"
            ],
            [
              "सगळी अंडी एकाच @@ मध्ये ठेवू नका.",
              "टोपली"
            ],
            [
              "पैसे दुप्पट करण्याच्या मोठ्या @@ कधीही विश्वास ठेवू नका.",
              "वचनावर"
            ]
          ]
        },
        "sortTitle": "एक टोपली की अनेक टोपल्या?",
        "sortOpts": [
          {
            "k": "one",
            "t": "सगळं एकाच ठिकाणी"
          },
          {
            "k": "many",
            "t": "वाटलेलं"
          }
        ],
        "sort": [
          {
            "icon": "sack",
            "label": "सगळी बचत एका मित्राच्या व्यवसायात घालणं",
            "a": "one"
          },
          {
            "icon": "jar",
            "label": "थोडे पैसे सुरक्षित बचतीत ठेवणं",
            "a": "many"
          },
          {
            "icon": "bank",
            "label": "थोडे पैसे फिक्स्ड डिपॉझिटमध्ये ठेवणं",
            "a": "many"
          },
          {
            "icon": "fakecall",
            "label": "दुप्पट करण्याचं वचन देणाऱ्या फोन करणाऱ्याला सगळं देऊन टाकणं",
            "a": "one"
          },
          {
            "icon": "seed",
            "label": "दीर्घकाळासाठी थोडा भाग म्युच्युअल फंडात घालणं",
            "a": "many"
          }
        ],
        "tf": [
          {
            "q": "पैसे वेगवेगळ्या ठिकाणी वाटल्याने सगळं गमावण्याची शक्यता कमी होते.",
            "a": true
          },
          {
            "q": "जास्त संभाव्य फायदा म्हणजे साधारणपणे कमी जोखीम.",
            "a": false
          },
          {
            "q": "सगळी बचत एका माणसाच्या वचनावर लावणं शहाणपणाचं आहे.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तुझ्याकडे बारा अंडी आहेत. ती नेण्याचा सर्वात सुरक्षित मार्ग कोणता?",
            "opts": [
              "सगळी एकाच टोपलीत",
              "चार चारांच्या तीन टोपल्या",
              "हवेत उडवून द्यावीत"
            ],
            "a": 1
          },
          {
            "q": "एक योजना महिनाभरात पैसे दुप्पट करण्याचं वचन देते. अंड्यांच्या टोपलीचा धडा काय सांगतो?",
            "opts": [
              "त्यात सगळं घाल",
              "सावध राहा, मोठ्या वचनांत मोठी जोखीम असते",
              "सगळ्यांना सामील व्हायला सांग"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की माझे पैसे शहाणपणाने वाटेन, जोखमीचा आदर करेन, आणि कधीही सगळं एका टोपलीत ठेवणार नाही."
      }
    }
  },
  {
    "slug": "sip-seeds",
    "status": "live",
    "color": "#c7f0d8",
    "title": {
      "en": "{name} and the Monthly Seeds",
      "hi": "{name} और महीने के बीज",
      "mr": "{name} आणि महिन्याचे बी"
    },
    "cardTitle": {
      "en": "The Monthly Seeds",
      "hi": "महीने के बीज",
      "mr": "महिन्याचे बी"
    },
    "subtitle": {
      "en": "What is a mutual fund SIP?",
      "hi": "म्यूचुअल फ़ंड SIP क्या है?",
      "mr": "म्युच्युअल फंड SIP म्हणजे काय?"
    },
    "topic": {
      "en": "Mutual funds and SIP",
      "hi": "म्यूचुअल फ़ंड और SIP",
      "mr": "म्युच्युअल फंड आणि SIP"
    },
    "stops": {
      "en": [
        "The Big Pot",
        "The Monthly Seed",
        "Ups and Downs",
        "Time Helps"
      ],
      "hi": [
        "बड़ा बर्तन",
        "महीने का बीज",
        "चढ़ाव और उतार",
        "समय की मदद"
      ],
      "mr": [
        "मोठं भांडं",
        "महिन्याचं बी",
        "चढ आणि उतार",
        "वेळेची मदत"
      ]
    },
    "scenes": [
      "Many villagers drop coins into one big pot while Meena Didi stirs it and points to a field of different plants.",
      "You drop a single 500 rupee note into a pot every month, shown by a calendar with five small seeds in a row.",
      "A wavy line of ups and downs behind the plants, with you holding a watering can calmly while Gullu looks worried.",
      "Years later a tall tree stands where the seeds were planted and you rest beneath it with Gullu."
    ],
    "story": {
      "en": [
        "Kaka said, \"My neighbours are putting money into something called a mutual fund. What is that?\" Meena Didi drew a big pot. \"Many people put a little money into one pot. A trained fund manager uses the pot to buy small parts of many companies, so no one person has to pick them. This is a mutual fund. It is regulated by SEBI, so only buy through registered platforms.\" Gullu sniffed the pot. \"Is it safe like a bank?\" \"No,\" said Meena Didi. \"It can go up or down.\"",
        "\"How do I begin with only a little money?\" you asked. \"With an SIP, a Systematic Investment Plan,\" said Meena Didi. \"You put in a fixed amount every month, like 500 rupees, the way you plant one seed each month.\" You did the sum: 500 rupees a month is 6,000 rupees a year. \"It becomes a habit, and you do not have to guess the best day to invest. Start only after you have your emergency money ready.\"",
        "Behind the plants Meena Didi drew a wavy line. \"Prices go up and down every day. When prices are low, your 500 rupees buys more units. When they are high, it buys fewer. Over time this evens out.\" Gullu looked worried at the dips. \"Should I stop when it falls?\" \"Panicking and stopping is what hurts most,\" she said. \"Remember the line that is read at the end of every advertisement: mutual fund investments are subject to market risks. Nothing is guaranteed, and past results do not promise future ones.\"",
        "Meena Didi drew a field and a tall tree. \"The magic ingredient is time. Money that stays invested for many years can grow on its growth. Start small, stay regular, stay patient.\" You and Gullu planted a tiny seed by the well that day, to remember. Years later you rested beneath its branches, thinking of the seeds you would sow each month. Gullu snored. \"Slow and steady,\" you whispered."
      ],
      "hi": [
        "काका बोले, \"मेरे पड़ोसी म्यूचुअल फ़ंड नाम की किसी चीज़ में पैसे लगा रहे हैं। यह क्या है?\" मीना दीदी ने एक बड़ा बर्तन बनाया। \"बहुत से लोग एक बर्तन में थोड़े-थोड़े पैसे डालते हैं। एक प्रशिक्षित फ़ंड मैनेजर उस बर्तन से कई कंपनियों के छोटे-छोटे हिस्से ख़रीदता है, ताकि हर आदमी को ख़ुद चुनना न पड़े। यही म्यूचुअल फ़ंड है। इसे सेबी नियंत्रित करता है, इसलिए सिर्फ़ पंजीकृत मंचों से ख़रीदो।\" गुल्लू ने बर्तन सूँघा। \"क्या यह बैंक जैसा सुरक्षित है?\" \"नहीं,\" मीना दीदी बोलीं। \"यह ऊपर-नीचे हो सकता है।\"",
        "\"थोड़े पैसों से शुरू कैसे करूँ?\" तुमने पूछा। \"एसआईपी यानी सिस्टमैटिक इन्वेस्टमेंट प्लान से,\" मीना दीदी बोलीं। \"हर महीने तय रक़म, जैसे पाँच सौ रुपये, डालते हो, जैसे हर महीने एक बीज बोते हो।\" तुमने हिसाब लगाया: पाँच सौ रुपये महीना यानी साल में छह हज़ार रुपये। \"यह आदत बन जाती है, और निवेश के लिए सबसे अच्छा दिन अंदाज़े से नहीं ढूँढना पड़ता। शुरू तब करो जब आपातकाल के पैसे तैयार हों।\"",
        "पौधों के पीछे मीना दीदी ने एक लहरदार रेखा बनाई। \"भाव रोज़ ऊपर-नीचे होते हैं। भाव कम हों तो तुम्हारे पाँच सौ रुपये ज़्यादा यूनिट ख़रीदते हैं। ज़्यादा हों तो कम। समय के साथ यह बराबर हो जाता है।\" गुल्लू गिरावट देखकर घबराया। \"गिरे तो क्या रुक जाऊँ?\" \"घबराकर रुक जाना सबसे ज़्यादा नुक़सान करता है,\" उन्होंने कहा। \"हर विज्ञापन के अंत में पढ़ी जाने वाली बात याद रखो: म्यूचुअल फ़ंड निवेश बाज़ार जोखिमों के अधीन हैं। कुछ भी पक्का नहीं है, और पुराने नतीजे आगे की गारंटी नहीं देते।\"",
        "मीना दीदी ने एक खेत और एक ऊँचा पेड़ बनाया। \"जादुई चीज़ समय है। जो पैसा कई साल निवेश में रहता है वह अपनी ही बढ़त पर बढ़ सकता है। छोटा शुरू करो, नियमित रहो, धैर्य रखो।\" तुमने और गुल्लू ने उस दिन कुएँ के पास एक छोटा बीज बोया, याद रखने के लिए। सालों बाद तुम उसकी डालियों के नीचे आराम कर रहे थे और हर महीने बोए जाने वाले बीजों के बारे में सोच रहे थे। गुल्लू ख़र्राटे ले रहा था। \"धीरे और लगातार,\" तुमने फुसफुसाया।"
      ],
      "mr": [
        "काका म्हणाले, \"माझे शेजारी म्युच्युअल फंड नावाच्या कशात तरी पैसे घालत आहेत. ते काय असतं?\" मीना ताईंनी एक मोठं भांडं काढलं. \"अनेक लोक एका भांड्यात थोडे थोडे पैसे घालतात. एक प्रशिक्षित फंड मॅनेजर त्या भांड्यातून अनेक कंपन्यांचे छोटे छोटे हिस्से घेतो, म्हणजे प्रत्येकाला स्वतः निवडावं लागत नाही. हाच म्युच्युअल फंड. त्यावर सेबीचं नियंत्रण असतं, म्हणून फक्त नोंदणीकृत व्यासपीठांवरूनच घ्या.\" गल्लूने भांडं हुंगलं. \"हे बँकेसारखं सुरक्षित आहे का?\" \"नाही,\" मीना ताई म्हणाल्या. \"ते वर किंवा खाली जाऊ शकतं.\"",
        "\"थोड्या पैशांनी सुरुवात कशी करू?\" तू विचारलंस. \"एसआयपीने, म्हणजे सिस्टिमॅटिक इन्व्हेस्टमेंट प्लॅनने,\" मीना ताई म्हणाल्या. \"दर महिन्याला ठरलेली रक्कम, म्हणजे पाचशे रुपये, घालायची, जसं दर महिन्याला एक बी पेरतोस.\" तू हिशोब केलास: महिन्याला पाचशे म्हणजे वर्षाला सहा हजार रुपये. \"ती सवय बनते, आणि गुंतवणुकीसाठी सर्वोत्तम दिवस अंदाजाने शोधावा लागत नाही. सुरुवात तेव्हा कर जेव्हा आणीबाणीचे पैसे तयार असतील.\"",
        "रोपांमागे मीना ताईंनी एक नागमोडी रेषा काढली. \"भाव रोज वर खाली होतात. भाव कमी असतील तर तुझे पाचशे रुपये जास्त युनिट घेतात. जास्त असतील तर कमी. कालांतराने हे सम होतं.\" गल्लू उतार पाहून घाबरला. \"भाव पडले तर थांबू का?\" \"घाबरून थांबणं सर्वात जास्त नुकसान करतं,\" त्या म्हणाल्या. \"प्रत्येक जाहिरातीच्या शेवटी वाचली जाणारी ओळ लक्षात ठेव: म्युच्युअल फंड गुंतवणूक बाजारातील जोखमींच्या अधीन आहे. काहीही निश्चित नाही, आणि आधीचे निकाल पुढच्याची खात्री देत नाहीत.\"",
        "मीना ताईंनी एक शेत आणि एक उंच झाड काढलं. \"जादुई घटक म्हणजे वेळ. जो पैसा अनेक वर्षं गुंतलेला राहतो तो स्वतःच्या वाढीवर वाढू शकतो. लहान सुरुवात कर, नियमित राहा, संयम ठेव.\" तू आणि गल्लूने त्या दिवशी विहिरीजवळ एक छोटं बी लावलं, लक्षात राहण्यासाठी. वर्षांनी तू त्याच्या फांद्यांखाली विश्रांती घेत होतास आणि दर महिन्याला पेरायच्या बियांचा विचार करत होतास. गल्लू घोरत होता. \"हळू आणि सातत्याने,\" तू कुजबुजलास."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A mutual fund pools money from many people and a fund manager invests it in many companies.",
          "An SIP puts in a fixed amount every month, which builds a habit.",
          "Returns are not guaranteed. Prices go up and down, and mutual fund investments are subject to market risks.",
          "Start after your emergency money is ready, stay regular and give it time."
        ],
        "fill": {
          "bank": [
            "mutual fund",
            "SIP",
            "SEBI",
            "risks",
            "time",
            "unit"
          ],
          "items": [
            [
              "A pot where many people invest together is a @@.",
              "mutual fund"
            ],
            [
              "Investing a fixed amount every month is called an @@.",
              "SIP"
            ],
            [
              "Mutual funds in India are regulated by @@.",
              "SEBI"
            ],
            [
              "Mutual fund investments are subject to market @@.",
              "risks"
            ],
            [
              "Money invested for many years grows best when you give it @@.",
              "time"
            ]
          ]
        },
        "sortTitle": "Fixed and known, or can go up and down?",
        "sortOpts": [
          {
            "k": "fixed",
            "t": "Fixed and known"
          },
          {
            "k": "varies",
            "t": "Can go up and down"
          }
        ],
        "sort": [
          {
            "icon": "bank",
            "label": "The interest rate promised on a fixed deposit",
            "a": "fixed"
          },
          {
            "icon": "pie",
            "label": "The value of a mutual fund",
            "a": "varies"
          },
          {
            "icon": "calendar",
            "label": "The amount you choose to put in your SIP each month",
            "a": "fixed"
          },
          {
            "icon": "kite",
            "label": "The price of a company share",
            "a": "varies"
          },
          {
            "icon": "jar",
            "label": "The coins you counted in your jar",
            "a": "fixed"
          }
        ],
        "tf": [
          {
            "q": "A mutual fund guarantees that you will not lose money.",
            "a": false
          },
          {
            "q": "An SIP lets you invest a fixed amount every month.",
            "a": true
          },
          {
            "q": "You should stop your SIP the moment prices fall.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "You put in 500 rupees every month. How much do you invest in a year?",
            "opts": [
              "5,000",
              "6,000",
              "60,000"
            ],
            "a": 1
          },
          {
            "q": "A friend says a fund will definitely double your money in a year. What should you do?",
            "opts": [
              "Believe it",
              "Remember that nothing is guaranteed and be careful",
              "Put in all your savings"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to invest only after my emergency money is ready, to start small and stay regular, and to remember that nothing is guaranteed."
      },
      "hi": {
        "remember": [
          "म्यूचुअल फ़ंड कई लोगों का पैसा इकट्ठा करता है और फ़ंड मैनेजर उसे कई कंपनियों में लगाता है।",
          "एसआईपी में हर महीने तय रक़म लगती है, जिससे आदत बनती है।",
          "रिटर्न की गारंटी नहीं है। भाव ऊपर-नीचे होते हैं, और म्यूचुअल फ़ंड निवेश बाज़ार जोखिमों के अधीन हैं।",
          "आपातकाल के पैसे तैयार होने के बाद शुरू करो, नियमित रहो और समय दो।"
        ],
        "fill": {
          "bank": [
            "म्यूचुअल फ़ंड",
            "एसआईपी",
            "सेबी",
            "जोखिमों",
            "समय",
            "यूनिट"
          ],
          "items": [
            [
              "जहाँ बहुत से लोग मिलकर निवेश करते हैं वह बर्तन @@ है।",
              "म्यूचुअल फ़ंड"
            ],
            [
              "हर महीने तय रक़म निवेश करने को @@ कहते हैं।",
              "एसआईपी"
            ],
            [
              "भारत में म्यूचुअल फ़ंड को @@ नियंत्रित करता है।",
              "सेबी"
            ],
            [
              "म्यूचुअल फ़ंड निवेश बाज़ार @@ के अधीन हैं।",
              "जोखिमों"
            ],
            [
              "कई साल निवेश में रखा पैसा तब सबसे अच्छा बढ़ता है जब उसे @@ दिया जाए।",
              "समय"
            ]
          ]
        },
        "sortTitle": "तय और पता है, या ऊपर-नीचे हो सकता है?",
        "sortOpts": [
          {
            "k": "fixed",
            "t": "तय और पता है"
          },
          {
            "k": "varies",
            "t": "ऊपर-नीचे हो सकता है"
          }
        ],
        "sort": [
          {
            "icon": "bank",
            "label": "फ़िक्स्ड डिपॉज़िट पर वादा की गई ब्याज दर",
            "a": "fixed"
          },
          {
            "icon": "pie",
            "label": "म्यूचुअल फ़ंड की क़ीमत",
            "a": "varies"
          },
          {
            "icon": "calendar",
            "label": "हर महीने एसआईपी में डालने के लिए तुम्हारी चुनी रक़म",
            "a": "fixed"
          },
          {
            "icon": "kite",
            "label": "किसी कंपनी के शेयर का भाव",
            "a": "varies"
          },
          {
            "icon": "jar",
            "label": "तुम्हारे जार में गिने हुए सिक्के",
            "a": "fixed"
          }
        ],
        "tf": [
          {
            "q": "म्यूचुअल फ़ंड गारंटी देता है कि पैसे नहीं डूबेंगे।",
            "a": false
          },
          {
            "q": "एसआईपी से हर महीने तय रक़म निवेश की जा सकती है।",
            "a": true
          },
          {
            "q": "भाव गिरते ही एसआईपी रोक देना चाहिए।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तुम हर महीने पाँच सौ रुपये लगाते हो। साल भर में कितना निवेश करते हो?",
            "opts": [
              "पाँच हज़ार",
              "छह हज़ार",
              "साठ हज़ार"
            ],
            "a": 1
          },
          {
            "q": "एक दोस्त कहता है कि फ़ंड साल भर में पैसे पक्का दुगने कर देगा। तुम्हें क्या करना चाहिए?",
            "opts": [
              "मान लो",
              "याद रखो कि कुछ भी पक्का नहीं और सावधान रहो",
              "सारी बचत लगा दो"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि आपातकाल के पैसे तैयार होने के बाद ही निवेश करूँग[[ा|ी]], छोटा शुरू करके नियमित रहूँग[[ा|ी]], और याद रखूँग[[ा|ी]] कि कुछ भी पक्का नहीं होता।"
      },
      "mr": {
        "remember": [
          "म्युच्युअल फंड अनेक लोकांचे पैसे जमा करतो आणि फंड मॅनेजर ते अनेक कंपन्यांत गुंतवतो.",
          "एसआयपीमध्ये दर महिन्याला ठरलेली रक्कम भरली जाते, त्यामुळे सवय लागते.",
          "परताव्याची खात्री नसते. भाव वर खाली होतात, आणि म्युच्युअल फंड गुंतवणूक बाजारातील जोखमींच्या अधीन आहे.",
          "आणीबाणीचे पैसे तयार झाल्यावर सुरुवात कर, नियमित राहा आणि वेळ दे."
        ],
        "fill": {
          "bank": [
            "म्युच्युअल फंड",
            "एसआयपी",
            "सेबी",
            "जोखमींच्या",
            "वेळ",
            "युनिट"
          ],
          "items": [
            [
              "जिथे अनेक लोक मिळून गुंतवणूक करतात ते भांडं म्हणजे @@.",
              "म्युच्युअल फंड"
            ],
            [
              "दर महिन्याला ठरलेली रक्कम गुंतवण्याला @@ म्हणतात.",
              "एसआयपी"
            ],
            [
              "भारतात म्युच्युअल फंडांवर @@ चं नियंत्रण असतं.",
              "सेबी"
            ],
            [
              "म्युच्युअल फंड गुंतवणूक बाजारातील @@ अधीन आहे.",
              "जोखमींच्या"
            ],
            [
              "अनेक वर्षं गुंतवलेला पैसा तेव्हा सर्वात चांगला वाढतो जेव्हा त्याला @@ दिला जातो.",
              "वेळ"
            ]
          ]
        },
        "sortTitle": "ठरलेलं आणि माहीत, की वर खाली होऊ शकतं?",
        "sortOpts": [
          {
            "k": "fixed",
            "t": "ठरलेलं आणि माहीत"
          },
          {
            "k": "varies",
            "t": "वर खाली होऊ शकतं"
          }
        ],
        "sort": [
          {
            "icon": "bank",
            "label": "फिक्स्ड डिपॉझिटवर वचन दिलेला व्याजदर",
            "a": "fixed"
          },
          {
            "icon": "pie",
            "label": "म्युच्युअल फंडाची किंमत",
            "a": "varies"
          },
          {
            "icon": "calendar",
            "label": "दर महिन्याला एसआयपीमध्ये घालण्यासाठी तू ठरवलेली रक्कम",
            "a": "fixed"
          },
          {
            "icon": "kite",
            "label": "कंपनीच्या शेअरची किंमत",
            "a": "varies"
          },
          {
            "icon": "jar",
            "label": "तुझ्या बरणीत मोजलेली नाणी",
            "a": "fixed"
          }
        ],
        "tf": [
          {
            "q": "म्युच्युअल फंड पैसे बुडणार नाहीत याची हमी देतो.",
            "a": false
          },
          {
            "q": "एसआयपीने दर महिन्याला ठरलेली रक्कम गुंतवता येते.",
            "a": true
          },
          {
            "q": "भाव पडताच एसआयपी थांबवावी.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तू दर महिन्याला पाचशे रुपये घालतोस. वर्षभरात किती गुंतवतोस?",
            "opts": [
              "पाच हजार",
              "सहा हजार",
              "साठ हजार"
            ],
            "a": 1
          },
          {
            "q": "एक मित्र म्हणतो की फंड वर्षभरात नक्की पैसे दुप्पट करेल. तू काय करावंस?",
            "opts": [
              "विश्वास ठेवावा",
              "लक्षात ठेवावं की काहीही निश्चित नाही आणि सावध राहावं",
              "सगळी बचत घालावी"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की आणीबाणीचे पैसे तयार झाल्यावरच गुंतवणूक करेन, लहान सुरुवात करून नियमित राहीन, आणि लक्षात ठेवेन की काहीही निश्चित नसतं."
      }
    }
  },
  {
    "slug": "buy-now-trap",
    "status": "live",
    "color": "#fdffb6",
    "title": {
      "en": "{name} and the Buy-Now Trap",
      "hi": "{name} और \"अभी ख़रीदो\" का जाल",
      "mr": "{name} आणि \"आत्ताच घ्या\"चं जाळं"
    },
    "cardTitle": {
      "en": "The Buy-Now Trap",
      "hi": "\"अभी ख़रीदो\" का जाल",
      "mr": "\"आत्ताच घ्या\"चं जाळं"
    },
    "subtitle": {
      "en": "What does an EMI really cost?",
      "hi": "EMI की असली क़ीमत क्या है?",
      "mr": "EMI ची खरी किंमत किती?"
    },
    "topic": {
      "en": "EMI and hidden costs",
      "hi": "EMI और छिपी लागत",
      "mr": "EMI आणि लपलेला खर्च"
    },
    "stops": {
      "en": [
        "The Shop Window",
        "The Blackboard Sums",
        "The Saving Jar",
        "Paid in Full"
      ],
      "hi": [
        "दुकान की खिड़की",
        "ब्लैकबोर्ड का हिसाब",
        "बचत की बरनी",
        "पूरा भुगतान"
      ],
      "mr": [
        "दुकानाची खिडकी",
        "फळ्यावरचं गणित",
        "बचतीची बरणी",
        "पूर्ण पेमेंट"
      ]
    },
    "scenes": [
      "A shop assistant says \"1,100 rupees a month\" in a speech bubble while you look at the new phone on its stand with a worried face.",
      "On the blackboard, 1,100 times 12 makes 13,200, and the extra is 1,200. You think with your head tilted.",
      "You drop a coin into your jar while a calendar fills with ticks and a phone floats in your thought bubble.",
      "You hold up your new phone proudly at the counter, with 12,000 rupees paid in cash and no EMI."
    ],
    "story": {
      "en": [
        "On Saturday you stopped at the mobile shop and saw a shiny new phone. The price tag said 12,000 rupees. \"Too much!\" you gasped. The shop assistant smiled. \"No problem! Pay just 1,100 rupees a month and take it home today!\" Only 1,100? That sounded so small. Gullu tugged your sleeve. \"Wait, {name}. Let us count first.\"",
        "Back home, Gullu pointed at the blackboard. \"An EMI means paying for something in small monthly parts,\" he said. \"The assistant said twelve months. So 1,100 times 12 makes 13,200 rupees.\" Below it he wrote: 13,200 minus 12,000 makes 1,200. \"The phone costs 12,000, but this EMI makes you pay 1,200 rupees extra. That is what paying slowly can cost.\"",
        "\"So what can I do?\" you asked. \"Save first,\" said Gullu. \"Put 1,000 rupees in the jar each month. In 12 months, 1,000 times 12 makes 12,000 rupees. No extra cost, no worry.\" You and Aaji agreed: 1,000 rupees every month from pocket money, birthday gifts and festival gifts. You marked the calendar and dropped in the first coin, dreaming of the phone. Some months were hard and you wanted to give up. But every tick on the calendar made the jar a little heavier.",
        "Twelve months later you carried the full jar to the shop. You paid 12,000 rupees in cash and walked out with the phone held high. No monthly bills, no extra 1,200 rupees. \"Before you say yes to any EMI,\" said Gullu, \"multiply the monthly amount by the months and compare it with the price. Ask about fees. Even a 'no-cost EMI' can hide a processing fee or take away a cash discount.\""
      ],
      "hi": [
        "शनिवार को तुम मोबाइल की दुकान पर रुक[[े|ीं]] और एक चमचमाता नया फ़ोन देखा। क़ीमत का टैग था बारह हज़ार रुपये। \"बहुत महँगा!\" तुम्हारे मुँह से निकला। दुकान के सहायक ने मुस्कुराकर कहा, \"कोई बात नहीं! बस हर महीने ग्यारह सौ रुपये दीजिए और आज ही घर ले जाइए!\" सिर्फ़ ग्यारह सौ? यह तो बहुत कम लगा। गुल्लू ने तुम्हारी आस्तीन खींची। \"रुको {name}, पहले गिन लेते हैं।\"",
        "घर लौटकर गुल्लू ने ब्लैकबोर्ड की ओर इशारा किया। \"EMI का मतलब है किसी चीज़ की क़ीमत छोटे-छोटे मासिक हिस्सों में चुकाना,\" उसने कहा। \"सहायक ने बारह महीने बताए थे। तो ग्यारह सौ गुना बारह यानी तेरह हज़ार दो सौ रुपये।\" उसके नीचे उसने लिखा: 13,200 में से 12,000 घटाओ तो 1,200। \"फ़ोन की क़ीमत बारह हज़ार है, पर इस EMI में तुम्हें बारह सौ रुपये ज़्यादा देने पड़ेंगे। धीरे-धीरे चुकाने की यही क़ीमत हो सकती है।\"",
        "\"तो मैं क्या करूँ?\" तुमने पूछा। \"पहले बचाओ,\" गुल्लू बोला। \"हर महीने बरनी में एक हज़ार रुपये डालो। बारह महीनों में एक हज़ार गुना बारह यानी बारह हज़ार रुपये। न कोई ज़्यादा ख़र्च, न कोई चिंता।\" तुमने और दादी ने तय किया: जेब-ख़र्च, जन्मदिन और त्योहार के तोहफ़ों से हर महीने एक हज़ार। तुमने कैलेंडर पर निशान लगाया और पहला सिक्का डाला, फ़ोन के सपने देखते हुए। कुछ महीने मुश्किल थे और हार मानने का मन हुआ। पर कैलेंडर का हर निशान बरनी को थोड़ा और भारी करता गया।",
        "बारह महीने बाद तुम भरी बरनी लेकर दुकान पहुँच[[े|ीं]]। तुमने बारह हज़ार रुपये नक़द दिए और फ़ोन ऊँचा उठाए बाहर निकल[[े|ीं]]। न हर महीने की किस्त, न वे अतिरिक्त बारह सौ रुपये। \"किसी भी EMI पर हाँ कहने से पहले,\" गुल्लू बोला, \"महीने की रक़म को महीनों से गुणा करो और क़ीमत से मिलाओ। फ़ीस के बारे में पूछो। 'नो-कॉस्ट EMI' में भी प्रोसेसिंग फ़ीस छिपी हो सकती है या नक़द की छूट जा सकती है।\""
      ],
      "mr": [
        "शनिवारी तू मोबाइलच्या दुकानासमोर थांबल[[ास|ीस]] आणि एक चकचकीत नवा फोन पाहिलास. किमतीचा टॅग होता बारा हजार रुपये. \"खूपच महाग!\" तुझ्या तोंडून निघालं. दुकानातला सहायक हसून म्हणाला, \"काही हरकत नाही! फक्त दर महिन्याला अकराशे रुपये द्या आणि आजच घरी न्या!\" फक्त अकराशे? ते तर फारच कमी वाटलं. गल्लूने तुझी बाही ओढली. \"थांब {name}, आधी मोजून पाहू.\"",
        "घरी आल्यावर गल्लूने फळ्याकडे बोट दाखवलं. \"EMI म्हणजे एखादी वस्तू छोट्या मासिक हिश्श्यांत फेडणं,\" तो म्हणाला. \"सहायकाने बारा महिने सांगितले. म्हणजे अकराशे गुणिले बारा म्हणजे तेरा हजार दोनशे रुपये.\" त्याखाली त्याने लिहिलं: 13,200 वजा 12,000 बरोबर 1,200. \"फोनची किंमत बारा हजार आहे, पण या EMI मुळे तुला बाराशे रुपये जास्त द्यावे लागतील. हळूहळू फेडण्याची ही किंमत असू शकते.\"",
        "\"मग मी काय करू?\" तू विचारलंस. \"आधी बचत कर,\" गल्लू म्हणाला. \"दर महिन्याला बरणीत एक हजार रुपये टाक. बारा महिन्यांत एक हजार गुणिले बारा म्हणजे बारा हजार रुपये. जादा खर्च नाही, काळजी नाही.\" तू आणि आजीने ठरवलं: खाऊचे पैसे, वाढदिवस आणि सणाच्या भेटींतून दर महिन्याला एक हजार. तू कॅलेंडरवर खूण केलीस आणि पहिलं नाणं टाकलंस, फोनची स्वप्नं पाहत. काही महिने कठीण होते आणि हार मानावीशी वाटली. पण कॅलेंडरवरची प्रत्येक खूण बरणीला थोडं जड करत गेली.",
        "बारा महिन्यांनी तू भरलेली बरणी घेऊन दुकानात पोहोचल[[ास|ीस]]. तू बारा हजार रुपये रोख दिलेस आणि फोन उंच धरून बाहेर पडल[[ास|ीस]]. दर महिन्याचा हप्ता नाही, ते जादा बाराशे रुपयेही नाहीत. \"कोणत्याही EMI ला हो म्हणण्याआधी,\" गल्लू म्हणाला, \"महिन्याची रक्कम महिन्यांनी गुणून किमतीशी ताडून पाहा. फीबद्दल विचार. 'नो-कॉस्ट EMI' मध्येही प्रोसेसिंग फी लपलेली असू शकते किंवा रोखीची सवलत जाऊ शकते.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "EMI means paying for something in small monthly parts, but the total can be more than the price.",
          "Total cost = monthly amount × number of months. Compare it with the price.",
          "Ask about fees, interest and penalties before you say yes. A \"no-cost EMI\" can still hide costs.",
          "Saving first and paying in cash often costs less and keeps you free from monthly bills."
        ],
        "fill": {
          "bank": [
            "EMI",
            "total",
            "extra",
            "months",
            "interest",
            "save"
          ],
          "items": [
            [
              "Paying for something in small monthly parts is called an @@.",
              "EMI"
            ],
            [
              "1,100 × 12 months = 13,200 rupees is the @@ amount you pay.",
              "total"
            ],
            [
              "13,200 − 12,000 = 1,200 rupees is the @@ cost.",
              "extra"
            ],
            [
              "Before saying yes, count the number of @@ and multiply.",
              "months"
            ],
            [
              "Saving first and buying with your own money avoids paying @@.",
              "interest"
            ]
          ]
        },
        "sortTitle": "Cheaper or costs more?",
        "sortOpts": [
          {
            "k": "less",
            "t": "Cheaper"
          },
          {
            "k": "more",
            "t": "Costs more"
          }
        ],
        "sort": [
          {
            "icon": "jar",
            "label": "Save for 12 months, then pay in cash",
            "a": "less"
          },
          {
            "icon": "calendar",
            "label": "Pay in 12 monthly parts with extra charges",
            "a": "more"
          },
          {
            "icon": "tag",
            "label": "Buy in a sale with your own savings",
            "a": "less"
          },
          {
            "icon": "card",
            "label": "Swipe a credit card and pay only the minimum",
            "a": "more"
          },
          {
            "icon": "phone",
            "label": "Pick the phone that fits your savings",
            "a": "less"
          }
        ],
        "tf": [
          {
            "q": "An EMI always costs exactly the shop price.",
            "a": false
          },
          {
            "q": "Monthly amount times months shows the real total.",
            "a": true
          },
          {
            "q": "A small monthly amount means the item is cheap.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "A bicycle costs 24,000 rupees. The EMI is 2,100 rupees for 12 months. What do you pay in total?",
            "opts": [
              "25,200",
              "24,000",
              "21,000"
            ],
            "a": 0
          },
          {
            "q": "You save 500 rupees a month. How many months does it take to save 6,000 rupees?",
            "opts": [
              "6",
              "12",
              "10"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to multiply before I say yes to an EMI, to ask about extra costs, and to save first for the things I want."
      },
      "hi": {
        "remember": [
          "EMI का मतलब है किसी चीज़ को छोटे मासिक हिस्सों में चुकाना, पर कुल रक़म क़ीमत से ज़्यादा हो सकती है।",
          "कुल ख़र्च = महीने की रक़म × महीनों की संख्या। उसे क़ीमत से मिलाओ।",
          "हाँ कहने से पहले फ़ीस, ब्याज और जुर्माने के बारे में पूछो। \"नो-कॉस्ट EMI\" में भी ख़र्च छिपा हो सकता है।",
          "पहले बचाकर नक़द देना अक्सर सस्ता पड़ता है और हर महीने की किस्त से आज़ादी देता है।"
        ],
        "fill": {
          "bank": [
            "EMI",
            "कुल",
            "ज़्यादा",
            "महीनों",
            "ब्याज",
            "बचाओ"
          ],
          "items": [
            [
              "किसी चीज़ को छोटे मासिक हिस्सों में चुकाने को @@ कहते हैं।",
              "EMI"
            ],
            [
              "1,100 × 12 महीने = 13,200 रुपये, यही @@ रक़म है जो चुकानी पड़ती है।",
              "कुल"
            ],
            [
              "13,200 − 12,000 = 1,200 रुपये @@ देने पड़े।",
              "ज़्यादा"
            ],
            [
              "हाँ कहने से पहले @@ की संख्या गिनो और गुणा करो।",
              "महीनों"
            ],
            [
              "पहले बचाकर अपने पैसों से ख़रीदने पर @@ नहीं देना पड़ता।",
              "ब्याज"
            ]
          ]
        },
        "sortTitle": "सस्ता या ज़्यादा महँगा?",
        "sortOpts": [
          {
            "k": "less",
            "t": "सस्ता"
          },
          {
            "k": "more",
            "t": "ज़्यादा महँगा"
          }
        ],
        "sort": [
          {
            "icon": "jar",
            "label": "बारह महीने बचाकर नक़द देना",
            "a": "less"
          },
          {
            "icon": "calendar",
            "label": "अतिरिक्त शुल्क के साथ बारह मासिक किस्तों में देना",
            "a": "more"
          },
          {
            "icon": "tag",
            "label": "अपनी बचत से सेल में ख़रीदना",
            "a": "less"
          },
          {
            "icon": "card",
            "label": "क्रेडिट कार्ड घिसकर सिर्फ़ न्यूनतम रक़म चुकाना",
            "a": "more"
          },
          {
            "icon": "phone",
            "label": "अपनी बचत में आने वाला फ़ोन चुनना",
            "a": "less"
          }
        ],
        "tf": [
          {
            "q": "EMI में हमेशा दुकान की क़ीमत ही चुकानी पड़ती है।",
            "a": false
          },
          {
            "q": "महीने की रक़म को महीनों से गुणा करने पर असली कुल रक़म पता चलती है।",
            "a": true
          },
          {
            "q": "महीने की छोटी रक़म का मतलब है कि चीज़ सस्ती है।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "एक साइकिल 24,000 रुपये की है। EMI 12 महीने तक 2,100 रुपये है। कुल कितना चुकाना पड़ेगा?",
            "opts": [
              "25,200",
              "24,000",
              "21,000"
            ],
            "a": 0
          },
          {
            "q": "हर महीने 500 रुपये बचाए जाएँ, तो 6,000 रुपये बचाने में कितने महीने लगेंगे?",
            "opts": [
              "6",
              "12",
              "10"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि EMI पर हाँ कहने से पहले गुणा करूँग[[ा|ी]], अतिरिक्त ख़र्च के बारे में पूछूँग[[ा|ी]], और जो चाहिए उसके लिए पहले बचाऊँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "EMI म्हणजे एखादी वस्तू छोट्या मासिक हिश्श्यांत फेडणं, पण एकूण रक्कम किमतीपेक्षा जास्त असू शकते.",
          "एकूण खर्च = महिन्याची रक्कम × महिन्यांची संख्या. ती किमतीशी ताडून पाहा.",
          "हो म्हणण्याआधी फी, व्याज आणि दंडाबद्दल विचार. \"नो-कॉस्ट EMI\" मध्येही खर्च लपलेला असू शकतो.",
          "आधी बचत करून रोख देणं अनेकदा स्वस्त पडतं आणि दर महिन्याच्या हप्त्यांपासून सुटका देतं."
        ],
        "fill": {
          "bank": [
            "EMI",
            "एकूण",
            "जास्त",
            "महिन्यांची",
            "व्याज",
            "बचत"
          ],
          "items": [
            [
              "छोट्या मासिक हिश्श्यांत फेडण्याला @@ म्हणतात.",
              "EMI"
            ],
            [
              "1,100 × 12 महिने = 13,200 रुपये, ही @@ रक्कम फेडावी लागते.",
              "एकूण"
            ],
            [
              "13,200 − 12,000 = 1,200 रुपये @@ द्यावे लागले.",
              "जास्त"
            ],
            [
              "हो म्हणण्याआधी @@ संख्या मोजून गुणाकार कर.",
              "महिन्यांची"
            ],
            [
              "आधी बचत करून स्वतःच्या पैशांनी घेतलं तर @@ द्यावं लागत नाही.",
              "व्याज"
            ]
          ]
        },
        "sortTitle": "स्वस्त की जास्त महाग?",
        "sortOpts": [
          {
            "k": "less",
            "t": "स्वस्त"
          },
          {
            "k": "more",
            "t": "जास्त महाग"
          }
        ],
        "sort": [
          {
            "icon": "jar",
            "label": "बारा महिने बचत करून रोख देणं",
            "a": "less"
          },
          {
            "icon": "calendar",
            "label": "जादा शुल्कासह बारा मासिक हप्त्यांत देणं",
            "a": "more"
          },
          {
            "icon": "tag",
            "label": "स्वतःच्या बचतीतून सेलमध्ये घेणं",
            "a": "less"
          },
          {
            "icon": "card",
            "label": "क्रेडिट कार्ड वापरून फक्त किमान रक्कम भरणं",
            "a": "more"
          },
          {
            "icon": "phone",
            "label": "बचतीत बसणारा फोन निवडणं",
            "a": "less"
          }
        ],
        "tf": [
          {
            "q": "EMI मध्ये नेहमी दुकानाची किंमतच फेडावी लागते.",
            "a": false
          },
          {
            "q": "महिन्याची रक्कम महिन्यांनी गुणली की खरी एकूण रक्कम कळते.",
            "a": true
          },
          {
            "q": "महिन्याची छोटी रक्कम म्हणजे वस्तू स्वस्त असते.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "एका सायकलची किंमत 24,000 रुपये आहे. EMI 12 महिने 2,100 रुपये आहे. एकूण किती भरावे लागतील?",
            "opts": [
              "25,200",
              "24,000",
              "21,000"
            ],
            "a": 0
          },
          {
            "q": "दर महिन्याला 500 रुपये वाचवले, तर 6,000 रुपये वाचवायला किती महिने लागतील?",
            "opts": [
              "6",
              "12",
              "10"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की EMI ला हो म्हणण्याआधी गुणाकार करीन, जादा खर्चाबद्दल विचारीन, आणि हवं असलेल्या गोष्टींसाठी आधी बचत करीन."
      }
    }
  },
  {
    "slug": "too-good-sale",
    "status": "live",
    "color": "#f4a9a8",
    "title": {
      "en": "{name} and the Too-Good Sale",
      "hi": "{name} और हद से ज़्यादा अच्छी सेल",
      "mr": "{name} आणि खूपच भारी सेल"
    },
    "cardTitle": {
      "en": "The Too-Good Sale",
      "hi": "हद से ज़्यादा अच्छी सेल",
      "mr": "खूपच भारी सेल"
    },
    "subtitle": {
      "en": "Spotting fake online offers",
      "hi": "नक़ली ऑनलाइन ऑफ़र पहचानो",
      "mr": "फसवे ऑनलाइन ऑफर ओळखा"
    },
    "topic": {
      "en": "Online shopping traps",
      "hi": "ऑनलाइन ख़रीदारी के जाल",
      "mr": "ऑनलाइन खरेदीची जाळी"
    },
    "stops": {
      "en": [
        "The Big Ad",
        "Ask a Grown-up",
        "Check Three Things",
        "Pay on Delivery"
      ],
      "hi": [
        "बड़ा विज्ञापन",
        "बड़े से पूछो",
        "तीन बातें जाँचो",
        "डिलीवरी पर भुगतान"
      ],
      "mr": [
        "मोठी जाहिरात",
        "मोठ्यांना विचार",
        "तीन गोष्टी तपास",
        "डिलिव्हरीवर पेमेंट"
      ]
    },
    "scenes": [
      "A huge phone shows a football with a 90 percent off tag and 99 rupees while you stare in shock.",
      "You ask Aaji about the message, a big question mark hangs above, and Aaji holds a magnifying glass.",
      "On the green board, a lock, a magnifying glass and a shield each have a green tick.",
      "A delivery person hands you a parcel while you pay, as a shield glows and a fox runs away."
    ],
    "story": {
      "en": [
        "Late one evening a bright message popped up on Aaji's phone: \"Football for 99 rupees! 90 percent off! Only 10 left!\" Your eyes grew wide. The same football cost 1,000 rupees in the shop. \"Quick, buy it now!\" you said. But Gullu rolled in front of the screen. \"Hold on, {name}. If something is 90 percent cheaper than everywhere else, ask: how can they make money? A hook with a juicy tag might be hiding a fox.\"",
        "You showed the message to Aaji. \"Never rush,\" she said. \"Fake sales hurry you with 'only 10 left' and 'ends in 5 minutes'. They want you to click before you think.\" She even fetched her reading magnifier to read the tiny words. Gullu laughed. \"Let us look closely, then. A grown-up should always be part of any online buying.\"",
        "On the blackboard, Gullu and you made a checklist of three things. One: the lock. Does the page address start with https and show the right name, with no spelling tricks? Two: the magnifier. Do other buyers have honest reviews, a return policy and a way to contact the seller? Three: the shield. Is it a known, trusted shop or app, opened from its official place and not from a message link, with a safe way to pay?",
        "The next week, you really needed a new football. With Aaji, you ordered from a trusted shop's official app and chose \"pay on delivery\". When the delivery person arrived, you checked the name and the parcel, then paid. Far away, a fox ran off with a long face. Gullu said, \"A real bargain does not rush you, does not ask for an OTP or PIN, and does not have to hide. Too good to be true usually is.\""
      ],
      "hi": [
        "एक देर शाम दादी के फ़ोन पर चमकता संदेश आया: \"फ़ुटबॉल सिर्फ़ 99 रुपये में! 90 प्रतिशत छूट! बस 10 बचे हैं!\" तुम्हारी आँखें फैल गईं। वही फ़ुटबॉल दुकान में 1,000 रुपये का था। \"जल्दी, अभी ख़रीद लो!\" तुमने कहा। पर गुल्लू स्क्रीन के सामने लुढ़क आया। \"रुको {name}। जो चीज़ बाक़ी सब जगह से 90 प्रतिशत सस्ती हो, तो पूछो: वे कमाएँगे कैसे? रसीले टैग वाले काँटे के पीछे लोमड़ी छिपी हो सकती है।\"",
        "तुमने संदेश दादी को दिखाया। \"कभी जल्दबाज़ी मत करो,\" उन्होंने कहा। \"नक़ली सेल 'बस 10 बचे' और '5 मिनट में ख़त्म' कहकर जल्दी मचाती हैं। वे चाहती हैं कि तुम सोचने से पहले क्लिक कर दो।\" वे तो अपना पढ़ने वाला शीशा भी ले आईं ताकि छोटे अक्षर पढ़ सकें। गुल्लू हँस पड़ा। \"तो ग़ौर से देखते हैं। ऑनलाइन ख़रीद में कोई बड़ा हमेशा साथ होना चाहिए।\"",
        "ब्लैकबोर्ड पर गुल्लू और तुमने तीन बातों की सूची बनाई। एक: ताला। पेज का पता https से शुरू होता है और नाम सही लिखा है, कोई स्पेलिंग की चालाकी नहीं? दो: ग़ौर से देखना। दूसरे ख़रीदारों की ईमानदार समीक्षाएँ, वापसी की नीति और विक्रेता से संपर्क का तरीक़ा है? तीन: ढाल। क्या यह जानी-पहचानी, भरोसेमंद दुकान या ऐप है, जिसे उसकी आधिकारिक जगह से खोला गया है, किसी संदेश के लिंक से नहीं, और भुगतान का सुरक्षित तरीक़ा है?",
        "अगले हफ़्ते तुम्हें सचमुच नया फ़ुटबॉल चाहिए था। दादी के साथ तुमने एक भरोसेमंद दुकान के आधिकारिक ऐप से ऑर्डर किया और \"डिलीवरी पर भुगतान\" चुना। डिलीवरी वाले के आने पर तुमने नाम और पार्सल जाँचा, फिर पैसे दिए। दूर कहीं एक लोमड़ी मुँह लटकाए भाग गई। गुल्लू बोला, \"असली सौदा जल्दी नहीं मचाता, OTP या पिन नहीं माँगता, और उसे छिपना नहीं पड़ता। हद से ज़्यादा अच्छी चीज़ अक्सर सच नहीं होती।\""
      ],
      "mr": [
        "एका उशिरा संध्याकाळी आजीच्या फोनवर एक झळकता मेसेज आला: \"फुटबॉल फक्त 99 रुपयांत! 90 टक्के सूट! फक्त 10 उरले!\" तुझे डोळे विस्फारले. तोच फुटबॉल दुकानात 1,000 रुपयांना होता. \"लवकर, आत्ताच घे!\" तू म्हणाल[[ास|ीस]]. पण गल्लू स्क्रीनसमोर घरंगळत आला. \"थांब {name}. जी गोष्ट बाकी सगळीकडून 90 टक्के स्वस्त असते, तेव्हा विचार: ते कमावणार कसे? रसरशीत टॅग असलेल्या गळाच्या मागे कोल्हा लपलेला असू शकतो.\"",
        "तू मेसेज आजीला दाखवलास. \"कधीही घाई करू नकोस,\" आजी म्हणाल्या. \"बनावट सेल 'फक्त 10 उरले' आणि '5 मिनिटांत संपणार' म्हणून घाई करवतात. तू विचार करण्याआधी क्लिक करावंस असं त्यांना वाटतं.\" त्यांनी तर वाचायचं भिंगही आणलं, म्हणजे लहान अक्षरं वाचता येतील. गल्लू हसला. \"मग नीट बघू या. ऑनलाइन खरेदीत एखादी मोठी व्यक्ती नेहमी बरोबर असावी.\"",
        "फळ्यावर गल्लूने आणि तू मिळून तीन गोष्टींची यादी केली. एक: कुलूप. पानाचा पत्ता https ने सुरू होतो आणि नाव बरोबर लिहिलं आहे, स्पेलिंगची काही चलाखी नाही ना? दोन: भिंग. इतर खरेदीदारांचे प्रामाणिक रिव्ह्यू, परताव्याचं धोरण आणि विक्रेत्याशी संपर्काचा मार्ग आहे का? तीन: ढाल. हे ओळखीचं, भरवशाचं दुकान किंवा अॅप आहे का, जे त्यांच्या अधिकृत जागेवरून उघडलं आहे, मेसेजच्या लिंकवरून नाही, आणि पैसे द्यायचा सुरक्षित मार्ग आहे का?",
        "पुढच्या आठवड्यात तुला खरंच नवा फुटबॉल हवा होता. आजीबरोबर तू भरवशाच्या दुकानाच्या अधिकृत अॅपवरून ऑर्डर दिलीस आणि \"डिलिव्हरीवर पेमेंट\" निवडलंस. डिलिव्हरीवाला आल्यावर तू नाव आणि पार्सल तपासलंस, मग पैसे दिलेस. दूर कुठे तरी एक कोल्हा तोंड पाडून पळाला. गल्लू म्हणाला, \"खरा सौदा घाई करत नाही, OTP किंवा पिन मागत नाही, आणि त्याला लपावं लागत नाही. खूपच चांगलं वाटणारं बहुतेक खरं नसतं.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A deal that is far cheaper than everywhere else may be a trap.",
          "Fake sales hurry you with words like \"only 10 left\". Slow down.",
          "Check three things: the https address, honest reviews and return policy, and a trusted shop or app.",
          "Never share an OTP or PIN, and ask a grown-up before buying online. Pay on delivery when you can."
        ],
        "fill": {
          "bank": [
            "trap",
            "hurry",
            "https",
            "reviews",
            "OTP",
            "grown-up"
          ],
          "items": [
            [
              "A price that is far too low can be a @@.",
              "trap"
            ],
            [
              "Fake sales try to @@ you so you cannot think.",
              "hurry"
            ],
            [
              "A safe page address starts with @@.",
              "https"
            ],
            [
              "Check honest @@ and the return policy.",
              "reviews"
            ],
            [
              "Never tell anyone your @@ or PIN.",
              "OTP"
            ]
          ]
        },
        "sortTitle": "Safe or risky?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "Safe"
          },
          {
            "k": "risk",
            "t": "Risky"
          }
        ],
        "sort": [
          {
            "icon": "shield",
            "label": "Buying from a trusted shop's official app",
            "a": "safe"
          },
          {
            "icon": "tag",
            "label": "A \"90% off, only 5 minutes left\" message",
            "a": "risk"
          },
          {
            "icon": "parcel",
            "label": "Paying on delivery after checking the parcel",
            "a": "safe"
          },
          {
            "icon": "otp",
            "label": "Sending your OTP to claim a prize",
            "a": "risk"
          },
          {
            "icon": "magnifier",
            "label": "Reading reviews and the return policy first",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "A price 90 percent lower than everywhere else is always a lucky chance.",
            "a": false
          },
          {
            "q": "Fake sales use hurry words like \"only 10 left\".",
            "a": true
          },
          {
            "q": "You should ask a grown-up before buying online.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "A football costs 1,000 rupees in the shop. If an ad says 90 percent off, how much would you pay?",
            "opts": [
              "100",
              "900",
              "10"
            ],
            "a": 0
          },
          {
            "q": "A message says: \"Pay a 200 rupee fee first to get a free phone.\" What should you do?",
            "opts": [
              "Pay quickly",
              "Ignore it and tell a grown-up",
              "Pay half"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to slow down when a deal hurries me, to check the three things, and to ask a grown-up before I buy online."
      },
      "hi": {
        "remember": [
          "जो सौदा बाक़ी सब जगह से बहुत सस्ता हो, वह जाल हो सकता है।",
          "नक़ली सेल \"बस 10 बचे\" जैसे शब्दों से जल्दी मचाती हैं। धीमे चलो।",
          "तीन बातें जाँचो: https वाला पता, ईमानदार समीक्षाएँ और वापसी की नीति, और भरोसेमंद दुकान या ऐप।",
          "OTP या पिन कभी मत बताओ और ऑनलाइन ख़रीद से पहले किसी बड़े से पूछो। हो सके तो डिलीवरी पर भुगतान करो।"
        ],
        "fill": {
          "bank": [
            "जाल",
            "जल्दी",
            "https",
            "समीक्षाएँ",
            "OTP",
            "बड़े"
          ],
          "items": [
            [
              "बहुत ही कम क़ीमत एक @@ हो सकती है।",
              "जाल"
            ],
            [
              "नक़ली सेल लोगों को @@ में डालती है ताकि वे सोच न सकें।",
              "जल्दी"
            ],
            [
              "सुरक्षित पेज का पता @@ से शुरू होता है।",
              "https"
            ],
            [
              "ईमानदार @@ और वापसी की नीति जाँचो।",
              "समीक्षाएँ"
            ],
            [
              "अपना @@ या पिन किसी को कभी मत बताओ।",
              "OTP"
            ]
          ]
        },
        "sortTitle": "सुरक्षित या जोखिम भरा?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "सुरक्षित"
          },
          {
            "k": "risk",
            "t": "जोखिम भरा"
          }
        ],
        "sort": [
          {
            "icon": "shield",
            "label": "भरोसेमंद दुकान के आधिकारिक ऐप से ख़रीदना",
            "a": "safe"
          },
          {
            "icon": "tag",
            "label": "\"90% छूट, बस 5 मिनट बाक़ी\" वाला संदेश",
            "a": "risk"
          },
          {
            "icon": "parcel",
            "label": "पार्सल जाँचकर डिलीवरी पर भुगतान करना",
            "a": "safe"
          },
          {
            "icon": "otp",
            "label": "इनाम लेने के लिए OTP भेजना",
            "a": "risk"
          },
          {
            "icon": "magnifier",
            "label": "पहले समीक्षाएँ और वापसी की नीति पढ़ना",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "बाक़ी सब जगह से 90 प्रतिशत कम क़ीमत हमेशा क़िस्मत की बात होती है।",
            "a": false
          },
          {
            "q": "नक़ली सेल \"बस 10 बचे\" जैसे जल्दी वाले शब्द इस्तेमाल करती हैं।",
            "a": true
          },
          {
            "q": "ऑनलाइन ख़रीद से पहले किसी बड़े से पूछना चाहिए।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "फ़ुटबॉल दुकान में 1,000 रुपये का है। 90 प्रतिशत छूट का मतलब है कि कितने रुपये देने पड़ेंगे?",
            "opts": [
              "100",
              "900",
              "10"
            ],
            "a": 0
          },
          {
            "q": "एक संदेश कहता है: \"मुफ़्त फ़ोन पाने के लिए पहले 200 रुपये फ़ीस दो।\" क्या करना चाहिए?",
            "opts": [
              "जल्दी से दे देना",
              "अनदेखा करना और बड़े को बताना",
              "आधी फ़ीस देना"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि जब कोई सौदा जल्दी मचाए तो धीरे चलूँग[[ा|ी]], तीन बातें जाँचूँग[[ा|ी]], और ऑनलाइन ख़रीदने से पहले किसी बड़े से पूछूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "बाकी सगळीकडून खूपच स्वस्त असलेला सौदा सापळा असू शकतो.",
          "बनावट सेल \"फक्त 10 उरले\" अशा शब्दांनी घाई करवतात. सावकाश हो.",
          "तीन गोष्टी तपास: https असलेला पत्ता, प्रामाणिक रिव्ह्यू आणि परताव्याचं धोरण, आणि भरवशाचं दुकान किंवा अॅप.",
          "OTP किंवा पिन कधीही सांगू नकोस आणि ऑनलाइन खरेदीआधी मोठ्याला विचार. शक्य असेल तर डिलिव्हरीवर पेमेंट कर."
        ],
        "fill": {
          "bank": [
            "सापळा",
            "घाई",
            "https",
            "रिव्ह्यू",
            "OTP",
            "मोठ्या"
          ],
          "items": [
            [
              "खूपच कमी किंमत हा एक @@ असू शकतो.",
              "सापळा"
            ],
            [
              "बनावट सेल लोकांना @@ करायला लावतात, म्हणजे त्यांना विचार करता येत नाही.",
              "घाई"
            ],
            [
              "सुरक्षित पानाचा पत्ता @@ ने सुरू होतो.",
              "https"
            ],
            [
              "प्रामाणिक @@ आणि परताव्याचं धोरण तपास.",
              "रिव्ह्यू"
            ],
            [
              "तुझा @@ किंवा पिन कोणालाही कधी सांगू नकोस.",
              "OTP"
            ]
          ]
        },
        "sortTitle": "सुरक्षित की धोकादायक?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "सुरक्षित"
          },
          {
            "k": "risk",
            "t": "धोकादायक"
          }
        ],
        "sort": [
          {
            "icon": "shield",
            "label": "भरवशाच्या दुकानाच्या अधिकृत अॅपवरून घेणं",
            "a": "safe"
          },
          {
            "icon": "tag",
            "label": "\"90% सूट, फक्त 5 मिनिटं बाकी\" असा मेसेज",
            "a": "risk"
          },
          {
            "icon": "parcel",
            "label": "पार्सल तपासून डिलिव्हरीवर पेमेंट करणं",
            "a": "safe"
          },
          {
            "icon": "otp",
            "label": "बक्षीस मिळवायला OTP पाठवणं",
            "a": "risk"
          },
          {
            "icon": "magnifier",
            "label": "आधी रिव्ह्यू आणि परताव्याचं धोरण वाचणं",
            "a": "safe"
          }
        ],
        "tf": [
          {
            "q": "बाकी सगळीकडून 90 टक्के कमी किंमत ही नेहमी नशिबाची गोष्ट असते.",
            "a": false
          },
          {
            "q": "बनावट सेल \"फक्त 10 उरले\" असे घाईचे शब्द वापरतात.",
            "a": true
          },
          {
            "q": "ऑनलाइन खरेदीआधी मोठ्या व्यक्तीला विचारावं.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "फुटबॉल दुकानात 1,000 रुपयांना आहे. 90 टक्के सूट म्हणजे किती रुपये द्यावे लागतील?",
            "opts": [
              "100",
              "900",
              "10"
            ],
            "a": 0
          },
          {
            "q": "एक मेसेज म्हणतो: \"मोफत फोन मिळवायला आधी 200 रुपये फी भरा.\" काय करावं?",
            "opts": [
              "लगेच भरून टाकावी",
              "दुर्लक्ष करून मोठ्याला सांगावं",
              "निम्मी फी भरावी"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की सौदा घाई करवू लागला की सावकाश होईन, तीन गोष्टी तपासेन, आणि ऑनलाइन घेण्याआधी मोठ्याला विचारीन."
      }
    }
  },
  {
    "slug": "safe-place",
    "status": "live",
    "color": "#9bf6ff",
    "title": {
      "en": "{name} and the Safe Place",
      "hi": "{name} और पैसों की सुरक्षित जगह",
      "mr": "{name} आणि पैशांची सुरक्षित जागा"
    },
    "cardTitle": {
      "en": "The Safe Place",
      "hi": "पैसों की सुरक्षित जगह",
      "mr": "पैशांची सुरक्षित जागा"
    },
    "subtitle": {
      "en": "Where should you keep your savings?",
      "hi": "बचत कहाँ रखें?",
      "mr": "बचत कुठे ठेवावी?"
    },
    "topic": {
      "en": "Safe saving places",
      "hi": "बचत की सुरक्षित जगह",
      "mr": "बचतीची सुरक्षित जागा"
    },
    "stops": {
      "en": [
        "The Cupboard",
        "The Three Questions",
        "The Fox in the Bush",
        "The Coin Tree"
      ],
      "hi": [
        "अलमारी",
        "तीन सवाल",
        "झाड़ी में लोमड़ी",
        "सिक्कों का पेड़"
      ],
      "mr": [
        "कपाट",
        "तीन प्रश्न",
        "झुडपातला कोल्हा",
        "नाण्यांचं झाड"
      ]
    },
    "scenes": [
      "A little mouse nibbles a note in Aaji's open cupboard while you look worried and Aaji frowns.",
      "Meena Didi at the bank counter shows a passbook, with a clock and a shield on the wall.",
      "A fox in a bush shows a speech bubble promising to turn 1,000 rupees into 2,000 while you hold up a hand to say no.",
      "You hold your passbook high under a tree full of golden coins, with a bank in the background."
    ],
    "story": {
      "en": [
        "Aaji kept her savings in an old cupboard, tucked between her sarees. One day you opened the door and saw a little grey mouse nibbling the corner of a note! Squeak! The mouse ran away, but the note had a hole in it. \"Oh dear,\" said Aaji. Gullu looked worried. \"Is a cupboard really a safe place for money, {name}? Cash at home can be lost, stolen, burnt or chewed.\"",
        "Aaji took you to the bank. Meena Didi showed you a green passbook and a poster with three questions. \"Before you keep your savings anywhere, ask: Is it safe? Is it easy to reach when I need it? Can it grow?\" In a bank account, your money is looked after, you can take it out when needed, and it earns a little interest. Meena Didi added that deposits are insured up to a limit, which is 5,00,000 rupees per person in each bank at the time of writing.",
        "On the way home, a fox popped out of a bush. \"Psst! Give me 1,000 rupees today and you will get 2,000 next week!\" Your heart jumped. \"Double money in one week?\" Gullu pulled you back. \"{name}, real money never doubles that fast. A promise that sounds too good to be true is a warning sign. Walk away and tell a grown-up.\"",
        "Years went by. Every month you added a little to your bank account, and the small interest added a little more. One day you stood under the coin tree with your passbook held high. \"Look how it grew!\" Gullu smiled. \"Slowly, safely, and because you were patient. Keep some money easy to reach for emergencies, and let the rest grow.\""
      ],
      "hi": [
        "दादी अपनी बचत पुरानी अलमारी में साड़ियों के बीच रखती थीं। एक दिन तुमने दरवाज़ा खोला तो देखा कि एक छोटा-सा स्लेटी चूहा नोट का कोना कुतर रहा है! चूँ! चूहा भाग गया, पर नोट में छेद हो गया था। \"अरे बाप रे,\" दादी बोलीं। गुल्लू चिंतित दिखा। \"क्या अलमारी सच में पैसों के लिए सुरक्षित जगह है, {name}? घर में रखा नक़द खो सकता है, चोरी हो सकता है, जल सकता है या कुतरा जा सकता है।\"",
        "दादी तुम्हें बैंक ले गईं। मीना दीदी ने हरी पासबुक दिखाई और तीन सवालों वाला पोस्टर भी। \"अपनी बचत कहीं भी रखने से पहले पूछो: क्या यह सुरक्षित है? ज़रूरत पड़ने पर क्या आसानी से मिल जाएगी? क्या यह बढ़ सकती है?\" बैंक खाते में पैसों की देखभाल होती है, ज़रूरत पर निकाल भी सकते हैं, और थोड़ा ब्याज भी मिलता है। मीना दीदी ने बताया कि जमा रक़म एक सीमा तक बीमित होती है, जो लिखते समय हर बैंक में हर व्यक्ति के लिए 5,00,000 रुपये है।",
        "घर लौटते समय एक झाड़ी से एक चालाक लोमड़ी निकल आई। \"सुनो! आज मुझे हज़ार रुपये दो, अगले हफ़्ते तुम्हें दो हज़ार मिलेंगे!\" तुम्हारा दिल उछल पड़ा। \"एक हफ़्ते में दुगुना पैसा?\" गुल्लू ने तुम्हें पीछे खींचा। \"{name}, असली पैसा इतनी जल्दी दुगुना नहीं होता। जो वादा हद से ज़्यादा अच्छा लगे, वह ख़तरे की घंटी है। दूर हटो और किसी बड़े को बताओ।\"",
        "साल बीतते गए। हर महीने तुमने अपने बैंक खाते में थोड़ा-थोड़ा जमा किया और छोटे ब्याज ने थोड़ा और जोड़ा। एक दिन तुम पासबुक ऊँची उठाए सिक्कों वाले पेड़ के नीचे खड़[[े|ी]] थ[[े|ीं]]। \"देखो कितना बढ़ गया!\" गुल्लू मुस्कुराया। \"धीरे-धीरे, सुरक्षित तरीक़े से, और इसलिए कि तुमने सब्र रखा। कुछ पैसे आपात स्थिति के लिए आसानी से निकल सकने लायक़ रखो, बाक़ी को बढ़ने दो।\""
      ],
      "mr": [
        "आजी आपली बचत जुन्या कपाटात, साड्यांच्या घड्यांमध्ये ठेवायच्या. एके दिवशी तू दार उघडलंस तर काय, एक छोटा राखाडी उंदीर नोटेचा कोपरा कुरतडत होता! चीं! उंदीर पळाला, पण नोटेला भोक पडलं होतं. \"अरेरे,\" आजी म्हणाल्या. गल्लू काळजीत दिसला. \"कपाट खरंच पैशांसाठी सुरक्षित जागा आहे का, {name}? घरात ठेवलेली रोकड हरवू शकते, चोरीला जाऊ शकते, जळू शकते किंवा कुरतडली जाऊ शकते.\"",
        "आजी तुला बँकेत घेऊन गेल्या. मीना ताईंनी हिरवं पासबुक दाखवलं आणि तीन प्रश्नांचं पोस्टरही. \"तुझी बचत कुठेही ठेवण्याआधी विचार: ती सुरक्षित आहे का? गरज पडल्यावर सहज मिळेल का? ती वाढू शकते का?\" बँक खात्यात पैशांची काळजी घेतली जाते, गरज असेल तेव्हा काढताही येतात, आणि थोडं व्याजही मिळतं. मीना ताईंनी सांगितलं की जमा रक्कम एका मर्यादेपर्यंत विमा संरक्षित असते, जी लिहिताना प्रत्येक बँकेत प्रत्येक व्यक्तीसाठी 5,00,000 रुपये आहे.",
        "घरी परतताना एका झुडपातून एक कोल्हा बाहेर आला. \"ए, ऐक! आज मला हजार रुपये दे, पुढच्या आठवड्यात तुला दोन हजार मिळतील!\" तुझं काळीज उडालं. \"एका आठवड्यात दुप्पट पैसे?\" गल्लूने तुला मागे ओढलं. \"{name}, खरे पैसे एवढ्या लवकर दुप्पट होत नाहीत. जे वचन खूपच छान वाटतं ते धोक्याची घंटा असते. दूर हो आणि कोणा मोठ्याला सांग.\"",
        "वर्षं सरली. दर महिन्याला तू तुझ्या बँक खात्यात थोडी भर घातलीस आणि छोट्या व्याजाने आणखी थोडी भर घातली. एके दिवशी तू पासबुक उंच धरून नाण्यांच्या झाडाखाली उभ[[ा|ी]] राहिल[[ास|ीस]]. \"बघ किती वाढलं!\" गल्लू हसला. \"हळूहळू, सुरक्षितपणे आणि तू संयम ठेवलास म्हणून. थोडे पैसे आणीबाणीसाठी सहज काढता येतील असे ठेव, बाकीचे वाढू दे.\""
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "Ask three questions: Is it safe? Is it easy to reach? Can it grow?",
          "Cash kept at home can be lost, stolen, burnt or chewed by mice.",
          "A promise to double your money fast is a warning sign.",
          "Keep some savings easy to reach for emergencies, and let the rest grow slowly."
        ],
        "fill": {
          "bank": [
            "safe",
            "reach",
            "grow",
            "bank",
            "warning",
            "slowly"
          ],
          "items": [
            [
              "The first question: is my money @@?",
              "safe"
            ],
            [
              "The second question: is it easy to @@ when I need it?",
              "reach"
            ],
            [
              "The third question: can it @@?",
              "grow"
            ],
            [
              "Savings in a @@ account are safer than cash in a cupboard.",
              "bank"
            ],
            [
              "A promise to double your money in a week is a @@ sign.",
              "warning"
            ]
          ]
        },
        "sortTitle": "Which question does it answer?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "Safe"
          },
          {
            "k": "reach",
            "t": "Easy to reach"
          },
          {
            "k": "grow",
            "t": "Can grow"
          },
          {
            "k": "warn",
            "t": "Warning sign"
          }
        ],
        "sort": [
          {
            "icon": "shield",
            "label": "A bank looks after and protects your savings",
            "a": "safe"
          },
          {
            "icon": "clock",
            "label": "You can take money out when there is an emergency",
            "a": "reach"
          },
          {
            "icon": "tree",
            "label": "Interest adds a little more each year",
            "a": "grow"
          },
          {
            "icon": "fox",
            "label": "\"Give 1,000 today and get 2,000 next week!\"",
            "a": "warn"
          },
          {
            "icon": "cupboard",
            "label": "Cash lying loose in a cupboard where mice and thieves can reach",
            "a": "warn"
          }
        ],
        "tf": [
          {
            "q": "If someone promises to double your money in a week, you should trust them.",
            "a": false
          },
          {
            "q": "A bank account is usually safer than a lot of cash at home.",
            "a": true
          },
          {
            "q": "Savings can grow a little with interest if you are patient.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "You keep 500 rupees in a bank and it earns 20 rupees of interest in a year. How much do you have after a year?",
            "opts": [
              "520",
              "480",
              "700"
            ],
            "a": 0
          },
          {
            "q": "A stranger says: give 5,000 rupees today and get 10,000 next week. What should you do?",
            "opts": [
              "Give it quickly",
              "Say no and tell a grown-up",
              "Give half"
            ],
            "a": 1
          }
        ],
        "promise": "I, {name}, promise to ask the three questions about my savings, to choose safe places, and to walk away from \"double money\" promises."
      },
      "hi": {
        "remember": [
          "तीन सवाल पूछो: क्या यह सुरक्षित है? क्या आसानी से मिल जाएगा? क्या यह बढ़ सकता है?",
          "घर में रखा नक़द खो सकता है, चोरी हो सकता है, जल सकता है या चूहे कुतर सकते हैं।",
          "पैसा जल्दी दुगुना करने का वादा ख़तरे की घंटी है।",
          "कुछ बचत ज़रूरत पर निकालने लायक़ रखो और बाक़ी को धीरे-धीरे बढ़ने दो।"
        ],
        "fill": {
          "bank": [
            "सुरक्षित",
            "पहुँच",
            "बढ़",
            "बैंक",
            "ख़तरे",
            "धीरे-धीरे"
          ],
          "items": [
            [
              "पहला सवाल: क्या मेरा पैसा @@ है?",
              "सुरक्षित"
            ],
            [
              "दूसरा सवाल: ज़रूरत पर क्या उस तक @@ आसान है?",
              "पहुँच"
            ],
            [
              "तीसरा सवाल: क्या वह @@ सकता है?",
              "बढ़"
            ],
            [
              "अलमारी के नक़द से @@ खाते की बचत ज़्यादा सुरक्षित है।",
              "बैंक"
            ],
            [
              "एक हफ़्ते में पैसा दुगुना करने का वादा @@ का संकेत है।",
              "ख़तरे"
            ]
          ]
        },
        "sortTitle": "यह किस सवाल का जवाब है?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "सुरक्षित"
          },
          {
            "k": "reach",
            "t": "आसानी से मिले"
          },
          {
            "k": "grow",
            "t": "बढ़ सकता है"
          },
          {
            "k": "warn",
            "t": "ख़तरे का संकेत"
          }
        ],
        "sort": [
          {
            "icon": "shield",
            "label": "बैंक तुम्हारी बचत की देखभाल और हिफ़ाज़त करता है",
            "a": "safe"
          },
          {
            "icon": "clock",
            "label": "आपात स्थिति में पैसे निकाले जा सकते हैं",
            "a": "reach"
          },
          {
            "icon": "tree",
            "label": "ब्याज हर साल थोड़ा और जोड़ता है",
            "a": "grow"
          },
          {
            "icon": "fox",
            "label": "\"आज हज़ार दो, अगले हफ़्ते दो हज़ार पाओ!\"",
            "a": "warn"
          },
          {
            "icon": "cupboard",
            "label": "अलमारी में खुला पड़ा नक़द जहाँ चूहे और चोर पहुँच सकते हैं",
            "a": "warn"
          }
        ],
        "tf": [
          {
            "q": "कोई एक हफ़्ते में पैसा दुगुना करने का वादा करे तो उस पर भरोसा करना चाहिए।",
            "a": false
          },
          {
            "q": "घर में ढेर सारे नक़द से बैंक खाता आम तौर पर ज़्यादा सुरक्षित होता है।",
            "a": true
          },
          {
            "q": "सब्र रखो तो ब्याज से बचत थोड़ी बढ़ सकती है।",
            "a": true
          }
        ],
        "think": [
          {
            "q": "तुम 500 रुपये बैंक में रखते हो और साल भर में 20 रुपये ब्याज मिलता है। साल बाद कुल कितने रुपये होंगे?",
            "opts": [
              "520",
              "480",
              "700"
            ],
            "a": 0
          },
          {
            "q": "कोई अजनबी कहता है: आज 5,000 रुपये दो, अगले हफ़्ते 10,000 पाओ। क्या करना चाहिए?",
            "opts": [
              "जल्दी से दे देना",
              "मना करना और बड़े को बताना",
              "आधे दे देना"
            ],
            "a": 1
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अपनी बचत के बारे में तीन सवाल पूछूँग[[ा|ी]], सुरक्षित जगह चुनूँग[[ा|ी]], और \"दुगुना पैसा\" के वादों से दूर रहूँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "तीन प्रश्न विचार: ते सुरक्षित आहे का? सहज मिळेल का? ते वाढू शकतं का?",
          "घरात ठेवलेली रोकड हरवू शकते, चोरीला जाऊ शकते, जळू शकते किंवा उंदीर कुरतडू शकतात.",
          "पैसे लवकर दुप्पट करण्याचं वचन धोक्याची घंटा असते.",
          "थोडी बचत गरजेला काढता येईल अशी ठेव आणि बाकीची हळूहळू वाढू दे."
        ],
        "fill": {
          "bank": [
            "सुरक्षित",
            "पोहोच",
            "वाढू",
            "बँक",
            "धोक्याचं",
            "हळूहळू"
          ],
          "items": [
            [
              "पहिला प्रश्न: माझे पैसे @@ आहेत का?",
              "सुरक्षित"
            ],
            [
              "दुसरा प्रश्न: गरज पडल्यावर त्यांच्यापर्यंत @@ सोपी आहे का?",
              "पोहोच"
            ],
            [
              "तिसरा प्रश्न: ते @@ शकतात का?",
              "वाढू"
            ],
            [
              "कपाटातल्या रोकडीपेक्षा @@ खात्यातली बचत जास्त सुरक्षित असते.",
              "बँक"
            ],
            [
              "एका आठवड्यात पैसे दुप्पट करण्याचं वचन हे @@ लक्षण आहे.",
              "धोक्याचं"
            ]
          ]
        },
        "sortTitle": "हे कोणत्या प्रश्नाचं उत्तर आहे?",
        "sortOpts": [
          {
            "k": "safe",
            "t": "सुरक्षित"
          },
          {
            "k": "reach",
            "t": "सहज मिळतं"
          },
          {
            "k": "grow",
            "t": "वाढू शकतं"
          },
          {
            "k": "warn",
            "t": "धोक्याचं लक्षण"
          }
        ],
        "sort": [
          {
            "icon": "shield",
            "label": "बँक तुझ्या बचतीची काळजी आणि संरक्षण करते",
            "a": "safe"
          },
          {
            "icon": "clock",
            "label": "आणीबाणीच्या वेळी पैसे काढता येतात",
            "a": "reach"
          },
          {
            "icon": "tree",
            "label": "व्याज दरवर्षी थोडं आणखी जोडतं",
            "a": "grow"
          },
          {
            "icon": "fox",
            "label": "\"आज हजार द्या, पुढच्या आठवड्यात दोन हजार मिळवा!\"",
            "a": "warn"
          },
          {
            "icon": "cupboard",
            "label": "कपाटात उघडी पडलेली रोकड जिथं उंदीर आणि चोर पोहोचू शकतात",
            "a": "warn"
          }
        ],
        "tf": [
          {
            "q": "कोणी एका आठवड्यात पैसे दुप्पट करण्याचं वचन दिलं तर त्याच्यावर विश्वास ठेवावा.",
            "a": false
          },
          {
            "q": "घरातल्या भरपूर रोकडीपेक्षा बँक खातं सहसा जास्त सुरक्षित असतं.",
            "a": true
          },
          {
            "q": "संयम ठेवला तर व्याजामुळे बचत थोडी वाढू शकते.",
            "a": true
          }
        ],
        "think": [
          {
            "q": "तू 500 रुपये बँकेत ठेवलेस आणि वर्षभरात 20 रुपये व्याज मिळालं. वर्षानंतर एकूण किती रुपये होतील?",
            "opts": [
              "520",
              "480",
              "700"
            ],
            "a": 0
          },
          {
            "q": "एक अनोळखी माणूस म्हणतो: आज 5,000 रुपये द्या, पुढच्या आठवड्यात 10,000 मिळवा. काय करावं?",
            "opts": [
              "लगेच देऊन टाकावे",
              "नाही म्हणावं आणि मोठ्याला सांगावं",
              "निम्मे द्यावे"
            ],
            "a": 1
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की माझ्या बचतीबद्दल तीन प्रश्न विचारीन, सुरक्षित जागा निवडीन, आणि \"दुप्पट पैसे\"च्या वचनांपासून दूर राहीन."
      }
    }
  },
  {
    "slug": "money-map",
    "status": "live",
    "color": "#b8e0d2",
    "title": {
      "en": "{name} and the Money Map",
      "hi": "{name} और पैसों का नक़्शा",
      "mr": "{name} आणि पैशांचा नकाशा"
    },
    "cardTitle": {
      "en": "The Money Map",
      "hi": "पैसों का नक़्शा",
      "mr": "पैशांचा नकाशा"
    },
    "subtitle": {
      "en": "Putting it all together",
      "hi": "सब कुछ एक साथ जोड़ना",
      "mr": "सगळं एकत्र जोडूया"
    },
    "topic": {
      "en": "Your money plan",
      "hi": "तुम्हारी पैसों की योजना",
      "mr": "तुझी पैशांची योजना"
    },
    "stops": {
      "en": [
        "The Old Trunk",
        "The Map",
        "Five Steps",
        "Your First Step"
      ],
      "hi": [
        "पुराना संदूक",
        "नक़्शा",
        "पाँच क़दम",
        "तुम्हारा पहला क़दम"
      ],
      "mr": [
        "जुनी पेटी",
        "नकाशा",
        "पाच पावलं",
        "तुझं पहिलं पाऊल"
      ]
    },
    "scenes": [
      "You open an old trunk in Aaji's room and find a folded map with a small path drawn across it.",
      "The map spread on the floor with five stops along a winding path, and Gullu sits on one corner.",
      "Aaji, Kaka and Meena Didi each point to a stop on the map while you follow the path with a finger.",
      "You stand at the first stop of the path with a coin in your hand, and Gullu leads the way into the morning sun."
    ],
    "story": {
      "en": [
        "On a rainy afternoon, you and Gullu were poking around in Aaji's old trunk. Under a pile of blankets, you found a folded paper tied with a string. It was a hand-drawn map. \"My money map,\" said Aaji, smiling. \"I drew it when I was your age, and I have followed it ever since.\" Gullu sniffed it. \"Where does it go?\" \"To a life where money works for you, and does not worry you,\" said Aaji.",
        "You spread the map on the floor. A winding path ran across it with five stops. Aaji pointed. \"First, know what money is for, and tell needs from wants. Second, protect yourself: keep emergency money, have insurance, and beware of scams. Third, spend smartly: make a budget, compare prices, and avoid traps like easy EMIs and too-good sales. Fourth, grow your money: save, use a fixed deposit, and start an SIP. Fifth, be a good citizen: pay your taxes and your dues.\"",
        "Kaka leaned in and tapped the third stop. \"I needed to learn about credit scores here.\" Meena Didi tapped the fourth. \"And risk. Remember the egg baskets.\" You counted the stories you had read together and realised each one was a stop on the map. \"So the whole map is like a month of small lessons, one at a time,\" you said. \"Exactly,\" said Aaji. \"Nobody learns it all in a day. But a little every day, and in a month you know the basics.\"",
        "Aaji handed you a pencil. \"Now draw your own map. Where will you start?\" You thought for a moment, then drew a small circle at the first stop and wrote in your head: my emergency jar. Gullu wagged his tail so hard that the map fluttered. \"One coin at a time,\" you said. You picked up the coin from the floor and held it up. The rain had stopped, and the path was waiting."
      ],
      "hi": [
        "एक बरसाती दोपहर तुम और गुल्लू दादी के पुराने संदूक में टटोल रहे थे। कंबलों के ढेर के नीचे तुम्हें डोरी से बँधा एक तह किया काग़ज़ मिला। यह हाथ से बना नक़्शा था। \"मेरा पैसों का नक़्शा,\" दादी ने मुस्कुराकर कहा। \"यह मैंने तुम्हारी उम्र में बनाया था, और तब से इसी पर चली हूँ।\" गुल्लू ने उसे सूँघा। \"यह कहाँ जाता है?\" \"ऐसी ज़िंदगी की ओर जहाँ पैसा तुम्हारे लिए काम करे, तुम्हें परेशान न करे,\" दादी बोलीं।",
        "तुमने नक़्शा फ़र्श पर फैलाया। उस पर एक घुमावदार रास्ता था जिसमें पाँच पड़ाव थे। दादी ने उँगली रखी। \"पहला, जानो कि पैसा किसलिए है, और ज़रूरत व चाहत में फ़र्क़ करो। दूसरा, ख़ुद को बचाओ: आपातकाल के पैसे रखो, बीमा लो, और धोखाधड़ी से सावधान रहो। तीसरा, समझदारी से ख़र्च करो: बजट बनाओ, दाम की तुलना करो, और आसान EMI और हद से ज़्यादा अच्छी सेल जैसे जाल से बचो। चौथा, पैसे बढ़ाओ: बचत करो, फ़िक्स्ड डिपॉज़िट लो, और एसआईपी शुरू करो। पाँचवाँ, अच्छे नागरिक बनो: कर और अपने बकाया चुकाओ।\"",
        "काका झुके और तीसरे पड़ाव पर उँगली रखी। \"यहाँ मुझे क्रेडिट स्कोर के बारे में सीखना था।\" मीना दीदी ने चौथे पर उँगली रखी। \"और जोखिम के बारे में भी। अंडों की टोकरियाँ याद हैं?\" तुमने साथ पढ़ी कहानियाँ गिनीं और समझा कि हर एक नक़्शे का एक पड़ाव है। \"यानी पूरा नक़्शा एक महीने के छोटे-छोटे पाठों जैसा है, एक-एक करके,\" तुमने कहा। \"बिल्कुल,\" दादी बोलीं। \"कोई भी सब कुछ एक दिन में नहीं सीखता। पर रोज़ थोड़ा-थोड़ा, और एक महीने में बुनियादी बातें आ जाती हैं।\"",
        "दादी ने तुम्हें पेंसिल थमाई। \"अब अपना नक़्शा बनाओ। तुम कहाँ से शुरू करोगे?\" तुमने पल भर सोचा, फिर पहले पड़ाव पर एक छोटा गोला बनाया और मन में लिखा: मेरा आपातकाल वाला जार। गुल्लू ने इतनी ज़ोर से दुम हिलाई कि नक़्शा फड़फड़ाने लगा। \"एक-एक सिक्का,\" तुमने कहा। तुमने फ़र्श से सिक्का उठाया और ऊपर किया। बारिश थम चुकी थी और रास्ता इंतज़ार कर रहा था।"
      ],
      "mr": [
        "एका पावसाळी दुपारी तू आणि गल्लू आजीच्या जुन्या पेटीत चाचपडत होतात. ब्लँकेटांच्या ढिगाखाली तुला दोरीने बांधलेला घडी घातलेला कागद सापडला. तो हाताने काढलेला नकाशा होता. \"माझा पैशांचा नकाशा,\" आजी हसून म्हणाली. \"तुझ्या वयाची असताना मी हा काढला, आणि तेव्हापासून याच वाटेने चालले.\" गल्लूने तो हुंगला. \"हा कुठे जातो?\" \"अशा आयुष्याकडे जिथे पैसा तुझ्यासाठी काम करतो, तुला काळजीत टाकत नाही,\" आजी म्हणाली.",
        "तू नकाशा जमिनीवर पसरलास. त्यावर एक नागमोडी रस्ता होता आणि पाच टप्पे होते. आजीने बोट ठेवलं. \"पहिला, पैसा कशासाठी आहे ते जाणा, आणि गरज व इच्छा यांतला फरक ओळखा. दुसरा, स्वतःला वाचवा: आणीबाणीचे पैसे ठेवा, विमा घ्या, आणि फसवणुकीपासून सावध राहा. तिसरा, शहाणपणाने खर्च करा: बजेट बनवा, किमतींची तुलना करा, आणि सोप्या EMI आणि खूपच भारी सेल अशा जाळ्यांपासून दूर राहा. चौथा, पैसे वाढवा: बचत करा, फिक्स्ड डिपॉझिट घ्या, आणि एसआयपी सुरू करा. पाचवा, चांगले नागरिक व्हा: कर आणि आपली देणी भरा.\"",
        "काका पुढे झुकले आणि तिसऱ्या टप्प्यावर बोट ठेवलं. \"इथे मला क्रेडिट स्कोअरबद्दल शिकायचं होतं.\" मीना ताईंनी चौथ्यावर बोट ठेवलं. \"आणि जोखमीबद्दलही. अंड्यांच्या टोपल्या आठवतात ना?\" तू एकत्र वाचलेल्या गोष्टी मोजल्यास आणि लक्षात आलं की प्रत्येक गोष्ट म्हणजे नकाशावरचा एक टप्पा आहे. \"म्हणजे संपूर्ण नकाशा म्हणजे महिनाभराचे छोटे छोटे धडे, एकेक करून,\" तू म्हणालास. \"अगदी बरोबर,\" आजी म्हणाली. \"कोणीही सगळं एका दिवसात शिकत नाही. पण रोज थोडं थोडं, आणि महिन्याभरात मूलभूत गोष्टी येतात.\"",
        "आजीने तुझ्या हातात पेन्सिल दिली. \"आता तुझा स्वतःचा नकाशा काढ. तू कुठून सुरुवात करशील?\" तू क्षणभर विचार केलास, मग पहिल्या टप्प्यावर एक छोटं वर्तुळ काढलंस आणि मनात लिहिलंस: माझी आणीबाणीची बरणी. गल्लूने इतक्या जोरात शेपटी हलवली की नकाशा फडफडला. \"एकेक नाणं,\" तू म्हणालास. तू जमिनीवरचं नाणं उचललंस आणि वर धरलंस. पाऊस थांबला होता आणि वाट वाट पाहत होती."
      ]
    },
    "recap": {
      "en": {
        "remember": [
          "A money plan has steps: know your needs, protect yourself, spend smartly, grow your money, and do your duties.",
          "Protect first: emergency money, insurance and care about scams come before growing money.",
          "Small lessons every day add up. You can learn the basics in a month.",
          "Start with one small step, like your emergency jar, and keep going."
        ],
        "fill": {
          "bank": [
            "plan",
            "emergency",
            "protect",
            "grow",
            "budget",
            "step"
          ],
          "items": [
            [
              "A written guide for what to do with your money is a money @@.",
              "plan"
            ],
            [
              "Before you grow your money, build your @@ jar.",
              "emergency"
            ],
            [
              "Insurance helps to @@ you from big bills.",
              "protect"
            ],
            [
              "An SIP and a fixed deposit help your money @@.",
              "grow"
            ],
            [
              "Start with one small @@ and keep going.",
              "step"
            ]
          ]
        },
        "sortTitle": "Protect first, or grow next?",
        "sortOpts": [
          {
            "k": "protect",
            "t": "Protect first"
          },
          {
            "k": "grow",
            "t": "Grow next"
          }
        ],
        "sort": [
          {
            "icon": "jar",
            "label": "Building an emergency jar",
            "a": "protect"
          },
          {
            "icon": "pie",
            "label": "Starting a monthly SIP",
            "a": "grow"
          },
          {
            "icon": "umbrella",
            "label": "Having insurance for a big bill",
            "a": "protect"
          },
          {
            "icon": "tree",
            "label": "Letting money grow for many years",
            "a": "grow"
          },
          {
            "icon": "shield",
            "label": "Learning to spot scam calls",
            "a": "protect"
          }
        ],
        "tf": [
          {
            "q": "You can learn the basics of money in small lessons over a month.",
            "a": true
          },
          {
            "q": "Growing your money should come before building emergency savings.",
            "a": false
          },
          {
            "q": "A money plan only matters for adults.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "You have a little spare money. Which step comes first on the map?",
            "opts": [
              "Put it all in a risky scheme",
              "Start your emergency jar",
              "Buy something on EMI"
            ],
            "a": 1
          },
          {
            "q": "Why does Aaji call it a map?",
            "opts": [
              "Because it shows steps to follow one at a time",
              "Because it is made of paper only",
              "Because it shows only one place"
            ],
            "a": 0
          }
        ],
        "promise": "I, {name}, promise to follow my money map, one small step at a time, and to keep learning and sharing what I know."
      },
      "hi": {
        "remember": [
          "पैसों की योजना में क़दम होते हैं: ज़रूरतें जानो, ख़ुद को बचाओ, समझदारी से ख़र्च करो, पैसे बढ़ाओ, और अपने कर्तव्य निभाओ।",
          "पहले बचाव: आपातकाल के पैसे, बीमा और धोखाधड़ी से सावधानी पैसे बढ़ाने से पहले आते हैं।",
          "रोज़ के छोटे पाठ जुड़कर बड़े बनते हैं। बुनियादी बातें तुम एक महीने में सीख सकते हो।",
          "एक छोटे क़दम से शुरू करो, जैसे आपातकाल का जार, और चलते रहो।"
        ],
        "fill": {
          "bank": [
            "योजना",
            "आपातकाल",
            "बचाने",
            "बढ़ाने",
            "बजट",
            "क़दम"
          ],
          "items": [
            [
              "पैसों का क्या करना है उसकी लिखी हुई राह पैसों की @@ है।",
              "योजना"
            ],
            [
              "पैसे बढ़ाने से पहले अपना @@ वाला जार बनाओ।",
              "आपातकाल"
            ],
            [
              "बीमा बड़े बिलों से तुम्हें @@ में मदद करता है।",
              "बचाने"
            ],
            [
              "एसआईपी और फ़िक्स्ड डिपॉज़िट पैसे @@ में मदद करते हैं।",
              "बढ़ाने"
            ],
            [
              "एक छोटे @@ से शुरू करो और चलते रहो।",
              "क़दम"
            ]
          ]
        },
        "sortTitle": "पहले बचाव या आगे बढ़ोतरी?",
        "sortOpts": [
          {
            "k": "protect",
            "t": "पहले बचाव"
          },
          {
            "k": "grow",
            "t": "आगे बढ़ोतरी"
          }
        ],
        "sort": [
          {
            "icon": "jar",
            "label": "आपातकाल का जार बनाना",
            "a": "protect"
          },
          {
            "icon": "pie",
            "label": "हर महीने की एसआईपी शुरू करना",
            "a": "grow"
          },
          {
            "icon": "umbrella",
            "label": "बड़े बिल के लिए बीमा लेना",
            "a": "protect"
          },
          {
            "icon": "tree",
            "label": "पैसों को कई साल बढ़ने देना",
            "a": "grow"
          },
          {
            "icon": "shield",
            "label": "धोखे वाले फ़ोन पहचानना सीखना",
            "a": "protect"
          }
        ],
        "tf": [
          {
            "q": "पैसों की बुनियादी बातें एक महीने में छोटे-छोटे पाठों से सीखी जा सकती हैं।",
            "a": true
          },
          {
            "q": "पैसे बढ़ाना आपातकाल की बचत बनाने से पहले आना चाहिए।",
            "a": false
          },
          {
            "q": "पैसों की योजना सिर्फ़ बड़ों के लिए ज़रूरी है।",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तुम्हारे पास थोड़े फ़ालतू पैसे हैं। नक़्शे पर पहला क़दम कौन सा है?",
            "opts": [
              "सब जोखिम भरी योजना में लगा दो",
              "अपना आपातकाल वाला जार शुरू करो",
              "EMI पर कुछ ख़रीद लो"
            ],
            "a": 1
          },
          {
            "q": "दादी इसे नक़्शा क्यों कहती हैं?",
            "opts": [
              "क्योंकि यह एक-एक करके चलने के क़दम दिखाता है",
              "क्योंकि यह सिर्फ़ काग़ज़ का बना है",
              "क्योंकि यह सिर्फ़ एक जगह दिखाता है"
            ],
            "a": 0
          }
        ],
        "promise": "मैं, {name}, वादा करत[[ा|ी]] हूँ कि अपने पैसों के नक़्शे पर एक-एक छोटे क़दम से चलूँग[[ा|ी]], सीखत[[ा|ी]] रहूँग[[ा|ी]] और जो जानत[[ा|ी]] हूँ वह दूसरों को बताऊँग[[ा|ी]]।"
      },
      "mr": {
        "remember": [
          "पैशांच्या योजनेत पावलं असतात: गरजा ओळख, स्वतःला वाचव, शहाणपणाने खर्च कर, पैसे वाढव, आणि आपली कर्तव्यं पार पाड.",
          "आधी संरक्षण: आणीबाणीचे पैसे, विमा आणि फसवणुकीबद्दल सावधगिरी पैसे वाढवण्याआधी येतात.",
          "रोजचे छोटे धडे जमून मोठे होतात. मूलभूत गोष्टी तू महिन्यात शिकू शकतोस.",
          "एका छोट्या पावलाने सुरुवात कर, जसं आणीबाणीची बरणी, आणि चालत राहा."
        ],
        "fill": {
          "bank": [
            "योजना",
            "आणीबाणी",
            "वाचवायला",
            "वाढवायला",
            "बजेट",
            "पाऊल"
          ],
          "items": [
            [
              "पैशांचं काय करायचं याची लिहिलेली वाट म्हणजे पैशांची @@.",
              "योजना"
            ],
            [
              "पैसे वाढवण्याआधी तुझी @@ ची बरणी बनव.",
              "आणीबाणी"
            ],
            [
              "विमा मोठ्या बिलांपासून तुला @@ मदत करतो.",
              "वाचवायला"
            ],
            [
              "एसआयपी आणि फिक्स्ड डिपॉझिट पैसे @@ मदत करतात.",
              "वाढवायला"
            ],
            [
              "एका छोट्या @@ ने सुरुवात कर आणि चालत राहा.",
              "पाऊल"
            ]
          ]
        },
        "sortTitle": "आधी संरक्षण की पुढे वाढ?",
        "sortOpts": [
          {
            "k": "protect",
            "t": "आधी संरक्षण"
          },
          {
            "k": "grow",
            "t": "पुढे वाढ"
          }
        ],
        "sort": [
          {
            "icon": "jar",
            "label": "आणीबाणीची बरणी बनवणं",
            "a": "protect"
          },
          {
            "icon": "pie",
            "label": "दर महिन्याची एसआयपी सुरू करणं",
            "a": "grow"
          },
          {
            "icon": "umbrella",
            "label": "मोठ्या बिलासाठी विमा घेणं",
            "a": "protect"
          },
          {
            "icon": "tree",
            "label": "पैशांना अनेक वर्षं वाढू देणं",
            "a": "grow"
          },
          {
            "icon": "shield",
            "label": "फसवणुकीचे फोन ओळखायला शिकणं",
            "a": "protect"
          }
        ],
        "tf": [
          {
            "q": "पैशांच्या मूलभूत गोष्टी महिन्याभरात छोट्या छोट्या धड्यांतून शिकता येतात.",
            "a": true
          },
          {
            "q": "पैसे वाढवणं हे आणीबाणीची बचत बनवण्याआधी यायला हवं.",
            "a": false
          },
          {
            "q": "पैशांची योजना फक्त मोठ्यांसाठी महत्त्वाची असते.",
            "a": false
          }
        ],
        "think": [
          {
            "q": "तुझ्याकडे थोडे जास्तीचे पैसे आहेत. नकाशावर पहिलं पाऊल कोणतं?",
            "opts": [
              "सगळे जोखमीच्या योजनेत घालावेत",
              "आपली आणीबाणीची बरणी सुरू करावी",
              "EMI वर काहीतरी घ्यावं"
            ],
            "a": 1
          },
          {
            "q": "आजी याला नकाशा का म्हणते?",
            "opts": [
              "कारण तो एकेक करून चालायची पावलं दाखवतो",
              "कारण तो फक्त कागदाचा बनलेला आहे",
              "कारण तो फक्त एकच जागा दाखवतो"
            ],
            "a": 0
          }
        ],
        "promise": "मी, {name}, वचन देत[[ो|े]] की माझ्या पैशांच्या नकाशावर एकेक छोटं पाऊल टाकत चालेन, शिकत राहीन, आणि जे येतं ते इतरांना सांगेन."
      }
    }
  }
];
