<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {

            $table->id();

            $table->string("title");
            $table->text("description");
            $table->string("file");
            $table->float('score');
            $table->string('status')->default('pending');

            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("supervisor_id");
            $table->unsignedBigInteger("department_id"); // due to the fact that both user and supervisor can belong to different departments

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
