<?php

use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->insert(
			[
				'name' => 'emails',
			]
		);
		DB::table('types')->insert(
			[
				'name' => 'attachments',
			]
		);
    }
}
