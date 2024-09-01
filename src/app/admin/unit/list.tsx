import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const UnitList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <ReferenceField reference="courses" source="courseId" />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
