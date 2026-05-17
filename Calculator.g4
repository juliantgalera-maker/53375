grammar Calculator;

/**
 * 1. REGLAS SINTÁCTICAS (Parser Rules)
 */

// <programa> ::= {<funcion>} 
programa : funcion+ ;

// <funcion> ::= <tipo> <identificador> '(' [<lista_parametros>] ')' '{' <bloque> '}'
funcion : tipo ID '(' lista_parametros? ')' '{' bloque '}' ;

// <lista_parametros> ::= <parametro> { ',' <parametro> }
lista_parametros : parametro (',' parametro)* ;

// <parametro> ::= <tipo> <identificador>
parametro : tipo ID ;

// <tipo> ::= 'int' | 'float' | 'char'
tipo : 'int' | 'float' | 'char' ;

// <bloque> ::= {<instruccion>} <retorno>
bloque : instruccion* retorno ;

// <instruccion> ::= <identificador> '=' <expresion> ';'
instruccion : ID '=' expresion ';' ;

// <retorno> ::= 'return' <expresion> ';'
retorno : 'return' expresion ';' ;

// <expresion> ::= <termino> { ('+' | '-') <termino> }
expresion : termino (('+' | '-') termino)* ;

// <termino> ::= <factor> { ('*' | '/') <factor> }
termino : factor (('*' | '/') factor)* ;

// <factor> ::= '(' <expresion> ')' | <identificador> | <numero>
factor : '(' expresion ')' 
       | ID 
       | NUMERO ;


/**
 * 2. REGLAS LÉXICAS (Lexer Rules)
 * Los nombres deben empezar con MAYÚSCULA.
 */

// <identificador> ::= <letra> { <letra> | <digito> }
ID : [a-zA-Z] [a-zA-Z0-9]* ;

// <numero> ::= <digito> { <digito> } [ '.' <digito> { <digito> } ]
NUMERO : [0-9]+ ('.' [0-9]+)? ;

// Ignorar espacios, tabulaciones y saltos de línea
WS : [ \t\r\n]+ -> skip ;