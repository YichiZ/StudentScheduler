from Student import Student
import json

classList = []
studentList = []
Candelario = Student(1)
studentList.append(Candelario)

with open('studentsByAvailability.json') as data_file:
	data = json.load(data_file)

	for key, value in data.iteritems():
		student = Student(key)
		for items in value:

			if type(items) is unicode:
				print items

			if type(items) is dict:
				for key, value in items.iteritems():
					print key
					print value["day"]
					print value["start"]
					print value["end"]






