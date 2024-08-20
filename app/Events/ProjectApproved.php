<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;


class ProjectApproved
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct($project, $status)
    {
        if($status != "approved") return;

        $this->sendPostRequest($project);
    }

    public function sendPostRequest($text)
    {
        try {

            // The URL of the API or the endpoint to which the request will be sent
            $url = env('MODEL_TRAIN_URL', 'https://web-production-fbb59.up.railway.app/train');
    
            // The data you want to send in the request
            $data = [
                'text' => $text,
            ];
    
            // Send the POST request using the Http facade
            $response = Http::post($url, $data);
    
            // Handle the response
            return $response->successful();

        }
        catch(\Exception $e) {
            Log::error('Failed to store user data: ' . $e->getMessage(), [
                'exception' => $e,
            ]);
            return false;
        }
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
