/**
 * Server Layer
 */
var Hapi = require('hapi');
var server = new Hapi.Server(3666);


server.route({ method: 'GET', path: '/',
    handler: function (request, reply) {
        reply({data:'But therein, as I found, dwelt now John Field, an\r\nIrishman, and his wife, and several children, from the broad-faced boy\r\nwho assisted his father at his work, and now came running by his\r\nside from the bog to escape the rain, to the wrinkled, sibyl-like,\r\ncone-headed infant that sat upon its father\'s knee as in the palaces\r\nof nobles, and looked out from its home in the midst of wet and hunger\r\ninquisitively upon the stranger, with the privilege of infancy, not\r\nknowing but it was the last of a noble line, and the hope and cynosure\r\nof the world, instead of John Field\'s poor starveling brat. There we sat\r\ntogether under that part of the roof which leaked the least, while it\r\nshowered and thundered without. I had sat there many times of old\r\nbefore the ship was built that floated his family to America. An honest,\r\nhard-working, but shiftless man plainly was John Field; and his wife,\r\nshe too was brave to cook so many successive dinners in the recesses of\r\nthat lofty stove; with round greasy face and bare breast, still thinking\r\nto improve her condition one day; with the never absent mop in one hand,\r\nand yet no effects of it visible anywhere. The chickens, which had also\r\ntaken shelter here from the rain, stalked about the room like members\r\nof the family, too humanized, methought, to roast well. They stood and\r\nlooked in my eye or pecked at my shoe significantly. Meanwhile my\r\nhost told me his story, how hard he worked \"bogging\" for a neighboring\r\nfarmer, turning up a meadow with a spade or bog hoe at the rate of ten\r\ndollars an acre and the use of the land with manure for one year, and\r\nhis little broad-faced son worked cheerfully at his father\'s side the\r\nwhile, not knowing how poor a bargain the latter had made. I tried to\r\nhelp him with my experience, telling him that he was one of my nearest\r\nneighbors, and that I too, who came a-fishing here, and looked like a\r\nloafer, was getting my living like himself; that I lived in a tight,\r\nlight, and clean house, which hardly cost more than the annual rent of\r\nsuch a ruin as his commonly amounts to; and how, if he chose, he might\r\nin a month or two build himself a palace of his own; that I did not use\r\ntea, nor coffee, nor butter, nor milk, nor fresh meat, and so did not\r\nhave to work to get them; again, as I did not work hard, I did not have\r\nto eat hard, and it cost me but a trifle for my food; but as he began\r\nwith tea, and coffee, and butter, and milk, and beef, he had to work\r\nhard to pay for them, and when he had worked hard he had to eat hard\r\nagain to repair the waste of his system--and so it was as broad as\r\nit was long, indeed it was broader than it was long, for he was\r\ndiscontented and wasted his life into the bargain; and yet he had rated\r\nit as a gain in coming to America, that here you could get tea, and\r\ncoffee, and meat every day. But the only true America is that country\r\nwhere you are at liberty to pursue such a mode of life as may enable you\r\nto do without these, and where the state does not endeavor to compel\r\nyou to sustain the slavery and war and other superfluous expenses\r\nwhich directly or indirectly result from the use of such things. For I\r\npurposely talked to him as if he were a philosopher, or desired to be\r\none. I should be glad if all the meadows on the earth were left in a\r\nwild state, if that were the consequence of men\'s beginning to redeem\r\nthemselves. A man will not need to study history to find out what is\r\nbest for his own culture. But alas! the culture of an Irishman is an\r\nenterprise to be undertaken with a sort of moral bog hoe. I told him,\r\nthat as he worked so hard at bogging, he required thick boots and stout\r\nclothing, which yet were soon soiled and worn out, but I wore light\r\nshoes and thin clothing, which cost not half so much, though he might\r\nthink that I was dressed like a gentleman (which, however, was not the\r\ncase), and in an hour or two, without labor, but as a recreation, I\r\ncould, if I wished, catch as many fish as I should want for two days, or\r\nearn enough money to support me a week. If he and his family would\r\nlive simply, they might all go a-huckleberrying in the summer for their\r\namusement. John heaved a sigh at this, and his wife stared with arms\r\na-kimbo, and both appeared to be wondering if they had capital enough to\r\nbegin such a course with, or arithmetic enough to carry it through. It\r\nwas sailing by dead reckoning to them, and they saw not clearly how to\r\nmake their port so; therefore I suppose they still take life bravely,\r\nafter their fashion, face to face, giving it tooth and nail, not having\r\nskill to split its massive columns with any fine entering wedge, and\r\nrout it in detail;--thinking to deal with it roughly, as one\r\nshould handle a thistle. But they fight at an overwhelming\r\ndisadvantage--living, John Field, alas! without arithmetic, and failing\r\nso.'});
    }
});



/**
 * Start the Server!
 */
server.start(function () {
    console.log('Server running at:', server.info.uri);
});

process.on('message', function(msg) {
  if (msg == 'shutdown') {
    console.log('Hapi Server received shutdown event, waiting for close');

    var timer = setTimeout(function () {
      console.log('Hapi Server killed anyway after timeout');
      process.exit(1);
    }, 1000);

    server.stop({}, function () {
      clearTimeout(timer);
      console.log('Hapi Server successfully stopped');
      process.exit(0);
    });
  }
});

module.exports = server;