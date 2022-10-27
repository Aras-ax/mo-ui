import Table from "./table.vue";
import TableCol from "./table-col.vue";
/* istanbul ignore next */
Table.install = function(Vue) {
  Vue.component(Table.name, Table);
  Vue.component(TableCol.name, TableCol);
};

export default Table;
export { Table, TableCol };
