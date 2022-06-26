import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import WoofCard from "./WoofCard";
import Heading from "../shared/Heading";
import WoofPost from "./WoofPost";
import data from "./Data";

// The screen rendering everything
const HomeScreen = () => {
  const { woofs, posts } = data;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9FA" }}>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
