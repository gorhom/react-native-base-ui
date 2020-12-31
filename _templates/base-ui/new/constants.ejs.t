---
to: ./src/<%=name%>/constants.ts
---
enum <%=name.toUpperCase()%>_TYPE {
  type1 = 'type1',
  type2 = 'type2',
}

export { <%=name.toUpperCase()%>_TYPE };
