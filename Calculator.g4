grammar Calculator;

/**
 * 1. REGLAS SINTÁCTICAS (Parser Rules)
 */

programa : funcion+ ;

funcion : tipo ID PAR_A lista_parametros? PAR_C LLAVE_A bloque LLAVE_C ;

lista_parametros : parametro (COMA parametro)* ;

parametro : tipo ID ;

tipo : INT | FLOAT | CHAR ;

bloque : instruccion* retorno ;

instruccion : ID ASIGNAR expresion POINT_COM ;

retorno : RETURN expresion POINT_COM ;

expresion : termino ((MAS | MENOS) termino)* ;

termino : factor ((MULT | DIV) factor)* ;

factor : PAR_A expresion PAR_C 
       | ID 
       | NUMERO ;


/**
 * 2. REGLAS LÉXICAS (Lexer Rules)
 */

// Palabras clave (Keywords)
INT    : 'int' ;
FLOAT  : 'float' ;
CHAR   : 'char' ;
RETURN : 'return' ;

// Símbolos y Operadores
PAR_A     : '(' ;
PAR_C     : ')' ;
LLAVE_A   : '{' ;
LLAVE_C   : '}' ;
COMA      : ',' ;
POINT_COM : ';' ;
ASIGNAR   : '=' ;
MAS       : '+' ;
MENOS     : '-' ;
MULT      : '*' ;
DIV       : '/' ;

// Expresiones regulares
ID     : [a-zA-Z] [a-zA-Z0-9]* ;
NUMERO : [0-9]+ ('.' [0-9]+)? ;

// Ignorar espacios, tabulaciones y saltos de línea
WS : [ \t\r\n]+ -> skip ;