import { List, ListItem } from "@tremor/react";

const cities = [
  {
    city: "Athens",
    rating: "2 open PR",
  },
  {
    city: "Luzern",
    rating: "1 open PR",
  },
  {
    city: "Zürich",
    rating: "0 open PR",
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
];

const ListBase = () => (
  <List className="h-52 overflow-auto">
    {cities.map((item) => (
      <ListItem key={item.city} className="p-2">
        <span>{item.city}</span>
        <span>{item.rating}</span>
      </ListItem>
    ))}
  </List>
);


export default ListBase