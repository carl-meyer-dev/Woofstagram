import * as React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Basic reusable components

const Avatar = (props) => (
  <Image style={styles.avatar} source={{ uri: props.url }} />
);

const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const Title = (props) => <Text style={styles.title}>{props.children}</Text>;

const styles = StyleSheet.create({
  avatar: {
    width: 64,
    height: 64,
    margin: 12,
    borderRadius: 64 / 2,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

// App-specific components

const WoofCard = (props) => (
  <View style={[woofCardStyles.card, woofCardStyles.boxShadow]}>
    <Avatar url={props.avatar} />
    <View style={woofCardStyles.title}>
      <Title>{props.name}</Title>
    </View>
  </View>
);

const woofCardStyles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: "white",
    width: 88,
    height: 122,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    marginRight: 16,
  },
  boxShadow:{
    shadowColor: '#E7E3EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5
  },
  title: {
    textAlign: "center",
  },
});

const WoofPost = ({ image, title, description }) => (
  <View style={woofPostStyles.layout}>
    <Image style={woofPostStyles.image} source={{ uri: image }} />
    <View style={woofPostStyles.content}>
      <Title style={woofPostStyles.title}>{title}</Title>
      <Text style={woofPostStyles.description} numberOfLines={2}>
        {description}
      </Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    marginBottom: 12,
    flexDirection: "row",
  },
  image: {
    flex: 1,
    borderRadius: 20,
    height: 80,
  },
  content: {
    flex: 2,
    marginLeft: 12,
    justifyContent: "center",
  },
  title: {},
  description: {
    marginTop: 6,
  },
});

// The screen rendering everything
const HomeScreen = (props) => {
  const { woofs, posts } = props.data;
  const renderItem = ({ woof }) => (
    <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />
  );

  return (
    <ScrollView
      style={{ paddingLeft: 24, paddingRight: 24 }}
      showsVerticalScrollIndicator={false}
    >
      <Heading>Trending Woofs</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {woofs.map((woof) => (
          <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />
        ))}
      </ScrollView>
      <Heading>New Woof Posts</Heading>
      {posts.map((post) => (
        <WoofPost
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))}
    </ScrollView>
  );
};

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9FA" }}>
    <HomeScreen data={data} />
  </SafeAreaView>
);

export default App;

// "Fake" API data to use in your app
const data = {
  woofs: [
    {
      id: "woof-1",
      name: "Rex",
      avatar:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80",
      caretaker: "Victor Grabarczyk",
      source: "https://unsplash.com/photos/x5oPmHmY3kQ",
    },
    {
      id: "woof-2",
      name: "Ball",
      avatar:
        "https://images.unsplash.com/photo-1585584114963-503344a119b0?auto=format&fit=crop&h=64&q=80",
      caretaker: "Tatiana Rodriguez",
      source: "https://unsplash.com/photos/J40C1k6Fut0",
    },
    {
      id: "woof-3",
      name: "Happy",
      avatar:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80",
      caretaker: "Marliese Streefland",
      source: "https://unsplash.com/photos/2l0CWTpcChI",
    },
    {
      id: "woof-4",
      name: "Fluffy",
      avatar:
        "https://images.unsplash.com/photo-1554956615-1ba6dc39921b?auto=format&fit=crop&h=64&q=80",
      caretaker: "Nick Fewings",
      source: "https://unsplash.com/photos/rMKXLAIa2OY",
    },
    {
      id: "woof-5",
      name: "Spirit",
      avatar:
        "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&h=64&q=80",
      caretaker: "Jamie Street",
      source: "https://unsplash.com/photos/uNNCs5kL70Q",
    },
  ],
  posts: [
    {
      id: "post-1",
      image:
        "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80",
      title: "Happy Woofs",
      description:
        "How to keep your woof health and happy. We've asked some of the best experts out there.",
      caretaker: "Jamie Street",
      source: "https://unsplash.com/photos/UtrE5DcgEyg",
    },
    {
      id: "post-2",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80",
      title: "Woofs & friends",
      description: "Best friends are important for humans, but also for dogs.",
      caretaker: "Krista Mangulsone",
      source: "https://unsplash.com/photos/9gz3wfHr65U",
    },
    {
      id: "post-3",
      image:
        "https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80",
      title: "Good Woofs",
      description:
        "A good woof is a woof that brings joy. Here are a few tips to let your woof behave.",
      caretaker: "Olia Nayda",
      source: "https://unsplash.com/photos/f6v_Q0WXEK8",
    },
    {
      id: "post-4",
      image:
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80",
      title: "Wild Woofs",
      description:
        "In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.",
      caretaker: "Anoir Chafik",
      source: "https://unsplash.com/photos/2_3c4dIFYFU",
    },
    {
      id: "post-5",
      image:
        "https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80",
      title: "Sleepy Woofs",
      description:
        "Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.",
      caretaker: "Max Singh",
      source: "https://unsplash.com/photos/2637Pic9xMw",
    },
    {
      id: "post-6",
      image:
        "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80",
      title: "Exploring Woofs",
      description:
        "Just sitting in one place is boring for most woofs. How do woofs explore the world?",
      caretaker: "Jamie Street",
      source: "https://unsplash.com/photos/wcO2PWLuQ3U",
    },
  ],
};
