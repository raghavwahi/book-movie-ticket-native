import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";

const BookingScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { movies } = useSelector((store) => store.movies);
  const movie = movies.find((movie) => {
    return movie.id == id;
  });

  const date = new Date();
  date.setDate(date.getDate() + 2);

  const bookedTicketsHandler = () =>
    Alert.alert("Success", `Booking confirmed for movie ${movie.name}`, [
      { text: "OK" },
    ]);

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
          <Text style={styles.title}>{movie.name}</Text>
          <Text style={styles.bookingDate}>
            Booking Date: {date.toDateString()}
          </Text>
          <Text style={styles.tickets}>No. of tickets: 2</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={bookedTicketsHandler}>
        <Text style={styles.textButton}>Submit</Text>
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
  image: {
    width: 307 / 3,
    height: 455 / 3,
  },
  title: {
    flex: 0.3,
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  bookingDate: {
    flex: 0.3,
    fontSize: 15,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
  tickets: {
    flex: 0.4,
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

export default BookingScreen;
