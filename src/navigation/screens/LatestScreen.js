import { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../reducer/action";
import { PARAMS } from "../../static/config";

const LatestScreen = ({ navigation }) => {
  const { movies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchLatest());
  }, []);

  const itemDetailsHandler = (movie) => {
    console.log(movie)
    navigation.navigate(PARAMS.MOVIE_DETAILS, {id: movie.id})
  };

  const renderMovies = movies.map((movie) => {
    return (
      <View style={styles.item} key={movie.id}>
        <Text style={styles.text}>{movie.name}</Text>
        <TouchableOpacity style={styles.button} onPress={itemDetailsHandler.bind(this, movie)}>
          <Text style={styles.textButton}>Details</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.movies}>{renderMovies}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movies: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  item: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DC0000",
    borderRadius: 7,
    justifyContent: "space-between",
  },
  text: {
    flex: 0.7,
    marginRight: 10,
    padding: 10,
    fontSize: 30,
    fontWeight: "200",
    color: "#000000",
  },
  textButton: {
    fontSize: 20,
    padding: 10,
    fontWeight: "200",
    color: "#FFFFFF",
    textAlign: "center",
  },
  button: {
    flex: 0.3,
    marginRight: 10,
    backgroundColor: "#DC0000",
    borderRadius: 3,
  },
});

export default LatestScreen;
