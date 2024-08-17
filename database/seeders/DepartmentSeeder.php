<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('departments')->insert([
            [
                'name' => 'Computer Science',
                'max_year' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Electrical Engineering',
                'max_year' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mechanical Engineering',
                'max_year' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Business Administration',
                'max_year' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mathematics',
                'max_year' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more departments as needed
        ]);
    }
}
