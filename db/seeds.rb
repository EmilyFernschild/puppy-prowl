# require 'faker'

Client.destroy_all 
Dog.destroy_all
Walker.destroy_all
Appointment.destroy_all
Review.destroy_all

puts "🌱 Seeding data..."

puts "Seeding clients..."
c1 = Client.create(client_name: "Susie Jones", username: "SusieQ", password_digest: "Password1", email: "email@gmail.com", address: "14 Cherry St., Monroe, CT", phone_number: "203-679-5683")
c2 = Client.create(client_name: "John Davis", username: "JohnD", password_digest: "Password2", email: "123@gmail.com", address: "123 Apple St., Monroe, CT", phone_number: "203-835-5346")
c3 = Client.create(client_name: "Becky Thompson", username: "BThom", password_digest: "Password3", email: "bthom@gmail.com", address: "14 Pear St., Monroe, CT", phone_number: "203-264-8653")
c4 = Client.create(client_name: "Derek White", username: "DWhite", password_digest: "Password4", email: "dwhite@gmail.com", address: "14 Peach St., Trumbull, CT", phone_number: "203-234-5854")

puts "Seeding dogs..."

d1 = Dog.create(
        dog_image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
        dog_name: "Abby",
        gender: "Female",
        age: "Puppy", 
        size: "Medium",
        client_id: c4.id,
    )
d2 = Dog.create(
        dog_image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        dog_name: "Rusty",
        gender: "Male",
        age: "Adult", 
        size: "Large",
        client_id: c2.id,
    )
d3 = Dog.create(
        dog_image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        dog_name: "Diamond",
        gender: "Female",
        age: "Adult", 
        size: "Small",
        client_id: c1.id,
    )
d4 = Dog.create(
        dog_image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
        dog_name: "Gracie",
        gender: "Female",
        age: "Puppy", 
        size: "Large",
        client_id: c2.id,
    )
d5 = Dog.create(
        dog_image: "https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        dog_name: "Mia",
        gender: "Female",
        age: "Puppy", 
        size: "Large",
        client_id: c4.id,
    )
d6 = Dog.create(
        dog_image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        dog_name: "Sophie",
        gender: "Female",
        age: "Adult", 
        size: "Medium",
        client_id: c3.id,
    )
# d7 = Dog.create(
#         dog_image: "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
#         dog_name: Faker::Creature::Dog.name,
#         gender: Faker::Creature::Dog.gender,
#         age: Faker::Creature::Dog.age, 
#         size: Faker::Creature::Dog.size,
#         client_id: c2.id,
#     )
# d8 = Dog.create(
#         dog_image: "https://images.unsplash.com/photo-1617129724623-84f1d2fd78f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
#         dog_name: Faker::Creature::Dog.name,
#         gender: Faker::Creature::Dog.gender,
#         age: Faker::Creature::Dog.age, 
#         size: Faker::Creature::Dog.size,
#         client_id: c1.id,
#     )
# d9 = Dog.create(
#         dog_image: "https://images.unsplash.com/photo-1560781854-d3d74a1ba2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
#         dog_name: Faker::Creature::Dog.name,
#         gender: Faker::Creature::Dog.gender,
#         age: Faker::Creature::Dog.age, 
#         size: Faker::Creature::Dog.size,
#         client_id: c4.id,
#     )
# d10 = Dog.create(
#         dog_image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
#         dog_name: Faker::Creature::Dog.name,
#         gender: Faker::Creature::Dog.gender,
#         age: Faker::Creature::Dog.age, 
#         size: Faker::Creature::Dog.size,
#         client_id: c1.id,
#     )
# d11 = Dog.create(
#         dog_image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
#         dog_name: Faker::Creature::Dog.name,
#         gender: Faker::Creature::Dog.gender,
#         age: Faker::Creature::Dog.age, 
#         size: Faker::Creature::Dog.size,
#         client_id: c2.id,
#     )


puts "Seeding Walkers..."

w1 = Walker.create(walker_name: "Joanna Windler", walker_email: "JWindler@puppyprowl.com", location: "Monroe, CT", rates: rand(35..45), services: "Dog Walking, Dog Training")
w2 = Walker.create(walker_name: "Gianna Crooks", walker_email: "GCrooks@puppyprowl.com", location: "Monroe, CT", rates: rand(25..35), services: "Dog Walking")

puts "Seeding Appointments..."
 #=> appointment format maybe? "October 21, 2018 20:47"
a1 = Appointment.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), number_of_dogs: rand(1..3), group_walks: false, appointment: "2022-12-8T12:30:00.000Z") 
a2 = Appointment.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), number_of_dogs: rand(1..3), group_walks: false, appointment: "2022-12-8T11:15:00.000Z") 
a3 = Appointment.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), number_of_dogs: rand(1..3), group_walks: false, appointment: "2022-12-8T11:30:00.000Z") 

puts "Seeding Reviews..."

r1 = Review.create(client_id: rand(c1.id..c4.id), walker_id: w1.id, date: "2022-12-7T12:25:00.000Z", comment: "Best dog walker I have tried! My dog is much more well behaved on walks now. 10/10 would recommend!")
r2 = Review.create(client_id: rand(c1.id..c4.id), walker_id: w1.id, date: "2022-12-8T11:15:00.000Z", comment: "Such a great dog walker! Very professional and always treats my dogs with such great care!")
r3 = Review.create(client_id: rand(c1.id..c4.id), walker_id: w2.id, date: "2022-12-5T10:30:00.000Z", comment: "Greatest dog walker ever!! My dogs are happy and so am I!")

puts "Done Seeding"