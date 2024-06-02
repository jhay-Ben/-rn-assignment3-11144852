import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';

const TaskItem = ({ title, tasks, imageUrl, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.taskItem}>
    <View style={styles.taskTitleContainer}>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskCount}>{tasks} Tasks</Text>
    </View>
    <Image
      source={imageUrl}
      style={styles.taskImage}
    />
  </TouchableOpacity>
);

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [tasks, setTasks] = useState([
    {
      title: 'Exercise',
      tasks: 12,
      imageUrl: './icons/young woman working at desk.png', 
    },
    {
      title: 'Study',
      tasks: 12,
      imageUrl: './icons/young woman working online.png', 
    },
    {
      title: 'Work',
      tasks: 12,
      imageUrl: './icons/young woman working online.png', 
    },
    {
      title: 'Sleep',
      tasks: 12,
      imageUrl: './icons/young woman working online.png', 
    },
    {
      title: 'Code',
      tasks: 12,
      imageUrl: './icons/young woman working online.png', 
    },
    {
      title: 'Cook',
      tasks: 12,
      imageUrl: './icons/young woman working online.png', 
    },
    {
      title: 'Eat',
      tasks: 12,
      imageUrl: './icons/young woman working online.png', 
    },
    {
      title: 'Church',
      tasks: 12,
      imageUrl: './icons/young woman working online.png', 
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, Devs</Text>
        <Image
          source={require('./icons/Profile Image.png')} 
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.subHeaderText}>14 tasks today</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Image
          source={require('./icons/Vector.png')} 
          style={styles.searchIcon}
        />
        <TouchableOpacity style={styles.filterButton}>
        <Image
          source={require('./icons/Filter.png')} 
        />
    
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            tasks={item.tasks}
            imageUrl={require('./icons/young woman working online.png')}
          />
        )}
        keyExtractor={item => item.title}
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tasksContainer}
      />
      <ScrollView>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <View style={styles.taskDetailsContainer}>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Mobile App Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Web Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Assignments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Study for Upcoming Exams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Attend Classes and Lectures</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Join Study Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Engage in Extracurricular Activities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Take Breaks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Take a Stroll</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Talk with friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Eat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Wash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Pray</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskDetail}>
          <Text style={styles.taskDetailText}>Sleep</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FBF9F7',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 0,
    marginTop: -25,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FBF9F7',
    position: 'relative',
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 35,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
    position: 'absolute',
    left: 10,
  },
  filterButton: {
    marginLeft: 10,
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  tasksContainer: {
    paddingHorizontal: 20,
  },
  taskItem: {
    width: 186,
    height: 400,
    marginRight: 10,
    paddingHorizontal: 5, // Adjust as needed
    marginBottom: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  taskTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#FBF9F7',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 14,
    color: '#888',
  },
  taskImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  taskDetailsContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  taskDetail: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  taskDetailText: {
    fontSize: 16,
  },
});

export default App;
