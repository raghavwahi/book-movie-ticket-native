import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { PARAMS } from "../../static/config";

const DetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { movies } = useSelector((store) => store.movies);
  const movie = movies.find((movie) => {
    return movie.id == id;
  });

  const bookingDetailsHandler = (movie) => {
    console.log(movie);
    navigation.navigate(PARAMS.BOOKING_DETAILS, { id: movie.id });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          source={{
            uri: movie.imageUrl,
          }}
        />
        <View style={styles.details}>
          <View style={styles.subDetails}>
            <Text style={styles.title}>{movie.name}</Text>
            <Text style={styles.releaseDate}>{new Date().toDateString()}</Text>
          </View>
          <Text style={styles.duration}>Duration: 146 Minutes</Text>
          <Text style={styles.rating}>Rating: {movie.rate} / 5</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={bookingDetailsHandler.bind(this, movie)}
      >
        <Text style={styles.textButton}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1,
  },
  subContainer: {
    flexDirection: "row",
  },
  details: {
    flex: 1,
    flexDirection: "column",
    borderLeftColor: "black",
    borderLeftWidth: 1,
  },
  subDetails: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    flex: 0.4,
  },
  image: {
    width: 307 / 3,
    height: 455 / 3,
  },
  title: {
    flex: 0.6,
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
  },
  releaseDate: {
    flex: 0.4,
    fontSize: 15,
    borderLeftColor: "black",
    borderLeftWidth: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
  duration: {
    flex: 0.3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
  },
  rating: {
    flex: 0.3,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
  },
  textButton: {
    fontSize: 20,
    padding: 10,
    fontWeight: "200",
    color: "#FFFFFF",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#DC0000",
  },
});

export default DetailsScreen;
