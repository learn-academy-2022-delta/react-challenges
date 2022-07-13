require 'rspec'
require_relative 'rspec.rb'


describe 'Task' do 
    it 'has to be real' do
        expect { Task.new }.to_not raise_error
    end
    it 'it has a title' do
       my_task = Task.new
       my_task.title = 'Laundry Day'
       expect(my_task.title).to be_a String
       expect(my_task.title).to eq 'Laundry Day'
    end
    it 'has a description' do
        my_task = Task.new
        my_task.description = 'Put clothes in washing machine'
        expect(my_task.description).to be_a String
        expect(my_task.description).to eq 'Put clothes in washing machine'
     end
     it 'has a status' do
        my_task = Task.new
        my_task.status = 'in progress'
        expect(my_task.status).to be_a String
        expect(my_task.status).to eq 'in progress'
     end
     it 'can show status update' do
        my_task = Task.new
        expect{my_task.status_update}.to change{ my_task.status}.from('in progress').to('done')
     end
     it 'has a list of tasks' do
        expect { TaskList.new }.to include(@title)
     end
end

