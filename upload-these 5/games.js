/* The games. Each one gives a function that returns the next question:
   { html: the prompt, opts: [{ label, ok }], wide: true for long answers, svg: optional picture }.
   Everything shown is built from fixed lists or from the books, so nothing comes from other players. */
(function () {
  function mulberry(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function pick(a, r) { return a[Math.floor(r() * a.length)]; }
  function shuffle(a, r) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function today() { return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10); }

  /* ---------- Need or want ---------- */
  var NW = [
    ["Rice and dal", "चावल और दाल", "भात आणि वरण", "need"], ["Clean drinking water", "साफ़ पीने का पानी", "स्वच्छ पिण्याचं पाणी", "need"],
    ["School uniform", "स्कूल की यूनिफ़ॉर्म", "शाळेचा गणवेश", "need"], ["Medicine when sick", "बीमारी में दवा", "आजारपणात औषध", "need"],
    ["Notebooks for school", "स्कूल की कॉपियाँ", "शाळेच्या वह्या", "need"], ["A warm blanket in winter", "सर्दी में गरम कंबल", "थंडीत उबदार ब्लँकेट", "need"],
    ["Soap to wash hands", "हाथ धोने का साबुन", "हात धुण्याचा साबण", "need"], ["Electricity bill", "बिजली का बिल", "वीज बिल", "need"],
    ["Bus fare to school", "स्कूल जाने का बस किराया", "शाळेत जाण्यासाठी बसचं भाडं", "need"], ["Fresh vegetables", "ताज़ी सब्ज़ियाँ", "ताज्या भाज्या", "need"],
    ["Spectacles for weak eyes", "कमज़ोर आँखों के लिए चश्मा", "कमजोर डोळ्यांसाठी चष्मा", "need"],
    ["Video game", "वीडियो गेम", "व्हिडिओ गेम", "want"], ["Ice cream", "आइसक्रीम", "आइस्क्रीम", "want"],
    ["Fancy sneakers", "महंगे स्पोर्ट्स जूते", "महागडे स्पोर्ट्स शूज", "want"], ["Movie ticket", "फ़िल्म का टिकट", "चित्रपटाचं तिकीट", "want"],
    ["Cold drink", "कोल्ड ड्रिंक", "कोल्ड ड्रिंक", "want"], ["Remote-control car", "रिमोट वाली कार", "रिमोटवरची गाडी", "want"],
    ["Birthday party decorations", "जन्मदिन की सजावट", "वाढदिवसाची सजावट", "want"], ["Stickers and gel pens", "स्टिकर और जेल पेन", "स्टिकर्स आणि जेल पेन", "want"],
    ["A new phone cover", "फ़ोन का नया कवर", "फोनचं नवं कव्हर", "want"], ["Chocolate", "चॉकलेट", "चॉकलेट", "want"],
    ["One more toy", "एक और खिलौना", "आणखी एक खेळणं", "want"], ["Buying a gaming skin", "गेम की स्किन ख़रीदना", "गेममधली स्किन विकत घेणं", "want"],
    ["Toothpaste", "टूथपेस्ट", "टूथपेस्ट", "need"], ["A raincoat in the monsoon", "बरसात में रेनकोट", "पावसाळ्यात रेनकोट", "need"],
    ["School fees", "स्कूल की फ़ीस", "शाळेची फी", "need"], ["Cooking gas", "रसोई की गैस", "स्वयंपाकाचा गॅस", "need"],
    ["Slippers for your feet", "पैरों के लिए चप्पल", "पायांसाठी चप्पल", "need"], ["Milk for the baby", "बच्चे के लिए दूध", "बाळासाठी दूध", "need"],
    ["Textbooks", "पाठ्यपुस्तकें", "पाठ्यपुस्तके", "need"], ["Doctor's fee", "डॉक्टर की फ़ीस", "डॉक्टरांची फी", "need"],
    ["Rent for the house", "घर का किराया", "घरभाडं", "need"], ["A pencil for the exam", "परीक्षा के लिए पेंसिल", "परीक्षेसाठी पेन्सिल", "need"],
    ["A new bag just because it is trendy", "सिर्फ़ फ़ैशन के लिए नया बैग", "फक्त फॅशनसाठी नवी बॅग", "want"], ["Online game coins", "ऑनलाइन गेम के सिक्के", "ऑनलाइन गेमची नाणी", "want"],
    ["Pizza party", "पिज़्ज़ा पार्टी", "पिझ्झा पार्टी", "want"], ["Branded sunglasses", "ब्रांडेड धूप का चश्मा", "ब्रँडेड गॉगल्स", "want"],
    ["A fidget toy", "फ़िजेट खिलौना", "फिजेट खेळणं", "want"], ["Extra pocket money for chips", "चिप्स के लिए और जेबख़र्च", "चिप्ससाठी आणखी पॉकेटमनी", "want"],
    ["A cricket bat with a famous name", "मशहूर नाम वाला क्रिकेट बैट", "प्रसिद्ध नावाची क्रिकेट बॅट", "want"], ["Colourful hair clips", "रंगीन बालों की क्लिप", "रंगीबेरंगी केसांच्या क्लिप्स", "want"],
    ["A theme park ride", "थीम पार्क की सवारी", "थीम पार्कमधली राइड", "want"], ["A cartoon lunch box that costs a lot", "कार्टून वाला महँगा टिफ़िन", "कार्टूनचा महागडा डबा", "want"]
  ];
  /* ---------- Scam or safe ---------- */
  var SS = [
    ["You won a lottery! Send ₹500 to get your prize.", "आपने लॉटरी जीती है! इनाम पाने के लिए ₹500 भेजें।", "तुम्ही लॉटरी जिंकली आहे! बक्षीस मिळवण्यासाठी ₹500 पाठवा.", "scam"],
    ["Your bank account will close today. Tell us your OTP now.", "आपका बैंक खाता आज बंद हो जाएगा। अभी अपना OTP बताइए।", "तुमचं बँक खातं आज बंद होईल. आत्ताच तुमचा OTP सांगा.", "scam"],
    ["Click this link to get a free phone. Only today!", "मुफ़्त फ़ोन पाने के लिए इस लिंक पर क्लिक करें। सिर्फ़ आज!", "मोफत फोन मिळवण्यासाठी या लिंकवर क्लिक करा. फक्त आजच!", "scam"],
    ["I am from the bank. Share your ATM PIN to fix a problem.", "मैं बैंक से बोल रहा हूँ। समस्या ठीक करने के लिए अपना ATM पिन बताइए।", "मी बँकेतून बोलतोय. समस्या सोडवण्यासाठी तुमचा ATM पिन सांगा.", "scam"],
    ["Send ₹1 to a stranger to get ₹100 back.", "अजनबी को ₹1 भेजिए और ₹100 वापस पाइए।", "अनोळखी व्यक्तीला ₹1 पाठवा आणि ₹100 परत मिळवा.", "scam"],
    ["Scan this QR code to RECEIVE money.", "पैसे पाने के लिए यह QR कोड स्कैन करें।", "पैसे मिळवण्यासाठी हा QR कोड स्कॅन करा.", "scam"],
    ["Your parcel is stuck. Pay ₹30 at this link to release it.", "आपका पार्सल अटका है। छुड़ाने के लिए इस लिंक पर ₹30 दीजिए।", "तुमचं पार्सल अडकलं आहे. सोडवण्यासाठी या लिंकवर ₹30 भरा.", "scam"],
    ["Install this app so I can see your screen and help you.", "यह ऐप डाउनलोड करें ताकि मैं आपकी स्क्रीन देखकर मदद कर सकूँ।", "हे अ‍ॅप डाउनलोड करा, म्हणजे मी तुमची स्क्रीन पाहून मदत करू शकेन.", "scam"],
    ["Mom: Please buy 1 kg of rice on your way home.", "मम्मी: घर आते समय 1 किलो चावल ले आना।", "आई: घरी येताना 1 किलो तांदूळ आण.", "safe"],
    ["Bank: ₹200 was spent at the canteen with your card. If it was you, nothing to do.", "बैंक: कैंटीन में आपके कार्ड से ₹200 ख़र्च हुए। अगर आपने किए हैं, तो कुछ करने की ज़रूरत नहीं।", "बँक: कँटीनमध्ये तुमच्या कार्डवरून ₹200 खर्च झाले. तुम्ही केले असतील तर काही करण्याची गरज नाही.", "safe"],
    ["Teacher: The trip fee is ₹300. Please give it to me in school.", "टीचर: ट्रिप की फ़ीस ₹300 है। कृपया स्कूल में मुझे दे दीजिए।", "शिक्षक: सहलीची फी ₹300 आहे. कृपया शाळेत मला द्या.", "safe"],
    ["Your OTP is 4821. Do not share it with anyone.", "आपका OTP 4821 है। इसे किसी को न बताएँ।", "तुमचा OTP 4821 आहे. तो कोणालाही सांगू नका.", "safe"],
    ["Friend: Let's study maths together after school.", "दोस्त: स्कूल के बाद साथ में गणित पढ़ते हैं।", "मित्र: शाळेनंतर एकत्र गणित शिकूया.", "safe"],
    ["Shop bill: ₹120 paid in cash. Thank you!", "दुकान का बिल: ₹120 नकद चुकाए। धन्यवाद!", "दुकानाचं बिल: ₹120 रोख दिले. धन्यवाद!", "safe"],
    ["Dad: I will pay the shopkeeper myself when we reach.", "पापा: पहुँचकर मैं ख़ुद दुकानदार को पैसे दे दूँगा।", "बाबा: पोहोचल्यावर मी स्वतः दुकानदाराला पैसे देईन.", "safe"],
    ["Library: Your book is due on Friday.", "लाइब्रेरी: आपकी किताब शुक्रवार तक लौटानी है।", "ग्रंथालय: तुमचं पुस्तक शुक्रवारपर्यंत परत करायचं आहे.", "safe"],
    ["Congratulations! Click here to claim your free recharge.", "बधाई हो! मुफ़्त रिचार्ज पाने के लिए यहाँ क्लिक करें।", "अभिनंदन! मोफत रिचार्ज मिळवण्यासाठी इथे क्लिक करा.", "scam"],
    ["Pay ₹200 first to join our money-doubling scheme.", "हमारी पैसा दोगुना करने वाली स्कीम में जुड़ने के लिए पहले ₹200 दीजिए।", "आमच्या पैसे दुप्पट करणाऱ्या योजनेत सामील होण्यासाठी आधी ₹200 भरा.", "scam"],
    ["Your KYC has expired. Fill in your Aadhaar and PIN on this link.", "आपका KYC ख़त्म हो गया है। इस लिंक पर अपना आधार और पिन भरें।", "तुमचं KYC संपलं आहे. या लिंकवर तुमचा आधार आणि पिन भरा.", "scam"],
    ["Don't tell your parents. Send a photo of your card and win a prize.", "अपने माता-पिता को मत बताना। अपने कार्ड की फ़ोटो भेजो और इनाम जीतो।", "आई-बाबांना सांगू नकोस. तुझ्या कार्डचा फोटो पाठव आणि बक्षीस जिंक.", "scam"],
    ["Earn ₹5,000 a day from home. Just pay ₹500 to start.", "घर बैठे रोज़ ₹5,000 कमाइए। शुरू करने के लिए बस ₹500 दीजिए।", "घरबसल्या रोज ₹5,000 कमवा. सुरू करण्यासाठी फक्त ₹500 द्या.", "scam"],
    ["School: Tomorrow is a holiday for Diwali.", "स्कूल: कल दीवाली की छुट्टी है।", "शाळा: उद्या दिवाळीची सुट्टी आहे.", "safe"],
    ["Bank: Your passbook is ready. Collect it from the branch with your parent.", "बैंक: आपकी पासबुक तैयार है। माता-पिता के साथ शाखा से ले जाइए।", "बँक: तुमचं पासबुक तयार आहे. आई-बाबांसोबत शाखेतून घेऊन जा.", "safe"],
    ["Aaji: Come for lunch on Sunday. I made kheer.", "दादी: रविवार को खाने पर आना। मैंने खीर बनाई है।", "आजी: रविवारी जेवायला ये. मी खीर केली आहे.", "safe"],
    ["Shopkeeper: Please take your bill and check the change.", "दुकानदार: बिल ले लीजिए और खुले पैसे गिन लीजिए।", "दुकानदार: बिल घ्या आणि सुट्टे पैसे मोजून घ्या.", "safe"],
    ["Mom: Don't tell your PIN to anyone, not even friends.", "मम्मी: अपना पिन किसी को मत बताना, दोस्तों को भी नहीं।", "आई: तुझा पिन कोणालाही सांगू नकोस, मित्रांनाही नाही.", "safe"]
  ];
  /* "What do you do?" scenarios. The first answer in each list is the right one. */
  var ACT = [
    { q: ["A caller says: \"Tell me your OTP or your account will close.\" What do you do?", "फ़ोन पर कोई कहता है: \"OTP बताइए, वरना खाता बंद हो जाएगा।\" तुम क्या करोगे?", "फोनवर कोणीतरी म्हणतं: \"OTP सांगा, नाहीतर खातं बंद होईल.\" तू काय करशील?"],
      o: [["Hang up and tell a grown-up", "Say the OTP quickly", "Ask their name, then say the OTP"], ["फ़ोन काटो और किसी बड़े को बताओ", "जल्दी से OTP बता दो", "नाम पूछकर फिर OTP बता दो"], ["फोन कट कर आणि मोठ्यांना सांग", "लगेच OTP सांगून टाक", "नाव विचारून मग OTP सांग"]] },
    { q: ["A message says you won a phone and has a link. What do you do?", "एक मैसेज में फ़ोन जीतने की बात लिखी है और उसमें एक लिंक है। तुम क्या करोगे?", "एका मेसेजमध्ये फोन जिंकल्याचं लिहिलं आहे आणि त्यात एक लिंक आहे. तू काय करशील?"],
      o: [["Do not click. Show it to a grown-up", "Click to see the prize", "Forward it to all your friends"], ["लिंक मत खोलो, किसी बड़े को दिखाओ", "इनाम देखने के लिए लिंक खोलो", "सब दोस्तों को आगे भेज दो"], ["लिंक उघडू नकोस, मोठ्यांना दाखव", "बक्षीस पाहायला लिंक उघड", "सगळ्या मित्रांना पुढे पाठव"]] },
    { q: ["Someone says: \"Scan this QR and enter your PIN to receive ₹500.\" What is true?", "कोई कहता है: \"यह QR स्कैन करो और ₹500 पाने के लिए पिन डालो।\" सही क्या है?", "कोणी म्हणतं: \"हा QR स्कॅन कर आणि ₹500 मिळवण्यासाठी पिन टाक.\" काय बरोबर आहे?"],
      o: [["You never enter a PIN to receive money", "You must enter the PIN to receive", "It is safe if the person is friendly"], ["पैसे पाने के लिए कभी पिन नहीं डाला जाता", "पैसे पाने के लिए पिन डालना पड़ता है", "अगर वह दोस्ताना हो तो सुरक्षित है"], ["पैसे मिळवण्यासाठी कधीही पिन टाकत नाहीत", "पैसे मिळवण्यासाठी पिन टाकावा लागतो", "ती व्यक्ती मैत्रीपूर्ण असेल तर सुरक्षित आहे"]] },
    { q: ["A friend asks for your ATM PIN \"to help you\". What do you say?", "एक दोस्त मदद के नाम पर तुम्हारा ATM पिन माँगता है। तुम क्या कहोगे?", "मित्र मदतीच्या नावाखाली तुझा ATM पिन मागतो. तू काय म्हणशील?"],
      o: [["No. My PIN is only for me", "Yes, he is my friend", "Yes, but only once"], ["नहीं, मेरा पिन सिर्फ़ मेरे लिए है", "हाँ, वह मेरा दोस्त है", "हाँ, लेकिन सिर्फ़ एक बार"], ["नाही, माझा पिन फक्त माझ्यासाठी आहे", "हो, तो माझा मित्र आहे", "हो, पण फक्त एकदाच"]] },
    { q: ["A stranger asks you to install an app so they can \"fix\" your phone. What do you do?", "एक अजनबी फ़ोन \"ठीक\" करने के लिए एक ऐप डालने को कहता है। तुम क्या करोगे?", "एक अनोळखी व्यक्ती फोन \"दुरुस्त\" करण्यासाठी एक अ‍ॅप टाकायला सांगते. तू काय करशील?"],
      o: [["Do not install it. Tell a grown-up", "Install it quickly", "Install it but keep the sound off"], ["ऐप मत डालो, किसी बड़े को बताओ", "जल्दी से ऐप डाल लो", "ऐप डालो पर आवाज़ बंद रखो"], ["अ‍ॅप टाकू नकोस, मोठ्यांना सांग", "लगेच अ‍ॅप टाक", "अ‍ॅप टाक पण आवाज बंद ठेव"]] },
    { q: ["Money left your account without your permission. What should you do first?", "तुम्हारी इजाज़त के बिना तुम्हारे खाते से पैसे कट गए। सबसे पहले क्या करना चाहिए?", "तुझ्या परवानगीशिवाय तुझ्या खात्यातून पैसे कापले गेले. सर्वात आधी काय करावं?"],
      o: [["Tell a grown-up and call the bank or 1930", "Wait a few days", "Hide it so nobody knows"], ["किसी बड़े को बताओ और बैंक या 1930 पर फ़ोन करो", "कुछ दिन इंतज़ार करो", "छिपा लो ताकि किसी को पता न चले"], ["मोठ्यांना सांग आणि बँकेला किंवा 1930 वर फोन कर", "काही दिवस वाट पाहा", "लपवून ठेव म्हणजे कोणाला कळणार नाही"]] },
    { q: ["An online game says: \"Pay ₹99 now or lose your level!\" What do you do?", "ऑनलाइन गेम कहता है: \"अभी ₹99 दो, वरना लेवल चला जाएगा!\" तुम क्या करोगे?", "ऑनलाइन गेम म्हणतो: \"आत्ता ₹99 भर, नाहीतर तुझा लेव्हल जाईल!\" तू काय करशील?"],
      o: [["Stop and ask a grown-up", "Pay fast with a parent's phone", "Pay with a friend's card"], ["रुको और किसी बड़े से पूछो", "मम्मी के फ़ोन से जल्दी चुका दो", "दोस्त के कार्ड से चुका दो"], ["थांब आणि मोठ्यांना विचार", "आईच्या फोनवरून लगेच भर", "मित्राच्या कार्डने भर"]] },
    { q: ["A link says: \"Hurry, only 5 minutes left!\" Why do scammers rush you?", "एक लिंक कहता है: \"जल्दी करो, सिर्फ़ 5 मिनट बचे हैं!\" ठग जल्दी क्यों मचाते हैं?", "एक लिंक म्हणतो: \"घाई कर, फक्त 5 मिनिटं उरली आहेत!\" फसवणूक करणारे घाई का करतात?"],
      o: [["So you cannot stop and think", "Because they are kind", "Because the shop will close"], ["ताकि तुम रुककर सोच न सको", "क्योंकि वे अच्छे होते हैं", "क्योंकि दुकान बंद हो जाएगी"], ["म्हणजे तुला थांबून विचार करता येऊ नये", "कारण ते चांगले असतात", "कारण दुकान बंद होईल"]] },
    { q: ["A stranger in a game chat asks for your photo and your school's name. What do you do?", "गेम की चैट में एक अजनबी तुम्हारी फ़ोटो और स्कूल का नाम माँगता है। तुम क्या करोगे?", "गेमच्या चॅटमध्ये एक अनोळखी व्यक्ती तुझा फोटो आणि शाळेचं नाव मागते. तू काय करशील?"],
      o: [["Share nothing and tell a grown-up", "Send only the photo", "Tell only the school's name"], ["कुछ मत बताओ, किसी बड़े को बताओ", "सिर्फ़ फ़ोटो भेज दो", "सिर्फ़ स्कूल का नाम बता दो"], ["काहीही सांगू नकोस, मोठ्यांना सांग", "फक्त फोटो पाठव", "फक्त शाळेचं नाव सांग"]] },
    { q: ["A message from an unknown number says: \"Hi, I changed my number. Send ₹2,000 now.\" What do you do?", "अनजान नंबर से मैसेज आता है: \"हाय, मैंने नंबर बदल लिया है। अभी ₹2,000 भेजो।\" तुम क्या करोगे?", "अनोळखी नंबरवरून मेसेज येतो: \"हाय, मी नंबर बदलला आहे. आत्ता ₹2,000 पाठव.\" तू काय करशील?"],
      o: [["Call the old number to check", "Send the money quickly", "Send your bank details"], ["पुराने नंबर पर फ़ोन करके पक्का करो", "जल्दी से पैसे भेज दो", "अपने बैंक की जानकारी भेज दो"], ["जुन्या नंबरवर फोन करून खात्री कर", "लगेच पैसे पाठव", "तुझ्या बँकेची माहिती पाठव"]] },
    { q: ["A website sells a phone at half price but wants money sent to a personal number. What does this tell you?", "एक वेबसाइट फ़ोन आधे दाम में बेचती है, पर पैसे किसी के निजी नंबर पर माँगती है। इसका मतलब क्या है?", "एक वेबसाइट अर्ध्या किमतीत फोन विकते, पण पैसे कुणाच्या तरी वैयक्तिक नंबरवर मागते. याचा अर्थ काय?"],
      o: [["It is probably a scam", "It is a great deal", "It is a government offer"], ["यह शायद ठगी है", "यह बढ़िया सौदा है", "यह सरकारी ऑफ़र है"], ["ही कदाचित फसवणूक आहे", "हा उत्तम सौदा आहे", "ही सरकारी ऑफर आहे"]] },
    { q: ["Which of these should you never tell anyone?", "इनमें से किसे किसी को भी कभी नहीं बताना चाहिए?", "यापैकी काय कोणालाही कधीही सांगू नये?"],
      o: [["Your OTP and PIN", "Your favourite game", "Your favourite colour"], ["OTP और पिन", "पसंदीदा खेल", "पसंदीदा रंग"], ["OTP आणि पिन", "आवडता खेळ", "आवडता रंग"]] },
    { q: ["A message with a link says it is from your bank. How can you check if it is real?", "बैंक के नाम से आए एक मैसेज में लिंक है। असली है या नहीं, कैसे जाँचोगे?", "बँकेच्या नावाने आलेल्या मेसेजमध्ये लिंक आहे. तो खरा आहे का, हे कसं तपासशील?"],
      o: [["Open the bank's app or call the number on your card", "Click the link and see", "Reply with your PIN to check"], ["बैंक का ऐप खोलो या कार्ड पर छपे नंबर पर फ़ोन करो", "लिंक खोलकर देखो", "जाँचने के लिए पिन भेजो"], ["बँकेचं अ‍ॅप उघड किंवा कार्डवरच्या नंबरवर फोन कर", "लिंक उघडून बघ", "तपासण्यासाठी पिन पाठव"]] },
    { q: ["Someone says: \"Don't tell anyone about this deal.\" What does that tell you?", "कोई कहता है: \"इस सौदे के बारे में किसी को मत बताना।\" इसका मतलब क्या है?", "कोणी म्हणतं: \"या सौद्याबद्दल कोणालाही सांगू नकोस.\" याचा अर्थ काय?"],
      o: [["Be careful. Tell a grown-up", "It is a special secret deal", "Keeping it secret wins more"], ["सावधान रहो, किसी बड़े को बताओ", "यह ख़ास गुप्त सौदा है", "राज़ रखोगे तो और जीतोगे"], ["सावध राहा, मोठ्यांना सांग", "हा खास गुप्त सौदा आहे", "गुपित ठेवलं तर आणखी जिंकशील"]] }
  ];
  var LI = { en: 0, hi: 1, mr: 2 };

  /* ---------- Never the same question twice ----------
     Each game deals from a shuffled deck. This device remembers which questions it has already shown (kept in this browser only),
     so a new round starts with questions not seen yet. Only when every question has been seen does the deck start over. */
  var SEEN = "ss-seen";
  function seenAll() { try { return JSON.parse(localStorage.getItem(SEEN) || "{}") || {}; } catch (e) { return {}; } }
  function seenOf(id) { var a = seenAll()[id]; return Array.isArray(a) ? a : []; }
  function remember(id, list) { try { var o = seenAll(); o[id] = list.slice(-500); localStorage.setItem(SEEN, JSON.stringify(o)); } catch (e) {} }
  function deck(id, keys, r) {
    var seen = seenOf(id), mark = {}, i = 0;
    seen.forEach(function (k) { mark[k] = 1; });
    var fresh = keys.filter(function (k) { return !mark[k]; });
    if (!fresh.length) { seen = []; mark = {}; fresh = keys.slice(); remember(id, seen); }
    var order = shuffle(fresh, r).concat(shuffle(keys.filter(function (k) { return mark[k]; }), r));
    return function () {
      if (i >= order.length) { order = shuffle(keys, r); i = 0; }
      var k = order[i++]; seen.push(k); remember(id, seen); return k;
    };
  }
  /* For questions made from random numbers: every question has a key, and a key already shown is not used again. */
  function fresh(id, gen) {
    var seen = seenOf(id), mark = {};
    seen.forEach(function (k) { mark[k] = 1; });
    return function () {
      var q, tries = 0;
      do { q = gen(); } while (mark[q.key] && ++tries < 60);
      mark[q.key] = 1; seen.push(q.key); remember(id, seen);
      return q;
    };
  }
  /* Picks a question type, never the same one twice in a row. */
  function typer(n, r) { var last = -1; return function () { var k; do { k = Math.floor(r() * n); } while (n > 1 && k === last); last = k; return k; }; }

  /* ---------- Quiz pool, taken from the books themselves ----------
     Four kinds of question: true or false, think-it-through, fill in the blank, and sort it into a group. */
  function quizPool(lang, tpl) {
    var out = [], used = {};
    function add(it) { if (used[it.q]) return; used[it.q] = 1; out.push(it); }
    var U = (window.UI2 && window.UI2[lang]) || {};
    window.BOOKS.forEach(function (b) {
      if (b.status !== "live" || !b.recap || !b.recap[lang]) return;
      var r = b.recap[lang];
      (r.tf || []).forEach(function (it, n) { add({ key: b.slug + ":t" + n, q: tpl(it.q), opts: [window.UI[lang].tru, window.UI[lang].fls], ok: it.a ? 0 : 1 }); });
      (r.think || []).forEach(function (it, n) { add({ key: b.slug + ":k" + n, q: tpl(it.q), opts: it.opts.map(tpl), ok: it.a }); });
      if (r.fill && r.fill.items && r.fill.bank) r.fill.items.forEach(function (it, n) {
        var ans = tpl(it[1]), bank = r.fill.bank.map(tpl).filter(function (w) { return w !== ans; });
        if (bank.length < 2) return;
        add({ key: b.slug + ":f" + n, q: tpl(it[0]).replace("@@", "_____"), tag: U.q_fill, fill: { ans: ans, bank: bank } });
      });
      (r.sort || []).forEach(function (it, n) {
        if (!r.sortOpts || r.sortOpts.length < 2) return;
        add({ key: b.slug + ":s" + n, q: tpl(it.label), tag: tpl(r.sortTitle || ""), opts: r.sortOpts.map(function (o) { return tpl(o.t); }), ok: r.sortOpts.map(function (o) { return o.k; }).indexOf(it.a), big: true });
      });
    });
    return out;
  }
  function quizQ(item, r) {
    var opts, ok;
    if (item.fill) {
      opts = shuffle([item.fill.ans].concat(shuffle(item.fill.bank, r).slice(0, 2)), r); ok = opts.indexOf(item.fill.ans);
    } else { opts = item.opts; ok = item.ok; }
    var idx = opts.map(function (o, i) { return { label: o, ok: i === ok }; });
    var text = item.big ? '<span class="big">' + esc(item.q) + "</span>" : esc(item.q);
    return { html: (item.tag ? '<span class="note">' + esc(item.tag) + "</span><br>" : "") + text, opts: opts.length > 2 && !item.fill ? shuffle(idx, r) : idx, wide: opts.some(function (o) { return o.length > 18; }) };
  }

  /* ---------- Coins and notes picture ---------- */
  var COINW = { en: ["coin", "note"], hi: ["का सिक्का", "का नोट"], mr: ["चं नाणं", "ची नोट"] };
  var COINS = [1, 2, 5, 10], NOTES = [10, 20, 50], NOTECOL = { 10: "#c9a66b", 20: "#f2a65a", 50: "#7fb8e6" };
  function moneySvg(items, lang) {
    var x = 8, y = 10, parts = [], rowh = 0, W = 320;
    items.forEach(function (it) {
      var w = it.note ? 70 : 46, h = it.note ? 42 : 46;
      if (x + w > W - 4) { x = 8; y += rowh + 8; rowh = 0; }
      rowh = Math.max(rowh, h);
      if (it.note) parts.push('<rect x="' + x + '" y="' + y + '" width="70" height="42" rx="5" fill="' + NOTECOL[it.v] + '" stroke="#2b2d42" stroke-width="3"/><text x="' + (x + 35) + '" y="' + (y + 28) + '" text-anchor="middle" font-size="20" font-weight="700" fill="#2b2d42">₹' + it.v + "</text>");
      else parts.push('<circle cx="' + (x + 23) + '" cy="' + (y + 23) + '" r="21" fill="#f4c542" stroke="#2b2d42" stroke-width="3"/><text x="' + (x + 23) + '" y="' + (y + 30) + '" text-anchor="middle" font-size="20" font-weight="700" fill="#2b2d42">' + it.v + "</text>");
      x += w + 8;
    });
    var H = y + rowh + 10;
    return '<svg viewBox="0 0 ' + W + " " + H + '" class="moneysvg" role="img" aria-label="' + esc(items.map(function (i) { return "₹" + i.v + " " + (COINW[lang || "en"][i.note ? 1 : 0]); }).join(", ")) + '">' + parts.join("") + "</svg>";
  }
  function distract(correct, r, deltas) {
    var out = [correct], tries = 0;
    var pool = shuffle(deltas, r);
    for (var i = 0; i < pool.length && out.length < 4; i++) { var v = correct + pool[i]; if (v > 0 && out.indexOf(v) < 0) out.push(v); }
    while (out.length < 4 && tries++ < 20) { var w = correct + 1 + Math.floor(r() * 12); if (out.indexOf(w) < 0) out.push(w); }
    return shuffle(out, r);
  }

  /* ---------- Things to buy, for the money games ---------- */
  var ITEMS = [["pencil", "पेंसिल", "पेन्सिल"], ["eraser", "रबर", "खोडरबर"], ["notebook", "कॉपी", "वही"], ["pen", "पेन", "पेन"], ["ruler", "स्केल", "पट्टी"],
    ["samosa", "समोसा", "समोसा"], ["banana", "केला", "केळं"], ["biscuit packet", "बिस्कुट का पैकेट", "बिस्किटाचा पुडा"], ["balloon", "गुब्बारा", "फुगा"],
    ["toffee", "टॉफ़ी", "गोळी"], ["glue stick", "ग्लू स्टिक", "ग्लू स्टिक"], ["sharpener", "शार्पनर", "शार्पनर"]];
  var DENOM = [50, 20, 10, 5, 2, 1];
  function fewest(x) { var n = 0; DENOM.forEach(function (d) { n += Math.floor(x / d); x %= d; }); return n; }
  function money(v) { return "₹" + v; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function numOpts(vals, correct) { return vals.map(function (v) { return { label: money(v), ok: v === correct }; }); }

  /* make(id, ctx) returns next(); ctx = { lang, t, u, tpl, rand }. Every game mixes several kinds of question. */
  function make(id, ctx) {
    var r = ctx.rand || Math.random, u = ctx.u, t = ctx.t, L = LI[ctx.lang];
    function fmt(str, o) { return String(str).replace(/\{(\w+)\}/g, function (m, k) { return o[k] !== undefined ? o[k] : m; }); }
    function item() { return pick(ITEMS, r)[L]; }

    if (id === "quiz-sprint") {
      var pool = quizPool(ctx.lang, ctx.tpl), nextQ = deck(id, pool.map(function (q) { return q.key; }), r), byKey = {};
      pool.forEach(function (q) { byKey[q.key] = q; });
      return function () { return quizQ(byKey[nextQ()], r); };
    }

    if (id === "need-or-want") {
      var needs = [], wants = [];
      NW.forEach(function (x, i) { (x[3] === "need" ? needs : wants).push(i); });
      var nextNW = deck(id, NW.map(function (x, i) { return "i" + i; }), r), kind = typer(3, r);
      return function () {
        var i = +nextNW().slice(1), it = NW[i], isNeed = it[3] === "need", same = isNeed ? needs : wants, other = isNeed ? wants : needs;
        function lab(j) { return NW[j][L]; }
        var k = kind();
        if (k === 0) return { html: '<span class="big">' + esc(it[L]) + "</span>", opts: [{ label: t.need, ok: isNeed }, { label: t.want, ok: !isNeed }] };
        if (k === 1) {   /* pick the need (or the want) from three things */
          var two = shuffle(other, r).slice(0, 2);
          return { html: esc(isNeed ? u.q_pickNeed : u.q_pickWant), wide: true, opts: shuffle([{ label: lab(i), ok: true }].concat(two.map(function (j) { return { label: lab(j), ok: false }; })), r) };
        }
        var three = shuffle(other, r).slice(0, 3);   /* odd one out: three alike and one different */
        return { html: esc(u.q_odd), wide: true, opts: shuffle([{ label: lab(i), ok: true }].concat(three.map(function (j) { return { label: lab(j), ok: false }; })), r) };
      };
    }

    if (id === "scam-or-safe") {
      var scams = [], safes = [];
      SS.forEach(function (x, i) { (x[3] === "scam" ? scams : safes).push(i); });
      var nextSS = deck(id, SS.map(function (x, i) { return "i" + i; }), r), nextAct = deck(id + "-do", ACT.map(function (x, i) { return "a" + i; }), r), kind2 = typer(2, r);
      return function () {
        if (r() < 0.25) {   /* a "what do you do?" scenario */
          var a = ACT[+nextAct().slice(1)], os = a.o[L].map(function (label, n) { return { label: label, ok: n === 0 }; });
          return { html: esc(a.q[L]), wide: true, opts: shuffle(os, r) };
        }
        var i = +nextSS().slice(1), it = SS[i], isScam = it[3] === "scam", other = isScam ? safes : scams;
        if (kind2() === 0) return { html: '<span class="bubble">' + esc(it[L]) + "</span>", opts: [{ label: u.scam, ok: isScam }, { label: u.safe, ok: !isScam }] };
        var two = shuffle(other, r).slice(0, 2);   /* pick the scam (or the safe one) from three messages */
        return { html: esc(isScam ? u.q_pickScam : u.q_pickSafe), wide: true, opts: shuffle([{ label: it[L], ok: true }].concat(two.map(function (j) { return { label: SS[j][L], ok: false }; })), r) };
      };
    }

    if (id === "right-change") {
      var kind3 = typer(4, r);
      return fresh(id, function () {
        var k = kind3(), price, vals;
        if (k === 0) {   /* change from a payment */
          price = 6 + Math.floor(r() * 93);
          var pay = pick([50, 100, 200, 500].filter(function (p) { return p > price; }).slice(0, 2), r), ch = pay - price;
          vals = distract(ch, r, [-10, 10, -5, 5, -1, 1, -20, 20]);
          return { key: "ch:" + pay + ":" + price, html: esc(fmt(u.q_change, { pay: money(pay), price: money(price) })), opts: numOpts(vals, ch) };
        }
        if (k === 1) {   /* the total of two or three things */
          var n = r() < 0.7 ? 2 : 3, names = shuffle(ITEMS.map(function (x, i) { return i; }), r).slice(0, n), prices = [], tot = 0, parts = [];
          names.forEach(function (ix) { var pr = 2 + Math.floor(r() * 38); prices.push(pr); tot += pr; parts.push(cap(ITEMS[ix][L]) + ": " + money(pr)); });
          vals = distract(tot, r, [-10, 10, -1, 1, -5, 5, -2, 2]);
          return { key: "t:" + names.map(function (ix, q) { return ix + "=" + prices[q]; }).sort().join(","), html: esc(parts.join(". ") + ". " + u.q_total), opts: numOpts(vals, tot) };
        }
        if (k === 2) {   /* how many can you buy */
          var p = pick([2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25], r), cnt = 2 + Math.floor(r() * 8), m = p * cnt + Math.floor(r() * p);
          vals = distract(cnt, r, [-1, 1, -2, 2, 3, -3, 4]);
          return { key: "m:" + p + ":" + m, html: esc(fmt(u.q_many, { a: item(), p: money(p), m: money(m) })), opts: vals.map(function (v) { return { label: String(v), ok: v === cnt }; }) };
        }
        var cost = 10 + Math.floor(r() * 81), lack = 3 + Math.floor(r() * 38), have = Math.max(1, cost - lack);   /* how much more do you need */
        lack = cost - have; vals = distract(lack, r, [-5, 5, -1, 1, -10, 10, -2, 2]);
        return { key: "o:" + cost + ":" + have, html: esc(fmt(u.q_more, { a: cap(item()), p: money(cost), h: money(have) })), opts: numOpts(vals, lack) };
      });
    }

    if (id === "coin-count") {
      var kind4 = typer(4, r);
      function makeItems(limit) {
        var items, total;
        do {
          var n = 2 + Math.floor(r() * 4); items = []; total = 0;
          for (var i = 0; i < n; i++) { var note = r() < 0.3, v = note ? pick(NOTES, r) : pick(COINS, r); items.push({ v: v, note: note }); total += v; }
        } while (total > limit);
        return { items: items, total: total, sig: items.map(function (x) { return (x.note ? "n" : "c") + x.v; }).sort().join("-") };
      }
      return fresh(id, function () {
        var k = kind4(), vals;
        if (k === 0) {   /* add up the picture */
          var a = makeItems(100); vals = distract(a.total, r, [-1, 1, -2, 2, -5, 5, -10, 10]);
          return { key: "s:" + a.sig, html: esc(u.q_coin), svg: moneySvg(a.items, ctx.lang), opts: numOpts(vals, a.total) };
        }
        if (k === 1) {   /* how much more to reach 50 or 100 */
          var b = makeItems(99), goal = b.total < 50 ? 50 : 100, need = goal - b.total;
          vals = distract(need, r, [-1, 1, -2, 2, -5, 5, -10, 10]);
          return { key: "g:" + b.sig + ">" + goal, html: esc(fmt(u.q_moreto, { g: money(goal) })), svg: moneySvg(b.items, ctx.lang), opts: numOpts(vals, need) };
        }
        if (k === 2) {   /* fewest coins and notes to pay an amount */
          var x = 11 + Math.floor(r() * 89), best = fewest(x); vals = distract(best, r, [-1, 1, -2, 2, 3, -3]);
          return { key: "f:" + x, html: esc(fmt(u.q_fewest, { x: money(x) })), opts: vals.map(function (v) { return { label: String(v), ok: v === best }; }) };
        }
        var c = pick([2, 5, 10], r), q = 3 + Math.floor(r() * 10);   /* how many coins make an amount */
        vals = distract(q, r, [-1, 1, -2, 2, 3, -3]);
        return { key: "n:" + c + ":" + q, html: esc(fmt(u.q_ncoins, { c: money(c), x: money(c * q) })), opts: vals.map(function (v) { return { label: String(v), ok: v === q }; }) };
      });
    }

    if (id === "best-buy") {
      var kind5 = typer(4, r);
      return fresh(id, function () {
        var k = kind5(), unit = r() < 0.5 ? "g" : "ml", vals;
        if (k === 0) {   /* which pack is the better buy */
          var qs = [100, 200, 250, 500, 1000], us = [0.08, 0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.4], fs = [0.8, 0.88, 1.12, 1.2, 1.3], a, b, tries = 0;
          do {
            var base = pick(us, r), qa = pick(qs, r), qb = pick(qs, r);
            a = { q: qa, p: Math.max(2, Math.round(qa * base)) }; b = { q: qb, p: Math.max(2, Math.round(qb * base * pick(fs, r))) };
          } while ((a.q === b.q || Math.abs((a.p / a.q) / (b.p / b.q) - 1) < 0.08) && tries++ < 50);
          var aBetter = a.p / a.q < b.p / b.q;
          var lab = function (x, name) { return u.pack + " " + name + ": " + x.q + " " + unit + " · ₹" + x.p; };
          return { key: "b:" + a.q + "/" + a.p + "/" + b.q + "/" + b.p, html: esc(u.q_best), wide: true, opts: [{ label: lab(a, "A"), ok: aBetter }, { label: lab(b, "B"), ok: !aBetter }] };
        }
        if (k === 1) {   /* price of 100 g */
          var qq = pick([200, 300, 400, 500, 1000], r), per = 2 + Math.floor(r() * 59), price = per * qq / 100;
          vals = distract(per, r, [-1, 1, -2, 2, 5, -5, 10]);
          return { key: "u:" + qq + ":" + price + unit, html: esc(fmt(u.q_unit, { q: qq, unit: unit, p: money(price) })), opts: numOpts(vals, per) };
        }
        if (k === 2) {   /* price after a percentage discount */
          var pr, d, tries2 = 0;
          do { pr = pick([100, 200, 250, 400, 500, 800, 1000], r); d = pick([10, 20, 25, 50], r); } while ((pr * d) % 100 !== 0 && tries2++ < 40);
          var sale = pr * (100 - d) / 100, off = pr * d / 100;
          vals = distract(sale, r, [-10, 10, -20, 20, -5, 5]);
          if (vals.indexOf(off) < 0) { var z = 0; while (vals[z] === sale) z++; vals[z] = off; }
          return { key: "p:" + pr + ":" + d, html: esc(fmt(u.q_disc, { p: money(pr), d: d })), opts: numOpts(vals, sale) };
        }
        var P = pick([100, 200, 250, 400, 500], r), D = pick([5, 10, 15, 20], r), sv = P * D / 100, F = sv, g = 0;   /* percent off or rupees off */
        while (F === sv && g++ < 20) F = Math.max(5, Math.round((sv + pick([-10, -5, 5, 10, 15], r)) / 5) * 5);
        if (F === sv) F = sv + 5;
        return { key: "d:" + P + ":" + D + ":" + F, html: esc(fmt(u.q_deal, { p: money(P) })), wide: true,
          opts: [{ label: fmt(u.offPct, { d: D }), ok: sv > F }, { label: fmt(u.offAmt, { x: F }), ok: F > sv }] };
      });
    }
    return null;
  }

  /* Five questions for the whole day, the same for every player. Each day moves on through a fixed shuffled order,
     so a question does not come back until the whole pool has been used. */
  function daily(lang, tpl) {
    var pool = quizPool(lang, tpl), r = mulberry(hash("sikka-" + today())), order = shuffle(pool.map(function (q, i) { return i; }), mulberry(hash("sikka-order")));
    var day = Math.floor(Date.parse(today() + "T00:00:00Z") / 864e5), start = (day * 5) % Math.max(1, pool.length), chosen = [];
    for (var k = 0; k < 5 && k < pool.length; k++) chosen.push(quizQ(pool[order[(start + k) % pool.length]], r));
    return chosen;
  }

  window.Games = { make: make, daily: daily, today: today, order: ["quiz-sprint", "daily-quiz", "need-or-want", "right-change", "best-buy", "scam-or-safe", "coin-count"] };
})();
