import { useState } from "react";
import { Alert, FlatList, View } from "react-native";

import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Counter } from "../../components/Counter";
import { ListEmpty } from "../../components/ListEmpty";
import { ListItem, ToDo } from "../../components/ListItem";

export function Home() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  function handleAddNewTask(description: string) {
    if (!description) {
      Alert.alert("Você precisa adicionar uma descrição!");
      return;
    }
    const todo = {
      id: `${todos.length + 1}`,
      description,
      hasChecked: false,
    } as ToDo;

    setTodos(prevState => [...prevState, todo]);
  }

  function getLengthFromItensChecked(): number {
    return todos.filter(item => item.hasChecked).length;
  }

  function check(id: string) {
    setTodos(prevState => {
      return prevState.map(value => {
        if (value.id === id) {
          return {
            ...value,
            hasChecked: !value.hasChecked,
          };
        }

        return value;
      });
    });
  }

  function del(id: string) {
    setTodos(prevState => prevState.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form onAddNewTask={handleAddNewTask} />
      <Counter created={todos.length} completed={getLengthFromItensChecked()} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <ListItem data={item} onCheck={check} onDelete={del} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ marginTop: 8 }} />}
        ListEmptyComponent={ListEmpty}
      />
    </View>
  );
}
