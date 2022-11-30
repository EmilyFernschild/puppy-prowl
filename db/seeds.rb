# require 'faker'

Client.destroy_all 
Dog.destroy_all
Walker.destroy_all
Appointment.destroy_all
Review.destroy_all

puts "🌱 Seeding data..."

puts "Seeding clients..."
c1 = Client.create(client_name: Faker::Name.unique.name, username: Faker::Internet.unique.username, password_digest: "Password1", email: Faker::Internet.unique.email, address: "#{Faker::Address.street_address}, Monroe, CT", phone_number: "#{Faker::PhoneNumber.cell_phone}")
c2 = Client.create(client_name: Faker::Name.unique.name, username: Faker::Internet.unique.username, password_digest: "Password2", email: Faker::Internet.unique.email, address: "#{Faker::Address.street_address}, Monroe, CT", phone_number: "#{Faker::PhoneNumber.cell_phone}")
c3 = Client.create(client_name: Faker::Name.unique.name, username: Faker::Internet.unique.username, password_digest: "Password3", email: Faker::Internet.unique.email, address: "#{Faker::Address.street_address}, Monroe, CT", phone_number: "#{Faker::PhoneNumber.cell_phone}")
c4 = Client.create(client_name: Faker::Name.unique.name, username: Faker::Internet.unique.username, password_digest: "Password4", email: Faker::Internet.unique.email, address: "#{Faker::Address.street_address}, Trumbull, CT", phone_number: "#{Faker::PhoneNumber.cell_phone}")

puts "Seeding dogs..."

dog_img = ["https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80", "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80", "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"]

10.times do 
    dog = Dog.create(
        dog_image: dog_img.sample,
        dog_name: Faker::Creature::Dog.name,
        gender: Faker::Creature::Dog.gender,
        age: Faker::Creature::Dog.age, 
        size: Faker::Creature::Dog.size,
        client_id: rand(c1.id..c4.id)
    )
end

puts "Seeding Walkers..."

w1 = Walker.create(walker_name: "Joanna Windler", walker_email: Faker::Internet.unique.email, location: "Monroe, CT", rates: rand(35..45), services: "Dog Walking, Dog Training", walker_img:"https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
w2 = Walker.create(walker_name: "Gisela Crooks", walker_email: Faker::Internet.unique.email, location: "Monroe, CT", rates: rand(25..35), services: "Dog Walking", walker_img:"https://images.unsplash.com/photo-1581527106934-25bc16f1d310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

puts "Seeding Appointments..."
 #=> appointment format maybe? "October 21, 2018 20:47"
a1 = Appointment.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), number_of_dogs: rand(1..3), group_walks: false, appointment: Faker::Time.forward(days: 14, period: :day, format: :long)) 
a2 = Appointment.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), number_of_dogs: rand(1..3), group_walks: false, appointment: Faker::Time.forward(days: 14, period: :day, format: :long)) 
a3 = Appointment.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), number_of_dogs: rand(1..3), group_walks: false, appointment: Faker::Time.forward(days: 14, period: :day, format: :long)) 

puts "Seeding Reviews..."

r1 = Review.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), date: Faker::Time.backward(days: 5, period: :all, format: :long), comment: "Best dog walker I have tried! My dog is much more well behaved on walks now. 10/10 would recommend!")
r2 = Review.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), date: Faker::Time.backward(days: 5, period: :all, format: :long), comment: "Such a great dog walker! Very professional and always treats my dogs with such great care!")
r3 = Review.create(client_id: rand(c1.id..c4.id), walker_id: rand(w1.id..w2.id), date: Faker::Time.backward(days: 5, period: :all, format: :long), comment: "Greatest dog walker ever!! My dogs are happy and so am I!")

puts "Done Seeding"