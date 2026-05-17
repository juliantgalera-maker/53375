// Generated from c:/Users/Julian/Desktop/ssl-antlr-calculator-main/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,18,93,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,12,
0,25,1,1,1,1,1,1,1,1,3,1,32,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,42,8,
2,10,2,12,2,45,9,2,1,3,1,3,1,3,1,4,1,4,1,5,5,5,53,8,5,10,5,12,5,56,9,5,1,
5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,5,8,72,8,8,10,8,12,
8,75,9,8,1,9,1,9,1,9,5,9,80,8,9,10,9,12,9,83,9,9,1,10,1,10,1,10,1,10,1,10,
1,10,3,10,91,8,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,3,1,0,1,3,1,
0,12,13,1,0,14,15,89,0,23,1,0,0,0,2,27,1,0,0,0,4,38,1,0,0,0,6,46,1,0,0,0,
8,49,1,0,0,0,10,54,1,0,0,0,12,59,1,0,0,0,14,64,1,0,0,0,16,68,1,0,0,0,18,
76,1,0,0,0,20,90,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,25,1,0,0,0,25,23,
1,0,0,0,25,26,1,0,0,0,26,1,1,0,0,0,27,28,3,8,4,0,28,29,5,16,0,0,29,31,5,
5,0,0,30,32,3,4,2,0,31,30,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,6,
0,0,34,35,5,7,0,0,35,36,3,10,5,0,36,37,5,8,0,0,37,3,1,0,0,0,38,43,3,6,3,
0,39,40,5,9,0,0,40,42,3,6,3,0,41,39,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,
43,44,1,0,0,0,44,5,1,0,0,0,45,43,1,0,0,0,46,47,3,8,4,0,47,48,5,16,0,0,48,
7,1,0,0,0,49,50,7,0,0,0,50,9,1,0,0,0,51,53,3,12,6,0,52,51,1,0,0,0,53,56,
1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,3,
14,7,0,58,11,1,0,0,0,59,60,5,16,0,0,60,61,5,11,0,0,61,62,3,16,8,0,62,63,
5,10,0,0,63,13,1,0,0,0,64,65,5,4,0,0,65,66,3,16,8,0,66,67,5,10,0,0,67,15,
1,0,0,0,68,73,3,18,9,0,69,70,7,1,0,0,70,72,3,18,9,0,71,69,1,0,0,0,72,75,
1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,17,1,0,0,0,75,73,1,0,0,0,76,81,3,
20,10,0,77,78,7,2,0,0,78,80,3,20,10,0,79,77,1,0,0,0,80,83,1,0,0,0,81,79,
1,0,0,0,81,82,1,0,0,0,82,19,1,0,0,0,83,81,1,0,0,0,84,85,5,5,0,0,85,86,3,
16,8,0,86,87,5,6,0,0,87,91,1,0,0,0,88,91,5,16,0,0,89,91,5,17,0,0,90,84,1,
0,0,0,90,88,1,0,0,0,90,89,1,0,0,0,91,21,1,0,0,0,7,25,31,43,54,73,81,90];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'int'", "'float'", "'char'", "'return'", 
                            "'('", "')'", "'{'", "'}'", "','", "';'", "'='", 
                            "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "INT", "FLOAT", "CHAR", "RETURN", "PAR_A", 
                             "PAR_C", "LLAVE_A", "LLAVE_C", "COMA", "POINT_COM", 
                             "ASIGNAR", "MAS", "MENOS", "MULT", "DIV", "ID", 
                             "NUMERO", "WS" ];
    static ruleNames = [ "programa", "funcion", "lista_parametros", "parametro", 
                         "tipo", "bloque", "instruccion", "retorno", "expresion", 
                         "termino", "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.funcion();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.tipo();
	        this.state = 28;
	        this.match(CalculatorParser.ID);
	        this.state = 29;
	        this.match(CalculatorParser.PAR_A);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 30;
	            this.lista_parametros();
	        }

	        this.state = 33;
	        this.match(CalculatorParser.PAR_C);
	        this.state = 34;
	        this.match(CalculatorParser.LLAVE_A);
	        this.state = 35;
	        this.bloque();
	        this.state = 36;
	        this.match(CalculatorParser.LLAVE_C);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_parametros() {
	    let localctx = new Lista_parametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_lista_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.parametro();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 39;
	            this.match(CalculatorParser.COMA);
	            this.state = 40;
	            this.parametro();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.tipo();
	        this.state = 47;
	        this.match(CalculatorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 51;
	            this.instruccion();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(CalculatorParser.ID);
	        this.state = 60;
	        this.match(CalculatorParser.ASIGNAR);
	        this.state = 61;
	        this.expresion();
	        this.state = 62;
	        this.match(CalculatorParser.POINT_COM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(CalculatorParser.RETURN);
	        this.state = 65;
	        this.expresion();
	        this.state = 66;
	        this.match(CalculatorParser.POINT_COM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.termino();
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12 || _la===13) {
	            this.state = 69;
	            _la = this._input.LA(1);
	            if(!(_la===12 || _la===13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 70;
	            this.termino();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_termino);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.factor();
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 77;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 78;
	            this.factor();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CalculatorParser.RULE_factor);
	    try {
	        this.state = 90;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.match(CalculatorParser.PAR_A);
	            this.state = 85;
	            this.expresion();
	            this.state = 86;
	            this.match(CalculatorParser.PAR_C);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.match(CalculatorParser.ID);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.match(CalculatorParser.NUMERO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.INT = 1;
CalculatorParser.FLOAT = 2;
CalculatorParser.CHAR = 3;
CalculatorParser.RETURN = 4;
CalculatorParser.PAR_A = 5;
CalculatorParser.PAR_C = 6;
CalculatorParser.LLAVE_A = 7;
CalculatorParser.LLAVE_C = 8;
CalculatorParser.COMA = 9;
CalculatorParser.POINT_COM = 10;
CalculatorParser.ASIGNAR = 11;
CalculatorParser.MAS = 12;
CalculatorParser.MENOS = 13;
CalculatorParser.MULT = 14;
CalculatorParser.DIV = 15;
CalculatorParser.ID = 16;
CalculatorParser.NUMERO = 17;
CalculatorParser.WS = 18;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_funcion = 1;
CalculatorParser.RULE_lista_parametros = 2;
CalculatorParser.RULE_parametro = 3;
CalculatorParser.RULE_tipo = 4;
CalculatorParser.RULE_bloque = 5;
CalculatorParser.RULE_instruccion = 6;
CalculatorParser.RULE_retorno = 7;
CalculatorParser.RULE_expresion = 8;
CalculatorParser.RULE_termino = 9;
CalculatorParser.RULE_factor = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_funcion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	PAR_A() {
	    return this.getToken(CalculatorParser.PAR_A, 0);
	};

	PAR_C() {
	    return this.getToken(CalculatorParser.PAR_C, 0);
	};

	LLAVE_A() {
	    return this.getToken(CalculatorParser.LLAVE_A, 0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	LLAVE_C() {
	    return this.getToken(CalculatorParser.LLAVE_C, 0);
	};

	lista_parametros() {
	    return this.getTypedRuleContext(Lista_parametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Lista_parametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_lista_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.COMA);
	    } else {
	        return this.getToken(CalculatorParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterLista_parametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitLista_parametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitLista_parametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_tipo;
    }

	INT() {
	    return this.getToken(CalculatorParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(CalculatorParser.FLOAT, 0);
	};

	CHAR() {
	    return this.getToken(CalculatorParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_bloque;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	ASIGNAR() {
	    return this.getToken(CalculatorParser.ASIGNAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	POINT_COM() {
	    return this.getToken(CalculatorParser.POINT_COM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_retorno;
    }

	RETURN() {
	    return this.getToken(CalculatorParser.RETURN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	POINT_COM() {
	    return this.getToken(CalculatorParser.POINT_COM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	MAS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.MAS);
	    } else {
	        return this.getToken(CalculatorParser.MAS, i);
	    }
	};


	MENOS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.MENOS);
	    } else {
	        return this.getToken(CalculatorParser.MENOS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_termino;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.MULT);
	    } else {
	        return this.getToken(CalculatorParser.MULT, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.DIV);
	    } else {
	        return this.getToken(CalculatorParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_factor;
    }

	PAR_A() {
	    return this.getToken(CalculatorParser.PAR_A, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PAR_C() {
	    return this.getToken(CalculatorParser.PAR_C, 0);
	};

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.FuncionContext = FuncionContext; 
CalculatorParser.Lista_parametrosContext = Lista_parametrosContext; 
CalculatorParser.ParametroContext = ParametroContext; 
CalculatorParser.TipoContext = TipoContext; 
CalculatorParser.BloqueContext = BloqueContext; 
CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.RetornoContext = RetornoContext; 
CalculatorParser.ExpresionContext = ExpresionContext; 
CalculatorParser.TerminoContext = TerminoContext; 
CalculatorParser.FactorContext = FactorContext; 
