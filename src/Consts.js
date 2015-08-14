/*
* Curves:
*/
//linear easeIn easeOut easeInOut easeOutBounce spring inQuad outQuad inOutQuad inCubic outCubic inOutCubic inQuart outQuart inOutQuart inQuint outQuint inOutQuint inSine outSine inOutSine inExpo outExpo inOutExpo inCirc outCirc inOutCirc inElastic outElastic inOutElastic inBack outBack inOutBack inBounce outBounce inOutBounce


const Consts = {
	DOT_SIZE: 36,
	DOT_MARGIN: 1,

	CELL_SIZE: 21,
	CELL_MARGIN: 1,

	DIMENSION: 12,
	DURATION: 600,
	CURVE: 'outBounce',
	FIGURES: [
		[
			{//             ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 1 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 1 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 2 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 3 //     ║      ║                               //
			} //            ╚══════╝                               //
		],

		[
			{//             ╔══════╗ ╔══════╗ ╔══════╗ ╔══════╗    //
				x: 0, //    ║      ║ ║      ║ ║      ║ ║      ║    //
				y: 0 //     ║      ║ ║      ║ ║      ║ ║      ║    //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝ ╚══════╝    //
			{ //                                                   //
				x: 1, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 3, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],


		[
			{//                      ╔══════╗ ╔══════╗             //
				x: 0, //             ║      ║ ║      ║             //
				y: 1 //              ║      ║ ║      ║             //
			}, //                    ╚══════╝ ╚══════╝             //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 1, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 1 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                     ╔══════╗ ╔══════╗             //
				x: 1, //             ║      ║ ║      ║             //
				y: 0 //              ║      ║ ║      ║             //
			}, //                    ╚══════╝ ╚══════╝             //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//                      ╔══════╗                      //
				x: 0, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 2 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //            ╔══════╗                               //
				x: 1, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],


		[
			{//                      ╔══════╗                      //
				x: 0, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 1, //    ║      ║ ║      ║ ║      ║             //
				y: 0 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 1 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 2 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 0, //    ║      ║ ║      ║ ║      ║             //
				y: 0 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 0 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],

		[
			{//                      ╔══════╗                      //
				x: 0, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 1, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 0, //    ║      ║ ║      ║ ║      ║             //
				y: 1 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 1 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 2 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //                                                   //
				x: 1, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 0, //    ║      ║ ║      ║ ║      ║             //
				y: 0 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                              ╔══════╗             //
				x: 1, //                      ║      ║             //
				y: 0 //                       ║      ║             //
			}, //                             ╚══════╝             //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//                      ╔══════╗                      //
				x: 0, //             ║      ║                      //
				y: 2 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 0 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 1, //    ║      ║ ║      ║                      //
				y: 1 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 0, //    ║      ║ ║      ║ ║      ║             //
				y: 0 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 1 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //                                                   //
				x: 1, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 0 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		],

		[
			{//                               ╔══════╗             //
				x: 0, //                      ║      ║             //
				y: 1 //                       ║      ║             //
			}, //                             ╚══════╝             //
			{ //            ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 1, //    ║      ║ ║      ║ ║      ║             //
				y: 1 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 1 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 2 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		]
	],

	FIGURESCOUNT: 2,

	DOT_STATE__HOVERED: 1,
	DOT_STATE__UNTOUCHED: 0,
	DOT_STATE__PLACED: -1,

	//'#7ac74f' '#a1cf6b' '#d5d887' '#e0c879' '#e87461'
	DOT_COLOR__HOVERED: '#e87461',
	DOT_COLOR__UNTOUCHED: '#7ac74f',
	DOT_COLOR__PLACED: '#e0c879',

	DOT_CURVE__POSITION: 'inOutElastic',
	DOT_DURATION__POSITION: 800,

	DOT_CURVE__ROTATION: 'inExpo',
	DOT_DURATION__ROTATION: 800,

	SCORE__FIGURE: 2,
	SCORE__LINE: 10,
	SCORE__SURCHARGE: 0.5,

	init: function() {
		var w = document.body.clientWidth;
		var h = document.body.clientHeight;
		this.WIDTH = w;
		this.HEIGHT = h;
		var vmin = w > h ? h : w;
		if (vmin / this.DIMENSION < this.DOT_SIZE) {
			this.DOT_SIZE = vmin / this.DIMENSION - this.DOT_MARGIN;
			this.CELL_SIZE = this.DOT_SIZE * 0.8;
		}
		this.DOT_SIDE = this.DOT_SIZE + this.DOT_MARGIN;
		this.CELL_SIDE = this.CELL_SIZE + this.CELL_MARGIN,
		this.ROWS = this.DIMENSION;
		this.COLUMNS = this.DIMENSION;
		return this;
	}

}.init();

module.exports = Consts;
