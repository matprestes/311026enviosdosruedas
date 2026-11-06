---
trigger: always_on
description: "Directrices de optimización de tokens y ejecuciones concisas"
---

# Optimización de Tokens

1. **Respuestas Concisas:** Evitar rodeos explicativos o resúmenes innecesarios de archivos no modificados.
2. **Edición Quirúrgica:** Emplear `edit_file` con el bloque exacto en lugar de sobrescribir archivos completos.
3. **Lecturas Focalizadas:** Usar `StartLine` y `EndLine` en `read_file` al consultar código fuente extenso.
4. **Comandos Directos:** Evitar comandos exploratorios reiterativos (`ls`, `dir`) cuando los archivos ya son conocidos.
