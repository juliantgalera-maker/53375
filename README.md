# Analizador Sintáctico y Traductor de Calculadora (C Simplificado)

Este proyecto consiste en un sistema de análisis léxico, sintáctico y de traducción para una versión simplificada del lenguaje C. Está desarrollado utilizando **ANTLR4** y **JavaScript (Node.js)** en su versión ESM (ECMAScript Modules).

---

## 🚀 Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado en tu sistema:

*   **Node.js**: Versión 16 o superior.
*   **Java Runtime Environment (JRE)**: Necesario para que el motor de ANTLR4 pueda compilar la gramática.
*   **Herramienta ANTLR4** (o la extensión *ANTLR4 code support* para VS Code): Recomendado para la generación automática del Lexer y Parser.

---

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/juliantgalera-maker/53375
   cd 53375/
   
```

2. **Instalar las dependencias de Node.js:**
   ```bash
   npm install
   
```

## 💻 Ejecución

El programa lee por defecto el archivo `input.txt` ubicado en la raíz del proyecto.

Para procesar el archivo y ver los resultados del análisis, ejecuta:

```bash
npm start
```

## 📂 Archivos de Prueba Incluidos

El repositorio contiene múltiples archivos de prueba listos para renombrar o copiar en tu `input.txt` y verificar el comportamiento del analizador:

| Archivo | Tipo de Prueba | Descripción |
| :--- | :--- | :--- |
| `input_ok1.txt` | **Válido (OK)** | Función básica con operaciones aritméticas y asignaciones puras. |
| `input_ok2.txt` | **Válido (OK)** | Ejemplo con múltiples parámetros y precedencia de operadores. |
| `input_incorrecto1.txt` | **Error Sintáctico** | Intento de declaración de tipos locales (`int`, `float`) dentro del bloque. |
| `input_incorrecto2.txt` | **Error Sintáctico** | Sentencias de asignación colocadas *después* del token `return`. |

---

## ⚙️ Funcionalidades del Sistema

El programa ejecuta de forma secuencial y automática las siguientes tareas:

*   **Análisis Léxico y Sintáctico:** Verifica la validez del código. En caso de fallar, informa el número de línea y el token exacto que causó el conflicto.
*   **Árbol de Derivación:** Imprime en la consola la estructura jerárquica y el orden de reconocimiento textual del árbol sintáctico (`LISP-style tree`).
*   **Recorrido con Visitor:** Utiliza una clase personalizada (`CustomCalculatorVisitor`) para recorrer de manera selectiva los nodos del árbol y ejecutar la lógica interna o traducción del código procesado.